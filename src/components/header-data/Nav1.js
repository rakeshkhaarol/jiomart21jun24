import { faLocationDot } from '@fortawesome/free-solid-svg-icons/faLocationDot';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react'
import { Button, Container, Form, Image, Navbar } from 'react-bootstrap'
import jiomrt from '../../assets/images/jiomart-logo.png'
import { faCartShopping, faCircleUser, faList, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';


export default function Nav1() {
  //hoks area
  const [isHoverd, setIsHoverd] = useState(false)

  //definetion area


  //return statments
  return (
    <Navbar expand="lg" className="nav-1">
      <Container style={{ width: '80%', padding: 0 }}>
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
            fontSize: '15px'
          }}
           onMouseEnter={() => { setIsHoverd(true) }} 
          onMouseLeave={() => { setIsHoverd(false) }}>
            <FontAwesomeIcon style={{ fontSize: '13px', paddingRight: 5 }} icon={faLocationDot} />Deliver To Mumbai 400020</Button>

          <Form className="d-flex" style={{ width: '57%' }}>
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
          <div className='hvr'
            style={{
              marginLeft: 30,
              marginRight: 20,
              height: 40,
              width: 40,
              borderRadius: 40,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer', // Change cursor type as needed
            }}
          >
            <FontAwesomeIcon icon={faCartShopping} style={{ color: 'white', fontSize: '20px' }} />
          </div>
          <div className='hvr'
            style={{
             
              width: 90,
              height: 40,
              borderRadius: '40px', // Corrected borderRadius value
            
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer',

            }}
          >
              <FontAwesomeIcon icon={faCircleUser} style={{ paddingRight: 5, fontSize: '24px', color: 'white' }} />
            <Button variant="link" style={{ padding: '0', color: 'white', fontSize: '16px', textDecoration: 'none', paddingBottom:'2px ' }}>
              Sign In
            </Button>
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
