export const fetchBooks = async (query) => {
  const res = await fetch(`https://openlibrary.org/search.json?title=${query}`);
  const data = await res.json();
  return data.docs || [];
};