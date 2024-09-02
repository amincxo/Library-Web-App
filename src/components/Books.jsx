import { useState } from "react"

import { books } from "../constants/mockData";
import BookCard from "./BookCard";


function Books() {
    const [liked , setLiked] = useState([]);

    const handelLikedList = (book , status) => {
        if(status) {
            const newLikedList = liked.filter((i) => i.id !== book.id);
            setLiked(newLikedList);
        } else {
            setLiked((liked) => [...liked, book])
        }
    };

  return (
    <>
    <div> {books.map(book => (
        <BookCard key={book.id} data={book} handelLikedList={handelLikedList} />
    ))}
    </div>
    {!!liked.length && <div>asdf</div>}
    </>
  )
}

export default Books