import "./style.css";
import type { RootState } from "@store/store";
import Router from "./router";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";

import { getTheme } from "./app/data/theme";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

export default function App () {
  const queryClient = new QueryClient();

  const dispatch = useDispatch();

  const ThemeState = useSelector((state: RootState) => state.theme);

  useEffect(() => {
    dispatch(getTheme());
  }, []);

  useEffect(() => {
    if (ThemeState.theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [ThemeState]);

  return (
    <QueryClientProvider client={queryClient}>
      <Router />
    </QueryClientProvider>
  );
}
