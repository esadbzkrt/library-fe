import  React,{useEffect,useState} from 'react';
import SearchBar from '../components/searchBar/SearchBar';
import BookCard from '../components/bookCard/BookCard';


function SearchPage() {

    const [books, setBooks] = useState([]);
    useEffect(() => {
      fetch("http://localhost:5000/api/book")
        .then(res => res.json())
        .then(res => setBooks(res));
    }, []);

  return (
    <div>
      <SearchBar />
      {books.map((book,index) => (
        <BookCard
          key={book.name + `${index}` }
          name={book.bookName}
          author={book.author}
          category={book.category}
          publisher={book.publisher}
        />
      ))}
    </div>
  )
}

export default SearchPage