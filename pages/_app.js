import "../styles/globals.scss";
import 'bootstrap/dist/css/bootstrap.min.css';
import Providers from "./utils/Providers";
import { MyContextProvider } from "./context/CustomContext";

function MyApp({ Component, pageProps }) {
  return (
    <MyContextProvider>
      <Component {...pageProps} />
    </MyContextProvider>
  )
}

export default MyApp;
