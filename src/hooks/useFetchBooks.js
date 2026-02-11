import { useState } from "react";
import { fetchBooks } from "../services/bookApi";

export const useFetchBooks = () => {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const searchBooks = async (query) => {
    if (!query) return;
    setLoading(true);
    setError("");
    setBooks([]);
    try {
      const data = await fetchBooks(query);
      setBooks(data.slice(0, 20)); // limit results
    } catch (err) {
      setError("Something went wrong. Try again!");
    }
    setLoading(false);
  };

  return { books, loading, error, searchBooks };
};