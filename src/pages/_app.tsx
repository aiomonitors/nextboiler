import React from 'react';
import { AppProps } from 'next/app';
import { createGlobalStyle } from 'styled-components';
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const GlobalStyles = createGlobalStyle<{ theme: any }>`
     body {
        font-family: --apple-system, BlinkMacSystemFont, "Helvetica Neue", Helvetica, sans-serif;
        margin: 0;
        display: block;
        width: 100%;
        min-height: 100vh;
  		  min-height: -webkit-fill-available;
        image-rendering: -moz-crisp-edges;
        image-rendering: -o-crisp-edges;
        image-rendering: -webkit-optimize-contrast;
        image-rendering: crisp-edges;
        -ms-interpolation-mode: nearest-neighbor;
        text-rendering: optimizeLegibility;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        background: #f8f9f9;
     }

     html {
       font-size: 16px;
       height: -webkit-fill-available;

       @media screen and (max-width: 448px) {
        font-size: 13px;
      }
     }    
`;

export default function MyApp({ Component, pageProps }: AppProps): JSX.Element {
  return (
    <>
      <>
        <Component {...pageProps} />
        <GlobalStyles />
      </>
    </>
  );
}
