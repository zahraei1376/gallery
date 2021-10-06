import '../styles/globals.css'
import { Provider } from 'react-redux';
import {store} from "../redux/store";
import Head from "next/head";
import Link from "next/link";
function MyApp({ Component, pageProps }) {
  return (
    // <Provider store = {store}>
    //   <Component {...pageProps} />
    // </Provider>
    <div>
      <Head>
          <link
            rel="preload"
            // href="/fonts/EBGaramond/EBGaramond-Regular.ttf"
            as="font"
            crossOrigin=""
            href="/fonts/style.css"
            // rel="stylesheet"
          />
        </Head>
        <body>
          <Provider store = {store}>
            <Component {...pageProps} />
          </Provider>
        </body>
    </div>
    )
}

export default MyApp
