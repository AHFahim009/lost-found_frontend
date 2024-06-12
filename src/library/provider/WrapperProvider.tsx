"use client"
import { ThemeProvider } from "@mui/material";
import { ReactNode } from "react";
import { theme } from "../theme/theme";
import { Provider } from "react-redux";
import { store } from "@/redux/store";

const WrapperProvider = ({ children }: { children: ReactNode }) => {
  return (
    <>
      <Provider store={store}>
        <ThemeProvider theme={theme}>{children}</ThemeProvider>
      </Provider>
    </>
  );
};
export default WrapperProvider;
