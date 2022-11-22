import React from 'react'
import Card from 'react-bootstrap/Card';

export default function Portfolio() {
  return (
    <div className='portfolio'>
      <div className='container pb-5'>
        <h1 className='portfolio-heading'>OUR GALLERY</h1>
        <p className='portfolio-para'>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut ex ea commodo consequat.Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut ex ea commodo consequat.</p>
      </div>
      <div className='container-fluid mb-5'>
      <Card.Img variant="top" className='' src="./assets/images/gallery-image.png" />
      </div>
    </div>
  )
}
