import React from 'react'

const Middle = () => {
  return (
    
    <main className='main container'>
        <div className='main-content'>
            <h1>YOUR FEET DESERVE THE BEST</h1>
            <p>YOUR FEET DESERVE THE BEST AND WE ARE HERE TO HELP YOU WITH OUR SHOES.YOUR FEET DESERVE THE BEST AND WE ARE HERE TO HELP YOU WITH OUR SHOES.</p>

            <div className='main-button'>
                <button  className="button">ShopNow</button>
                <button  className="secondary-btn">Category</button>
            </div>
            <div className="footer">
                <p>Also Available on</p>
                <div className="brand-img">
                    <img src="/flipkart.png" alt="" />
                    <img src="/amazon.png" alt="" />
                </div>
            </div>
            
        </div>
        <div className='main-image'>
            <img src="/shoe_image.png" alt="shoes" />
        </div>
    </main>
  )
}

export default Middle;