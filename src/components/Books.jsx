import { useState } from "react"

import { books as bookData } from "../constants/mockData";
import BookCard from "./BookCard";
import SideCard from "./SideCard";
import SearchBox from "./SearchBox";

import styles from './Books.module.css'


function Books() {
    const [books , setBooks ] = useState(bookData)
    const [liked , setLiked] = useState([]);
    const [search , setSearch] = useState([]);

    const handelLikedList = (book , status) => {
        if(status) {
            const newLikedList = liked.filter((i) => i.id !== book.id);
            setLiked(newLikedList);
        } else {
            setLiked((liked) => [...liked, book])
        }
    };

    const searchHandler = () => {
        if(search) {
            const newBook = bookData.filter(book => 
            book.title.toLowerCase().includes(search)
        );
        setBooks(newBook);
        } else {
            setBooks(bookData)
        }
    }
  return (
    <>
        <SearchBox search={ search } setSearch={setSearch} searchHandler={searchHandler} />
        <div className={styles.container} >
        <div className={styles.cards} > {books.map(book => (
            <BookCard key={book.id} data={book} handelLikedList={handelLikedList} />
        ))}
        </div>
        {!!liked.length && <div className={styles.favarite} >
            <h4>Favarites</h4>
            {liked.map(book => <SideCard key={book.id} data={book} />)}</div>}
        </div>
    </>
  )
}

export default Books