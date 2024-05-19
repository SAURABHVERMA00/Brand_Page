import React from 'react'

const Navigation = () => {
  return (
    <nav className='container'>
        <div className="list">
          <img src="/brand_logo.png" alt="" />
        </div>

        <ul>
          <li>Menu</li>
          <li>Location</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
        <button className="button">Login</button>
      </nav>
  )
}
export default Navigation;
