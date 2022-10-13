import BookModel from "src/models/BookModel";
import getHost from "./getHost";
import { getTokenFromLocalStorage } from "./session";

export const getAllBooksByToken = async () => {
  return fetch(`${getHost()}/books`, {
    headers: {
      Authorization: `Bearer ${getTokenFromLocalStorage()}`
    }
  }).then((res) => res.json()) as Promise<Array<BookModel>>;
};
