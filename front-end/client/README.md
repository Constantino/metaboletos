# React dApp (with v2 EthereumProvider + Ethers.js)

> **⚠️ This provider-based example is currently reliant on the deprecated `2.0.0-beta.26` SDK. ⚠️**
>
> This example will be updated to be compatible with the latest v2 SDK (`2.0.0-beta.100+`) in due time.
> In the meantime, please use the up-to-date [standalone client example](../react-dapp-v2/).

🔗 Live dapp demo - https://react-dapp-v2-with-ethers.vercel.app <br />
🔗 Live wallet demo - https://react-wallet.walletconnect.com/ <br />
📚 WalletConnect v2 Docs - https://docs.walletconnect.com/2.0

## Overview

This is an example implementation of a React dApp (generated via `create-react-app`) using the v2 [`EthereumProvider`](https://docs.walletconnect.com/2.0/quick-start/dapps/ethereum-provider) together with [`Ethers.js`](https://docs.ethers.io/v5/) to:

- handle pairings
- manage sessions
- send JSON-RPC requests to a paired wallet

## Running locally

Install the app's dependencies:

```bash
yarn
```

Set up your local environment variables by copying the example into your own `.env.local` file:

```bash
cp .env.local.example .env.local
```

Your `.env.local` now contains the following environment variables:

- `REACT_APP_PROJECT_ID` (placeholder) - You can generate your own ProjectId at https://cloud.walletconnect.com
- `REACT_APP_INFURA_ID` (placeholder) - You can generate your own Infura ID via https://infura.io/
- `REACT_APP_RELAY_URL` (already set)

## Develop

```bash
yarn start
```

## Test

```bash
yarn test
```

## Build

```bash
yarn build
```
