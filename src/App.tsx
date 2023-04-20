import { useState } from 'react'
import './App.css'

function App() {

  return (
    <div>
      <header>
        <h1>10,000+ of our users love our products.</h1>
        <p>
        We only provide great products combined with excellent customer service.
        See what our satisfied customers are saying about our services.
        </p>
      </header>
      <aside>
        <p>
          Rated 5 Stars in Reviews
        </p>
        <p>
          Rated 5 Stars in Report Guru
        </p>
        <p>
          Rated 5 Stars in BestTech
        </p>
      </aside>
      <main>
        <div>
        <p>
          Colton Smith 
        </p>
        <p>
          Verified Buyer
        </p>
        <p>
          "We needed the same printed design as the one we had ordered a week prior.
          Not only did they find the original order, but we also received it in time.
          Excellent!"
        </p>
        </div>
        <div>
        <p>
          Irene Roberts 
        </p>
        <p>
          Verified Buyer
        </p>
        <p>
          "Customer service is always excellent and very quick turn around. Completely
          delighted with the simplicity of the purchase and the speed of delivery."
        </p>
        </div>
        <div>
        <p>
          Anne Wallace 
        </p>
        <p>
          Verified Buyer
        </p>
        <p>
          "Put an order with this company and can only praise them for the very high
          standard. Will definitely use them again and recommend them to everyone!"
        </p>
        </div>
      </main>
    </div>
  )
}

export default App
