import { books } from "../constants/mockData"
import BookCard from "./BookCard"


function Books() {
  return (
    <>
    <div> {books.map(book => (
        <BookCard key={book.id} data={book} />
    ))} </div>
    
    </>
  )
}

export default Books