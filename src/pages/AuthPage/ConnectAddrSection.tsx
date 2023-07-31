import { Stack, Button, Typography } from '@mui/material';
import { MetaMaskImage } from '@/assets/images';
import { useWeb3 } from '@/lib/hooks/useWeb3';
import { TAuthStep } from '.';
export interface IConnectAddrSectionProps {
  onSwitchAuthStep: (key: TAuthStep) => void;
}
const ConnectAddrSection = ({ onSwitchAuthStep }: IConnectAddrSectionProps) => {
  const {
    userAddr,
    web3,
    userBalance,
    transactions,
    fireTransaction,
    getAccount,
    getBalance,
  } = useWeb3();

  const onConnect = async () => {
    const _account = await getAccount();
    if (_account && web3) {
      await getBalance(web3, _account);
    }
  };

  return (
    <Stack sx={{ width: '429px' }}>
      <Typography variant="body2" textAlign="center" sx={{ mb: '182px' }}>
        If you already have an account register ?
      </Typography>

      <Button type="button" variant="outlined" onClick={onConnect}>
        <img src={MetaMaskImage} alt="MetaMaskIcon" />
        MetaMask
      </Button>
    </Stack>
  );
};

export default ConnectAddrSection;
