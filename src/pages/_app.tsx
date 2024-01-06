import "@fortawesome/fontawesome-svg-core/styles.css";
import { ThemeProvider } from "../context/ThemeContext";
import "../styles/global.scss";

export default function App({ Component, pageProps }) {
  return (
    <ThemeProvider>
      <Component {...pageProps} />
    </ThemeProvider>
  );
}
