import '../styles/globals.css'
import { Provider } from 'react-redux';
import {store} from "../redux/store";
/////////////////////////////////////////
import { CookiesProvider } from "react-cookie";
/////////////////////////////////////////
function MyApp({ Component, pageProps }) {
  return (
    // <Provider store = {store}>
    //   <Component {...pageProps} />
    // </Provider>
    <div>
        <body>
          <CookiesProvider>
            <Provider store = {store}>
              <Component {...pageProps} />
            </Provider>
          </CookiesProvider>
        </body>
    </div>
    )
}

export default MyApp
