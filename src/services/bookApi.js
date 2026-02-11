export const fetchBooks = async (query) => {
  const res = await fetch(`https://openlibrary.org/search.json?title=${query}`);
  if (!res.ok) {
    throw new Error(`API error: ${res.status} ${res.statusText}`);
  }
  const data = await res.json();
  return data.docs || [];
};