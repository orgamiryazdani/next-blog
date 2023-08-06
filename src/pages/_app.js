import '../../styles/globals.css'
import { Toaster } from "react-hot-toast";
import { wrapper } from 'src/redux/store';

function App({ Component, pageProps }) {
  return <>
    <Component {...pageProps} />
    <Toaster />
  </>
}

export default wrapper.withRedux(App)