import React, { useEffect, useState } from 'react'
import axios from 'axios'
import './Body.css'

const Body = () => {
  const [product, setProduct] = useState([]);

  const getData = async() => {
   await axios.get("https://fakestoreapi.com/products").then(response=>{
       console.log(response)
       setProduct(response.data)
    })
  }

  useEffect(() => {
    getData()
   }, [])

  return (
    <div className='image-main-container'>
      <div className='image-sub-container'>
        {product.map((item,index) => {
          return(
          <div className='map-div-container'>
            <img key={index} className='map-continer' src={item.image} alt='not avaliable' />
            <div className='item-category'>
              {item.category}
              </div>
            <div className='item-title'>
              {item.title}
              </div>
              <div className='item-price'>
              Price: {item.price} $  
              </div>
              <div className='item-rating'>
              Rating: {item.rating.rate} *
              </div>
            </div>
          ) 
        })}
      </div>
    </div>
  )
}

export default Body