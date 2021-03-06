import React from 'react'
import { Link } from 'react-router-dom'
import Carditems from './Carditems'
import './Cards.css'

const Cards = () => {
  return (
    <div className='cards'>
      <h1>Check out these Awesome Categories</h1>
      <div className="cards__container">
          <div className="cards__wrapper">
            <ul className="cards__items">
              <Carditems 
              src='images/img-9.jpg'
              text="Home & interior images"
              label='Home'
              path='/services'
              />
              <Carditems 
              src='images/img-8.jpg'
              text="Enjoy Nature's serenity"
              label='Nature'
              path='/services'
              />
              <Carditems 
              src='images/img-5.jpg'
              text="Beach and oceanic veiw"
              label='Exotic'
              path='/services'
              />
            </ul>
            <ul className="cards__items">
              <Carditems 
              src='images/img-3.jpg'
              text='Landscape Aesthetics '
              label='Landscape'
              path='/services'
              />
              <Carditems 
              src='images/img-14.jpg'
              text='Anime Themed images'
              label='Anime'
              path='/services'
              />
              <Carditems 
              src='images/img-13.jpg'
              text='Abstract Aesthetics'
              label='Abstract'
              path='/services'
              />
            </ul>
            <Link to='/'><button id='btn-more'>More</button></Link>
          </div>
      </div>
    </div>
  )
}
 
export default Cards
