import { useState } from 'react'
import star from '../public/images/icon-star.svg'
import anne from '../public/images/image-anne.jpg'
import colton from '../public/images/image-colton.jpg'
import irene from '../public/images/image-irene.jpg'
import './App.css'

function App() {

  return (
    <div className='App'>
      <header>
        <h1>10,000+ of our users love our products.</h1>
        <p>
        We only provide great products combined with excellent customer service.
        See what our satisfied customers are saying about our services.
        </p>
      </header>
      <ul>
        <li className='rating'>
          Rated 5 Stars in Reviews
        </li>
        <li className='rating'>
          Rated 5 Stars in Report Guru
        </li>
        <li className='rating'>
          Rated 5 Stars in BestTech
        </li>
      </ul>
      <ul>
        <li className='profile'>
          <img src={colton} alt="" className='profile-icon'></img>
          <p>
            Colton Smith 
          </p>
          <p className='verified'>
            Verified Buyer
          </p>
          <p className='testimony'>
            "We needed the same printed design as the one we had ordered a week prior.
            Not only did they find the original order, but we also received it in time.
            Excellent!"
          </p>
        </li>

        <li className='profile'>
          <img src={irene} alt="" className='profile-icon'></img>
          <p>
            Irene Roberts 
          </p>
          <p className='verified'>
            Verified Buyer
          </p>
          <p className='testimony'>
            "Customer service is always excellent and very quick turn around. Completely
            delighted with the simplicity of the purchase and the speed of delivery."
          </p>
        </li>

        <li className='profile'>
          <img src={anne} alt="" className='profile-icon'></img>
          <p>
            Anne Wallace 
          </p>
          <p className='verified'>
            Verified Buyer
          </p>
          <p className='testimony'>
            "Put an order with this company and can only praise them for the very high
            standard. Will definitely use them again and recommend them to everyone!"
          </p>
        </li>
      </ul>
    </div>
  )
}

export default App
