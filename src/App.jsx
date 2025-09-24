import SearchBar from "./components/SearchBar";
import BookList from "./components/BookList";
import { useFetchBooks } from "./hooks/useFetchBooks";

function App() {
  const { books, loading, error, searchBooks } = useFetchBooks();

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 p-6 text-gray-800 dark:text-gray-100">
      <h1 className="text-5xl font-extrabold text-center mb-10 text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-600">
        📚 Book Finder
      </h1>

      <SearchBar onSearch={searchBooks} />

      {error && (
        <p className="text-center text-red-500 font-semibold mb-4">{error}</p>
      )}

      <BookList books={books} loading={loading} />
    </div>
  );
}

export default App;
