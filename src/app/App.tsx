import "./app.css";
import { FC } from "react";
import { ReactQueryPage } from "../page/reactQueryPage";


export const App: FC = () => {
  return (
    /**
     * Use <ZustandPage /> component inside <App /> for testing request with Zustand.
     */

    <ReactQueryPage />
  );
};