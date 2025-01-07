import React from 'react'

import { Link } from "react-router-dom"

function Header() {
  return (
    <div className='header'>
        <div className='header-left'>
            <Link className='link' to="/">Home</Link>
            <Link className='link' to="/products">Products</Link>
        </div>
        <div className='header-right'>
            <Link className='link' to="/about">About</Link>
        </div>
    </div>
  )
}

export default Header
