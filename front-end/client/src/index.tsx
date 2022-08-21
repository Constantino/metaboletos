import * as React from "react";
import * as ReactDOM from "react-dom";
import { createGlobalStyle } from "styled-components";
import { ClientContextProvider } from "./contexts/ClientContext";

import App from "./App";
import App2 from "./App2";
import { globalStyle } from "./styles";
const GlobalStyle = createGlobalStyle`
  ${globalStyle}
`;

declare global {
  // tslint:disable-next-line
  interface Window {
    blockies: any;
  }
}

ReactDOM.render(
  <>
    <GlobalStyle />
    <ClientContextProvider>
      <App />
      <App2 />
    </ClientContextProvider>
  </>,
  document.getElementById("root"),
);
