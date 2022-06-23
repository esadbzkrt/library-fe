import React, { useEffect, useState } from "react";
import SearchBar from "../components/searchBar/SearchBar";
import BookCard from "../components/bookCard/BookCard";

function SearchPage() {
  const [pageNumber, setPageNumber] = useState(1);
  const [numberOfPages, setNumberOfPages] = useState(0);
  const [books, setBooks] = useState([]);

  const pages = new Array(numberOfPages).fill(null).map((v, i) => i);
  useEffect(() => {
    fetch("http://localhost:5000/api/book")
      .then((res) => res.json())
      .then(({ books, totalPageNumber }) => {
        console.log(books);
        setBooks(books.rows);
        setNumberOfPages(totalPageNumber);
        console.log("pages", pages);
        console.log("totalPageNumber", totalPageNumber);
      });
  }, [pageNumber]);

  return (
    <div className="">
      <SearchBar />
      <div className="flex justify-center mt-4">
        <h1 className="text-lg">Page of {pageNumber}</h1>
      </div>
      {books.map((book, index) => (
        <BookCard    
          key={book.name + `${index}`}
          name={book.bookName}
          author={book.author}
          category={book.category}
          publisher={book.publisher}
        />
      ))}
      <div className="flex justify-center mt-4">
        {pages.map((pageIndex) => (
          <button
            className="w-8 h-8 mx-2 mt-2 border rounded-lg hover:border-black border-gray-300 border-spacing-1"
            key={pageIndex}
            onClick={() => setPageNumber(pageIndex + 1)}
          >
            {pageIndex + 1}
          </button>
        ))}
      </div>
    </div>
  );
}

export default SearchPage;
