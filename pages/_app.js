import { ProvideCoasterContext } from "../src/contexts/coasterContext";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <ProvideCoasterContext>
      <Component {...pageProps} />;
    </ProvideCoasterContext>
  );
}

export default MyApp;
