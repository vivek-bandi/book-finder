import placeholder from "../assets/placeholder.jpg";
function BookCard({ book }) {
  const cover = book.cover_i
    ? `https://covers.openlibrary.org/b/id/${book.cover_i}-L.jpg`
    : placeholder;

  return (
    <div className="bg-white/30 backdrop-blur-md border border-white/30 rounded-xl shadow-lg overflow-hidden hover:scale-105 hover:shadow-2xl transition-transform duration-300">
      <img src={cover} alt={book.title} className="w-full h-64 object-cover" onError={(e) => { e.target.src = placeholder; }} />
      <div className="p-5 flex flex-col">
        <h2 className="font-bold text-lg mb-1">{book.title}</h2>
        {book.author_name && (
          <p className="text-sm text-amber-300 mb-1">
            By {book.author_name.join(", ")}
          </p>
        )}
        <p className="text-xs text-gray-800">
          First Published: {book.first_publish_year || "N/A"}
        </p>
      </div>
    </div>
  );
}

export default BookCard;
