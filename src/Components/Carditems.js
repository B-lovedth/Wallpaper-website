import React from 'react'
import { Link } from 'react-router-dom'


const Carditems = () => {
  return (
    <div>
        <li className="cards__item">
            <Link className='cards__item-__link'>
                <figure className="cards__item__pic-wrap">
                    <img src='/' alt='Travel image' className='cards__item__img'/>
                </figure>
                <div className="cards__item__info">
                    <h5 className="cards__item__text">
                    
                    </h5>
                </div>
            </Link>
        </li>
    </div>
  )
}

export default Carditems
