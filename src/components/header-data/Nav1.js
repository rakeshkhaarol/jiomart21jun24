import { faLocationDot } from '@fortawesome/free-solid-svg-icons/faLocationDot';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react'
import { Button, Container, Form, Image, NavDropdown, Navbar } from 'react-bootstrap'
import jiomrt from '../../assets/images/jiomart-logo.png'
import { faCartShopping, faList, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { faUser } from '@fortawesome/free-regular-svg-icons';

export default function Nav1() {
  //hoks area
  const [isHoverd, setIsHoverd] = useState(false)

  //definetion area


  //return statments
  return (
    <Navbar expand="lg" className="nav-1">
      <Container style={{ width: '80%' }}>
        <Navbar.Brand href="#" style={{ color: 'white' }}><Image src={jiomrt} width="47" height="37" style={{ paddingRight: 10, }} />JioMart</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Button style={{
            border: 'none',
            borderRadius: '20px',
            background: isHoverd ? '#0C5273' : 'none',
            marginLeft: '10px', marginRight: '20px',
            paddingLeft: '15px', paddingRight: '15px',
            height: '30px', paddingTop: 2,
          }} onMouseEnter={() => { setIsHoverd(true) }} onMouseLeave={() => { setIsHoverd(false) }}><FontAwesomeIcon style={{ fontSize: '13px', paddingRight: 5 }} icon={faLocationDot} />Deliver To Mumbai 400020</Button>

          <Form className="d-flex" style={{ width: '60%' }}>
            <div className="search-container">
              <FontAwesomeIcon icon={faMagnifyingGlass} className="search-icon" />
              <Form.Control
                style={{ borderRadius: '22px', background: '#0C5273', border: 'none', color: 'white', paddingLeft: '40px', paddingTop: '8px', paddingBottom: '8px', marginLeft: 5 }}
                type="search"
                placeholder="Search JioMart"
                className="me-5 placeholder_clr"
                aria-label="Search"
              />
              <FontAwesomeIcon icon={faList} className='doted_icon' />
            </div>
          </Form>
          <div
            style={{
              marginLeft: 30,
              marginRight: 20,
              height: 40,
              width: 40,
              borderRadius: 40,
              background: isHoverd ? '#0C5273' : 'none',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer', // Change cursor type as needed
            }}
            onMouseEnter={()=>{setIsHoverd(true)}}
            onMouseLeave={()=>{setIsHoverd(false)}}
          >
            <FontAwesomeIcon icon={faCartShopping} style={{ color: 'white', fontSize: '20px' }} />
          </div>
          <div
      style={{
        width: '30px',
        borderRadius: '40px', // Corrected borderRadius value
        background: isHoverd ? '#0C5273' : 'transparent',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        cursor: 'pointer',
        padding: '5px', // Added padding for better spacing
      }}
      onMouseEnter={() => setIsHoverd(true)}
      onMouseLeave={() => setIsHoverd(false)}
    >
      <Button variant="link" style={{ padding: '0', color: isHoverd ? 'white' : '#0C5273' }}>
        <FontAwesomeIcon icon={faUser} style={{ marginRight: '5px' }} /> Sign in
      </Button>
    </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
