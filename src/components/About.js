import React from 'react'
import Card from 'react-bootstrap/Card';

export default function About() {
    return (
        <div className='about'>
            <div className='container-fluid'>
                <div className='row'>
                    <div className='col-md-6'>
                        <div className='about-1'>
                        <Card.Img variant="top" className='' src="./assets/images/about-image-1.png" />
                        </div>
                    </div>
                    <div className='col-md-6'>
                        <Card className='mt-5'>
                            <Card.Body>
                                <Card.Title className='about-heading'>ABOUT US</Card.Title>
                                <Card.Text className='about-para'>
                                    Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                                    accusantium doloremque laudantium, totam rem aperiam
                                </Card.Text>
                            </Card.Body>
                            <Card.Img variant="top" className='p-3' src="./assets/images/about-image.png" />
                        </Card>
                    </div>
                </div>
            </div>
        </div>
    )
}
