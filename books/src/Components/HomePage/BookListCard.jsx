import React from 'react'
import cover from '../../cover.jpg'
import './homepage.scss'


function BookListCard(props) {
  return (
    <div className='BookListCard-wrapper'>
        <div className='BookListCard container'>
            <div className='cover'>
                <img src={cover}/>
            </div>
            <div className='discription'>
                <h1 className='name'>{props.name}</h1>
                <p className='author'>{props.author}</p>

                <p className='text'>{props.text}</p>
            </div>
        </div>
    </div>
  )
}

export default BookListCard