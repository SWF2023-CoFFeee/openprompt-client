<div align='center'>

![logo](https://github.com/SWF2023-CoFFeee/openprompt-client/assets/90181028/e3f51cb5-570b-47db-8f7f-43296acfa890)

# OpenPrompt


</div>

> This project was created by the CoFFeee team at the [2023 Seoul Web 3.0 Festival](https://www.seoulweb3festival.com/).

OpenPrompt sets new standards for the prompt market. We want to protect creators through Web 3.0 and technology to induce a virtuous cycle structure in the marketplace.


## Features

- **User System**: Implement registration and login system for users.
- **NFT Minting for Copyright Registration**: Enable users to register the copyright of their prompts via NFT minting.
- **Encryption and Decryption in Distributed File System**: Implement encryption and decryption of user's prompts in distributed file system to prevent unauthorized access and leakage.
- **Text Similarity Check for Copyright Protection**: Implement a feature to check the similarity of prompts' texts to prevent unauthorized secondary creations.
- **Prompt Sale Posts (CRUD)**: Implement features for users to create, read, update, and delete prompt sale posts.
- **Market PLP (Product Listing Page) - PDP (Product Detail Page)**: Implement a system that shows product listings and their detailed pages for users to browse and make purchase decisions.
- **Copyright Ownership Inquiry (Get NFT)**: Enable users to check their owned copyright (NFTs).
- **Smart Contract for 1:1 Copyright Trade (Transfer NFT)**: Implement a system for users to trade copyright 1:1 via smart contract.
- **1:N Trading through Ticket Purchase (Transaction)**: Implement a feature for users to conduct 1:N trading of prompts. When a purchase is made (through a transaction), the buyer receives a decryption key which allows them to read the encrypted prompt.


## Usecase

![image](https://github.com/SWF2023-CoFFeee/openprompt-client/assets/90181028/65aeb9c8-f0db-4aca-9ed7-74838e08353f)

Creators can register copyrights for their own **Awesome propmts** by minting NFT in our service. Metadata stored in a distributed file system is protected primarily by an encryption algorithm.

Promport, which is registered with our service, is available for 1:1 transactions in the existing NFT market as well as 1:N transactions through ticket sales.

When registering a prompot, it uses a similarity verification algorithm to prevent unauthorized secondary creations.

Through this, we want to overcome the limitations of NFTs as well as the new Promport market ecosystem.

## Getting Started

#### Install

```
npm install
```

#### Start

```
npm start
```

####  Run Ethereum Network for Dev 

```
npm run ganache
```

#### Build

```
npm build
```

#### env

Fill out `.env` 
```
REACT_APP_MAIN_SERVER_URL=${Server URL}
```


