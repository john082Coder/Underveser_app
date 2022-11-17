import "../styles/globals.scss";
import 'bootstrap/dist/css/bootstrap.min.css';
import Providers from "./utils/Providers";

function MyApp({ Component, pageProps }) {
  return (
    <Providers>
      <Component {...pageProps} />
    </Providers>
  )
}

export default MyApp;
