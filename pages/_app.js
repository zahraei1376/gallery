import '../styles/globals.css'
import { Provider } from 'react-redux';
import { store } from "../redux/store";

function MyApp({ Component, pageProps }) {
  return (
    <div>
      <body>
        <Provider store={store}>
          <Component {...pageProps} />
        </Provider>
      </body>
    </div>
  )
}

export default MyApp
