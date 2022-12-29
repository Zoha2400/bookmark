import React from 'react'
import './bookpage.scss'

function BookPage({data}) {
  return (
    <div className='BookPage'>
        <h1>{data.name}</h1>
        <p>{data.author}</p>
        <span>{data.discription}</span>

    </div>
  )
}

export default BookPage