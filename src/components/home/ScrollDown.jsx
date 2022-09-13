import React from 'react'

const ScrollDown = () => {
  return (
    <div className='scroll__down'>
        <a href="#about" className="mouse__wrapper">
            <p className="home__scroll-name">Scroll Down</p>
            <span className="mouse">
                <span className="wheel"></span>
            </span>
        </a>
    </div>
  )
}

export default ScrollDown