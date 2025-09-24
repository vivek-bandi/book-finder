import BookCard from "./BookCard";

function BookList({ books, loading }) {
  if (loading) {
    return (
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {Array.from({ length: 8 }).map((_, i) => (
          <div
            key={i}
            className="h-80 bg-gray-300/40 animate-pulse rounded-xl"
          ></div>
        ))}
      </div>
    );
  }

  if (!books.length) {
    return (
      <p className="text-center text-gray-500 text-lg">
        No books found. Try searching for something!
      </p>
    );
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
      {books.map((book, i) => (
        <BookCard key={book.key || i} book={book} />
      ))}
    </div>
  );
}

export default BookList;
