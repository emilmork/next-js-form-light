import Head from "next/head";
import { createGlobalStyle } from "styled-components";
import withRedux from "next-redux-wrapper";
import store from "../redux/store";
import { Provider } from "react-redux";

const GlobalStyle = createGlobalStyle`
  html {
    background-color: #F0EAF8;
  }
  body {
    padding: 0;
    margin: 0;
  }

  .p--large {
    padding: 2rem;
  }
  .p {
    padding: 1rem;
  }

  .mt {
    margin-top: 1rem;
  }
`;

function MyApp({ Component, pageProps }) {
  return (
    <div>
      <Head>
        <title>Zoogle forms</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"
        />
      </Head>
      <GlobalStyle />
      <Provider store={store}>
        <Component {...pageProps} />
      </Provider>
    </div>
  );
}

// Only uncomment this method if you have blocking data requirements for
// every single page in your application. This disables the ability to
// perform automatic static optimization, causing every page in your app to
// be server-side rendered.
//
// MyApp.getInitialProps = async (appContext) => {
//   // calls page's `getInitialProps` and fills `appProps.pageProps`
//   const appProps = await App.getInitialProps(appContext);
//
//   return { ...appProps }
// }

export default MyApp;
