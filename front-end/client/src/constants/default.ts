export const DEFAULT_MAIN_CHAINS = [
  // mainnets
  "eip155:1",
  "eip155:10",
  "eip155:100",
  "eip155:137",
  "eip155:42161",
  "eip155:42220",
];

export const DEFAULT_TEST_CHAINS = [
  // testnets
  "eip155:42",
  "eip155:69",
  "eip155:80001",
  "eip155:421611",
  "eip155:44787",
];

export const DEFAULT_CHAINS = [...DEFAULT_MAIN_CHAINS, ...DEFAULT_TEST_CHAINS];

export const DEFAULT_PROJECT_ID = process.env.REACT_APP_PROJECT_ID;

export const DEFAULT_INFURA_ID = process.env.REACT_APP_INFURA_ID;

export const DEFAULT_RELAY_URL = process.env.REACT_APP_RELAY_URL;

export const DEFAULT_EIP155_METHODS = ["eth_sendTransaction", "personal_sign", "eth_signTypedData"];

export const DEFAULT_LOGGER = "debug";

export const DEFAULT_APP_METADATA = {
  name: "React App",
  description: "React App for WalletConnect",
  url: "https://walletconnect.com/",
  icons: ["https://avatars.githubusercontent.com/u/37784886"],
};
