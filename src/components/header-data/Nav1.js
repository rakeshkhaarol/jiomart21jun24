import { faLocationDot } from '@fortawesome/free-solid-svg-icons/faLocationDot';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react'
import { Button, Container, Form, Image, Nav, NavDropdown, Navbar } from 'react-bootstrap'
import jiomrt from '../../assets/images/jiomart-logo.png'

export default function Nav1() {
  //hoks area
  const [isHoverd, setIsHoverd] = useState(false)

  //definetion area


  //return statments
  return (
    <Navbar expand="lg" className="nav-1">
      <Container className='w-75'>
        <Navbar.Brand href="#" style={{ color:'white'}}><Image src={jiomrt}  width="47" height="37" style={{paddingRight:10 ,}}/>JioMart</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Button style={{ border: 'none', borderRadius: '20px', background: isHoverd ? '#0C5273' : 'none', marginLeft: '10px', marginRight: '20px', paddingLeft: '15px', paddingRight: '15px', height: '30px', paddingTop: 2, }} onMouseEnter={() => { setIsHoverd(true) }} onMouseLeave={() => { setIsHoverd(false) }}><FontAwesomeIcon style={{ fontSize: '13px', paddingRight: 5 }} icon={faLocationDot} />Deliver To Mumbai 400020</Button>

          <Form className="d-flex " style={{ width: '65%'}}>
            <Form.Control
              style={{ borderRadius: '18px' , background:'#0C5273' ,border:'none', color:'white'}}
              type="search"
              placeholder="Search JioMart"
              className="me-5"
              aria-label="Search"
            />
          </Form>
          <Nav.Link href="#action2">Link</Nav.Link>
          <NavDropdown title="Link" id="navbarScrollingDropdown">
            <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
            <NavDropdown.Item href="#action4">
              Another action
            </NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="#action5">
              Something else here
            </NavDropdown.Item>
          </NavDropdown>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
