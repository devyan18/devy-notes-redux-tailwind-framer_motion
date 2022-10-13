import { useQuery } from "@tanstack/react-query";
import { getAllBooksByToken } from "@utils/books";
import { useEffect, useState } from "react";
import BookModel from "src/models/BookModel";

export default function useBooks () {
  const { data, error, isLoading } = useQuery(["books"], getAllBooksByToken);

  const [books, setBooks] = useState<BookModel[]>([]);

  useEffect(() => {
    if (data) {
      setBooks(data);
    }
  }, [data]);

  const filter = (filter: string) => {
    if (data) {
      setBooks(data.filter((book) => {
        return book.name.toLowerCase().includes(filter.toLowerCase()) || book.describe.toLowerCase().includes(filter.toLowerCase());
      }));
    }
  };

  return { books, error, isLoading, filter };
}
