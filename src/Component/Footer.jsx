import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Button, Nav } from 'react-bootstrap';
import Bently1 from '/Bently1.png'
import Form from 'react-bootstrap/Form';

const Footer = () => {
  return (
    <div>
      <footer className='bg-black text-white' >
<Container fluid>

      <Row>

        <Col>
        <img src={Bently1} alt="" />
        <h6>Get in touch with Bently</h6>
      <p>Experience Luxury Beyond Limits. Home of the world's finest hypercars.</p>


        </Col>

        <Col>
        <h5>Quick Links</h5>
        <Nav>

         <Nav.Link href="/home and car details">Home/Discovery</Nav.Link>

          <Nav.Link href="/luxury cars">Luxury Cars</Nav.Link>

           <Nav.Link href="/vehicle prices">Vehicle Prices</Nav.Link>

            <Nav.Link href="/cinema location">Cinema Location</Nav.Link>

             <Nav.Link href="/showtimes">Showtimes</Nav.Link>
</Nav>
        </Col>

        <Col>
<h5>Explore</h5>
<Nav>
<Nav.Link href="/about us">About us</Nav.Link>
<Nav.Link href="/contact us">Contact us</Nav.Link>
<Nav.Link href="/my account">My Account</Nav.Link>
<Nav.Link href="/my bookings">My bookings</Nav.Link>
</Nav>
        </Col>

        <Col>
        <h5>Support</h5>
        <Nav>
        <Nav.Link href="/help center in details">Help Center/Services</Nav.Link>
<Nav.Link href="/FAQs">FAQs</Nav.Link>
<Nav.Link href="/booking assistance">Booking Assistance</Nav.Link>
<Nav.Link href="/cancellation policy">Cancellation Policy</Nav.Link>
</Nav>
        </Col>

        <Col>
        <h5>Follow us</h5>
        <Nav>
        <Nav.Link href="/facebook"><i class="fa-brands fa-facebook"></i>Facebook</Nav.Link>
<Nav.Link href="/instagram"><i class="fa-brands fa-instagram"></i>Instagram</Nav.Link>
<Nav.Link href="/x(twitter)"><i class="fa-brands fa-x-twitter"></i>X(Twitter)</Nav.Link>
<Nav.Link href="/Youtube"><i class="fa-brands fa-youtube"></i>Youtube</Nav.Link>
</Nav>
        </Col>
        
      

      </Row>

      <Row className='border-top border-secondary mt-5'>
        <Col>
        <h3>Stay Updated with Bently</h3>
        <p>Get the latest car releases, exclusive offers and car updates delivered to Your inbox</p>
        </Col>
        <Col>
        <Form>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="name@example.com" />
      </Form.Group>

      <Button type='button' style={{backgroundColor: 'goldenrod', color: 'black', whiteSpace:'nowrap'}}>Subscribe</Button>
    </Form>
    
        </Col>
      </Row>

      <Row  className='border-top border-secondary mt-5 py-4'>
        <Col>&copy; {new Date().getFullYear()} Bently. All Rights Reserved.</Col>
      </Row>
    </Container>
      </footer>
    </div>
  )
}

export default Footer