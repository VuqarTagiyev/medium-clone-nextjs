import "../styles/globals.css";
import { ContextProvider } from "./../context/index";

function MyApp({ Component, pageProps }) {
  return (
    <ContextProvider>
      <Component {...pageProps} />
    </ContextProvider>
  );
}

export default MyApp;
