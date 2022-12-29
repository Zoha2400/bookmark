import React from 'react'
import cover from '../../cover.jpg'
import './homepage.scss'
import { Link } from 'react-router-dom'


function BookListCard(props) {

  function activation(){
    fetch('/' + props.way).then(res => res.json()).then(data => {
      props.st(data);
    })
  }

  return (
    <div className='BookListCard-wrapper'>
        <div className='BookListCard'>
            <div className='cover'>
                <img src={cover}/>
            </div>
            <div className='discription'>
                <h1 className='name'>{props.name}</h1>
                <p className='author'>{props.author}</p>

                <div className='textWrapper'>
                  <p className='text'>{props.text}</p>
                  <div className='shadow'></div>
                </div>

                <div className='buttons'>
                  <Link to={'/' + props.way}>
                    <button id='read' onClick={activation}>Read</button>
                  </Link>
                  <button id='favorites'>+</button>
                </div>
            </div>

        </div>
    </div>
  )
}

export default BookListCard