import type { AppProps } from "next/app";
import AppSyncProvider from "@/lib/apolloConfig";
import * as AiIcons from "react-icons/ai";
import * as BsIcons from "react-icons/bs";
import "../styles/main.scss";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <AppSyncProvider>
      <main className="App">
        <div className="page-container">
          <StatusBar />
          <Component {...pageProps} />
        </div>
      </main>
    </AppSyncProvider>
  );
}

const StatusBar = () => {
  return (
    <div className="status-bar">
      <div className="status-bar-left">
        <p>3:25</p>
      </div>
      <div className="status-bar-right">
        <span>
          <AiIcons.AiFillSignal />
        </span>
        <span>
          <AiIcons.AiOutlineWifi />
        </span>
        <span>
          <BsIcons.BsBatteryFull />
        </span>
      </div>
    </div>
  );
};
