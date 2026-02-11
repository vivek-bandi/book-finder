import { useState } from "react";

function SearchBar({ onSearch }) {
  const [query, setQuery] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch(query.trim());
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col sm:flex-row justify-center items-center mb-10 gap-4"
    >
      <div className="relative w-full sm:w-96">
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search books by title..."
w          aria-label="Search books by title"
          className="pl-10 pr-5 py-3 rounded-full shadow-lg focus:ring-2 focus:ring-blue-500 w-full"
        />
        <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400">
          🔍
        </span>
      </div>
      <button
        type="submit"
        className="px-8 py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-full shadow-lg hover:scale-105 transition-transform"
      >
        Search
      </button>
    </form>
  );
}

export default SearchBar;
