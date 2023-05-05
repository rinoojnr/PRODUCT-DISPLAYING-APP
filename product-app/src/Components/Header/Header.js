import React from 'react'
import './Header.css'
// import {AiOutlineSearch} from 'react-icons/ai'



const Header = () => {
  return (
    <div className='header-component'>
       <div className='header-text'>
         Flipkart
      </div>
      <div className='header-subtext'>
         Explore plus 
         <input className='search-box' type='text' placeholder='Search for product,brands and more' ></input>
         
      </div>
    </div>
  )
}

export default Header