# MetaBoletos

Welcome to MetaBoletos, now **YOU** own the tickets to your favorite events!

## Live Demo

https://metaboletos.netlify.app/

## Technology Used
- IPFS (used to store art of each NFT ticket)
- Chainlink (used so we could display price in eth and USD)
- Wallet connect (for authentication and signature of transactions as Minting NFT tickets)

## How it works

![MetaBoletos Events](https://i.imgur.com/FJFFYWE.png)

![MetaBoletos MainPage](https://i.imgur.com/XYBVmG2.png)

## Installation
Require to have a file .env with the next variables:
REACT_APP_PROJECT_ID=<Your project ID here from wallet connect cloud>
REACT_APP_INFURA_ID=<your infura ID here>
REACT_APP_RELAY_URL=wss://relay.walletconnect.com
REACT_APP_UPLOAD_NFT_ENDPOINT=https://metaboletos.herokuapp.com/upload/nft

From the `front-end/client` folder, run:

```
yarn

yarn start
```

## Usage
This platform will be used to purchase tickets for events in the future allowing people to verify authenticity of the tickets and keep an NFT as a badge for attend the event. Also when the information is on blockchain then a system to verify that the user owns a ticket can be used. For example a tablet at the entrance with a Wallet conect window where the user scans to login and the system verifies the ticket allowing or denying the access
