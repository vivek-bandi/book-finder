# 📚 Book Finder

## A modern React web application to search and explore books using the **Open Library API**.Provides a clean, responsive interface with modern UI features.

## Features

- **Search Books**

  - Search books by title using the Open Library API.
  - Displays book title, authors, first published year, and cover image.
  - Graceful handling of missing data (fallback images, unknown authors, untitled books).

- **Responsive UI**

  - Mobile-friendly responsive grid layout.
  - Glassmorphism card design with hover animations.
  - Gradient background for a modern look.

- **Loading & Error Handling**
  - Skeleton loading cards while fetching data.
  - Displays error messages when no results are found or network issues occur.

---

## Tech Stack

- **Frontend:** React, Vite
- **Styling:** Tailwind CSS
- **API:** Open Library API (https://openlibrary.org/dev/docs/api/search)
- **Hosting:** Vercel

---

## How to Run Locally

1. **Clone the repository:**

   ```sh
   git clone https://github.com/vivek-bandi/book-finder.git
   cd book-finder
   ```

   - Install dependencies:
     ```sh
     npm install
     ```
   - Start the frontend:
     ```sh
     npm run dev
     ```
     **Access the app:**  
      Open [http://localhost:5173](http://localhost:5173) in your browser.

---
