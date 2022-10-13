import "tailwindcss/tailwind.css";

import ReactDOM from "react-dom/client";
import App from "./App";

import { store } from "./app/store";
import { Provider } from "react-redux";

const element = document.getElementById("root") as HTMLElement;

ReactDOM.createRoot(element).render(
  <Provider store={store}>
    <App />
  </Provider>
);
