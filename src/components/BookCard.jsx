import React from 'react'

function BookCard({data : { title , author , image ,language , pages }}) {

    console.log(language)
  return (
    <div>
        <img src={image}  alt={title} />
        <div>
            <h3>{title}</h3>
            <p>{author}</p>
            <div>
                <span>{language}</span>
                <span>{pages}</span>
            </div>
        </div>
        <button>Like</button>
    </div>
  )
}

export default BookCard