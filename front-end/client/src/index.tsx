import * as React from "react";
import * as ReactDOM from "react-dom";
import { createGlobalStyle } from "styled-components";
import { ClientContextProvider } from "./contexts/ClientContext";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// import App from "./App";
import App2 from "./App2";
import HomePage from "./webComponents/HomePage";

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
    <BrowserRouter>
      <ClientContextProvider>
        {/* <App /> */}
        <Routes>
          <Route path="/" element={<App2 />} />
          <Route path="home" element={<HomePage />} />
        </Routes>
      </ClientContextProvider>
    </BrowserRouter>
  </>,
  document.getElementById("root"),
);
