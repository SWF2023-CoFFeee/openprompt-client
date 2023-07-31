import { MetaMaskInpageProvider } from '@metamask/providers';
import Web3 from 'web3';
import { useEffect, useState } from 'react';

export const useWeb3 = (ethereum: MetaMaskInpageProvider) => {
  const [account, setAccount] = useState<string>('');
  const [web3, setWeb3] = useState<Web3 | undefined>(undefined);
  const [balance, setBalance] = useState<number>(0);
  const [transactions, setTractions] = useState<any[]>([]);

  const getCurChainId = async () => {
    const eth = window.ethereum as MetaMaskInpageProvider;
    const curChainId = await eth.request({
      method: 'eth_chainId',
    });

    return curChainId;
  };

  const addAndConnNetwork = async (chainId: string) => {
    const eth = window.ethereum as MetaMaskInpageProvider;

    const network = {
      chainId,
      chainName: 'kongTest',
      rpcUrls: ['http://127.0.0.1:8545'],
      nativeCurrency: {
        name: 'Ethereum',
        symbol: 'ETH',
        decimals: 18,
      },
    };

    await eth.request({
      method: 'wallet_addEthereumChain',
      params: [network],
    });
  };

  const getAccount = async () => {
    const eth = window.ethereum as MetaMaskInpageProvider;

    const [_account] = (await eth.request({
      method: 'eth_requestAccounts',
    })) as string[];
    setAccount(_account);

    return _account;
  };

  const getBalance = async (_web3: Web3, _account: string) => {
    const _balance = await _web3.eth.getBalance(_account);
    setBalance(Number(_balance) / 10 ** 18);
  };

  const fireTransaction = async (to: string, amount: string) => {
    try {
      const tx = {
        from: account,
        to: to,
        value: web3?.utils.toWei(amount, 'ether'),
      };

      await web3?.eth.sendTransaction(tx);

      const _balance = await web3?.eth.getBalance(account);
      setBalance(Number(_balance) / 10 ** 18);
    } catch (error) {
      console.error(error);
    }
  };

  const getTransactionsByAccount = async () => {
    const _transactions = [];
    const startBlockNumber = 0;
    let endBlockNumber;

    if (web3) {
      endBlockNumber = await web3.eth.getBlockNumber();
    }

    if (web3 && endBlockNumber) {
      for (let i = startBlockNumber; i <= endBlockNumber; i++) {
        const block = await web3.eth.getBlock(i, true);
        if (block != null && block.transactions != null) {
          _transactions.push(...block.transactions);
        }
      }

      const _transactionsByAccount = _transactions.filter((transaction) => {
        if (typeof transaction !== 'string') {
          return transaction.from === account || transaction.to === account;
        }
      });

      setTractions(_transactionsByAccount);
    }
  };

  useEffect(() => {
    (async function () {
      if (window.ethereum !== undefined) {
        const curChainId = await getCurChainId();
        const targetChainId = '0x1e2a';

        if (curChainId !== targetChainId) {
          await addAndConnNetwork(targetChainId);
        }

        const _web3 = new Web3(window.ethereum);
        setWeb3(_web3);

        window.ethereum.on('accountsChanged', async (accounts: unknown) => {
          if (
            Array.isArray(accounts) &&
            accounts.every((item) => typeof item === 'string')
          ) {
            setAccount(accounts[0]);
            await getBalance(_web3, accounts[0]);
          }
        });
      }
    })();
  }, []);

  useEffect(() => {
    getTransactionsByAccount();
  }, [web3, account]);

  return {
    account,
    web3,
    balance,
    transactions,
    fireTransaction,
    getAccount,
    getBalance,
  };
};
