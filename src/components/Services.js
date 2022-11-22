import React from 'react'
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
export default function Services() {
  return (
    <>
      <div className='container'>
        <h1 className='service-heading'>OUR TEAM LEADERS</h1>
        <p className='service-para'>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut ex ea commodo consequat. commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit cillum dolore eu fugiat nulla pariatur.Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
      </div>
      <div className='container mb-5'>
        <Row xs={1} md={3} className="g-4">
          {Array.from({ length: 3 }).map((_, idx) => (
            <Col>

              <Card.Img variant="top" src="./assets/images/card-image.png" />
              <Card.Body>
                <Card.Title className='pt-5 pb-5 text-center'>Javier Bardem</Card.Title>
                <Card.Text className='text-center card-para'>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.
                </Card.Text>
              </Card.Body>

            </Col>
          ))}
        </Row>
      </div>
    </>
  )
}
