import { faLocationDot } from '@fortawesome/free-solid-svg-icons/faLocationDot';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react'
import { Button, Container, Form, Image, Modal, Navbar } from 'react-bootstrap'
import jiomrt from '../../assets/images/jiomart-logo.png'
import { faCartShopping, faCircleUser, faList, faLocationCrosshairs, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { Link,  } from 'react-router-dom';



export default function Nav1() {
  //hoks area
  const [isHoverd, setIsHoverd] = useState(false)
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);


  //definetion area



  //return statments
  return (
    <Navbar expand="lg" className="nav-1">
      <Container style={{ width: '80%', padding: 0 }}>
        <Navbar.Brand href="#" style={{ color: 'white' }}><Image src={jiomrt} width="47" height="37" style={{ paddingRight: 10, }} />JioMart</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Button onClick={handleShow} style={{
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
          <Modal show={show} onHide={handleClose} className="custom-modal " animation={false} style={{ top: 53, marginLeft: -310 }}>
            <div className="modal-triangle ms-2" style={{ top: -20, left: 100, }} ></div>
            <Modal.Title className='mt-4 ms-4'>Select Delivery Location</Modal.Title>
            <Modal.Body className='ms-2'>Sign in or set delivery location to see product availability, offers and discounts.</Modal.Body>
            <Link to={'/Sign_Up'}>
              <Button style={{width:500}} className='ms-4 me-4 mb-3 pt-3 pb-3 rounded-5 full-w-hvr' >Sign in to select address</Button>
            </Link>
            <div className='hvr1 pt-4 pb-4'
              style={{
                marginLeft: 30,
                marginRight: 20,
                height: 40,
                width: 170,
                borderRadius: 40,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer',
              }}
            >
              <FontAwesomeIcon icon={faLocationDot} className='pe-3' />
              Enter a pincode
            </div>
            <div className='hvr1 pt-4 pb-4 mb-3'
              style={{
                marginLeft: 30,
                marginRight: 20,
                height: 40,
                width: 200,
                borderRadius: 40,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer',
              }}
            >
              <FontAwesomeIcon icon={faLocationCrosshairs} className='pe-3' />
              Detect My Location
            </div>
          </Modal>
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
            <Button variant="link" style={{ padding: '0', color: 'white', fontSize: '16px', textDecoration: 'none', paddingBottom: '2px ' }}>
              Sign In
            </Button>
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
