import React from 'react'
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';

export default function Contact() {
    return (
        <div className='contact'>
            <div className='container'>
                <h3 className='contact-heading'>CONTACT US</h3>
                <p className='contact-para'>Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                    accusantium doloremque laudantium, totam rem aperiam</p>
            </div>
            <div className='container'>
                <Form className='form-1'>
                    <Row className="mb-3">
                        <Form.Group as={Col} controlId="formGridEmail">
                            <Form.Control style={{background: '#2a3e47', border: 'none', borderBottom: '2px solid #6b7275', borderRadius: '0px'}} type="email" placeholder="Name" />
                        </Form.Group>
                        <Form.Group as={Col} controlId="formGridPassword">
                            <Form.Select style={{background: '#2a3e47', color: '#6b7275', border: 'none', borderBottom: '2px solid #6b7275', borderRadius: '0px'}} aria-label="Default select example">
                                <option>Category</option>
                                <option value="1">One</option>
                                <option value="2">Two</option>
                                <option value="3">Three</option>
                            </Form.Select>
                        </Form.Group>
                    </Row>
                    <Row className="mb-3">
                        <Form.Group as={Col} style={{color:'#6b7275'}} controlId="formGridEmail">
                            <Form.Control style={{background: '#2a3e47', border: 'none', borderBottom: '2px solid #6b7275', borderRadius: '0px'}} type="email" placeholder="Phone" />
                        </Form.Group>
                        <Form.Group as={Col} controlId="formGridPassword">
                            <Form.Select style={{background: '#2a3e47', color: '#6b7275', border: 'none', borderBottom: '2px solid #6b7275', borderRadius: '0px'}} aria-label="Default select example">
                                <option>City</option>
                                <option value="1">One</option>
                                <option value="2">Two</option>
                                <option value="3">Three</option>
                            </Form.Select>
                        </Form.Group>
                    </Row>
                    <Form.Group className="mb-3" controlId="formGridAddress1">
                        <Form.Control style={{background: '#2a3e47', border: 'none', borderBottom: '2px solid #6b7275', borderRadius: '0px'}} placeholder="Email" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                        <Form.Control style={{background: '#2a3e47', border: 'none', borderBottom: '2px solid #6b7275', borderRadius: '0px'}} as="textarea" placeholder="Message" rows={5} />
                    </Form.Group>
                    <div className='contact-btn'>
                    <Button variant="" style={{backgroundColor:'#89553b', color:'#fff', border:'none', borderRadius:'0px', padding:'10px 30px'}} type="submit">
                        Contact Us
                    </Button>
                    </div>
                </Form>
            </div>
        </div>
    )
}
