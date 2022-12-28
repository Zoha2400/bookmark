import React from 'react'
import './header.scss'
import {
    Routes,
    Route,
    Link
  } from "react-router-dom";

function Header() {
  return (
    <header>
        <div className="hd-cont container">
            <div className="brand">
                <Link to={'/'}>
                  BookMark
                </Link>
            </div>

            <div className="items">
                <p className="hitem"><Link to={'/search'}>Search</Link></p>
                <p className="hitem"><Link to={'/add'}>Add</Link></p>
                <p className="hitem"><Link to={'/remove'}>Remove</Link></p>
                <p className="hitem"><Link to={'/all'}>All</Link></p>
            </div>
        </div>
    </header>
  )
}

export default Header