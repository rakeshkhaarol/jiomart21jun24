import { faLocationDot } from '@fortawesome/free-solid-svg-icons/faLocationDot';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect, useRef, useState } from 'react'
import { Button, Container, Form, Image, Modal, Navbar } from 'react-bootstrap'
import jiomrt from '../../assets/images/jiomart-logo.png'
import allimg from '../../assets/images/electronics.webp'
import allimg1 from '../../assets/images/fashion.webp'
import { faAngleLeft, faAngleRight, faCartShopping, faCircleUser, faList, faLocationCrosshairs, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { Link, } from 'react-router-dom';



export default function Nav1() {
  //hoks area
  const [isHoverd, setIsHoverd] = useState(false)
  const [show, setShow] = useState(false);
  const [show1, setShow1] = useState(false);

  const searchModelRef = useRef(null);

  const handleClose = () => setShow(false);
  const handleClose1 = () => setShow1(false);
  const handleShow = () => setShow(true);
  const handleShow1 = () => setShow1(true);
  const [currentStartIndex, setCurrentStartIndex] = useState(0);
  const [visibleImagesCount, setVisibleImagesCount] = useState(5);
  const containerRef = useRef(null);
  const images = [
    { allimg },
    allimg1,

    "https://i.etsystatic.com/14466987/r/il/5f0e31/2268038976/il_fullxfull.2268038976_ofll.jpg",
    "https://tse1.mm.bing.net/th?id=OIP.LrKLaw3dS2YgwMh5xVJjggHaIJ&pid=Api&P=0&h=220",
    "https://tse1.mm.bing.net/th?id=OIP.LrKLaw3dS2YgwMh5xVJjggHaIJ&pid=Api&P=0&h=220",
    "https://tse1.mm.bing.net/th?id=OIP.LrKLaw3dS2YgwMh5xVJjggHaIJ&pid=Api&P=0&h=220",
    'https://i.etsystatic.com/14466987/r/il/5f0e31/2268038976/il_fullxfull.2268038976_ofll.jpg'
    // Add more image URLs as needed
  ];
  const imageSize = 75; // size of the images
  const imageMargin = 20; // margin for the images

  useEffect(() => {
    const handleResize = () => {
      if (containerRef.current) {
        const containerWidth = containerRef.current.offsetWidth;
        const count = Math.max(1, Math.floor(containerWidth / (imageSize + imageMargin)));
        setVisibleImagesCount(count);
      }
    };

    window.addEventListener('resize', handleResize);
    handleResize(); // initial call

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const handleNext = () => {
    if (currentStartIndex + visibleImagesCount < images.length) {
      setCurrentStartIndex(currentStartIndex + 1);
    }
  };

  const handlePrev = () => {
    if (currentStartIndex > 0) {
      setCurrentStartIndex(currentStartIndex - 1);
    }
  };

  const visibleImages = images.slice(currentStartIndex, currentStartIndex + visibleImagesCount);


  //definetion area
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (searchModelRef.current && !searchModelRef.current.contains(event.target)) {
        handleClose1();
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [searchModelRef]);




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
              <Button style={{ width: 500 }} className='ms-4 me-4 mb-3 pt-3 pb-3 rounded-5 full-w-hvr' >Sign in to select address</Button>
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
          <Modal
            show={show1}
            onHide={handleClose1}
            aria-labelledby="contained-modal-title-vcenter"
            centered
            dialogClassName="custom-modal-2"
            animation={false}
          >
            <Modal.Body style={{paddingLeft:0,paddingRight:0}}>
              <div

                style={{ display: show1 ? 'block' : 'none' }}
                ref={searchModelRef}
                onHide={handleClose1}

              >
                <h6 className='mt-4 ms-4'>Discover More</h6>
                <Button className='mt-2 ms-4 rounded-5 r_custom_button' style={{ background: isHoverd ? 'none' : 'none', color: 'black', }}>cold drinks</Button>
                <Button className='mt-2 ms-1 rounded-5 r_custom_button' style={{ background: isHoverd ? 'none' : 'none', color: 'black', }}>sugar</Button>
                <Button className='mt-2 ms-1 rounded-5 r_custom_button' style={{ background: isHoverd ? 'none' : 'none', color: 'black', }}>biscuits</Button>
                <Button className='mt-2 ms-1 rounded-5 r_custom_button' style={{ background: isHoverd ? 'none' : 'none', color: 'black', }}>oil</Button>
                <Button className='mt-2 ms-1 rounded-5 r_custom_button' style={{ background: isHoverd ? 'none' : 'none', color: 'black', }}>mustard oil</Button>
                <Button className='mt-2 ms-4 rounded-5 r_custom_button' style={{ background: isHoverd ? 'none' : 'none', color: 'black', }}>bharat rise</Button>
                <Button className='mt-2 ms-1 rounded-5 r_custom_button' style={{ background: isHoverd ? 'none' : 'none', color: 'black', }}>rise</Button>
                <Button className='mt-2 ms-1 rounded-5 r_custom_button' style={{ background: isHoverd ? 'none' : 'none', color: 'black', }}>atta</Button>
                <Button className='mt-2 ms-1 rounded-5 r_custom_button' style={{ background: isHoverd ? 'none' : 'none', color: 'black', }}>ghee</Button>
                <Button className='mt-2 ms-1 rounded-5 r_custom_button' style={{ background: isHoverd ? 'none' : 'none', color: 'black', }}>surf surfexcel</Button>

                <h6 className='mt-4 ms-4'>Popular Catagories</h6>
                <div style={{ display: 'flex', alignItems: 'center', marginTop:20 }}>
                  {currentStartIndex > 0 && (
                    <button style={{ marginRight: '5px',marginLeft:5, height:40,width:40,borderRadius:40,border:'1px solid lightgray',background:'white'}} onClick={handlePrev}>
                      <FontAwesomeIcon icon={faAngleLeft} />
                    </button>
                  )}
                  <div style={{ display: 'flex', overflow: 'hidden' }} ref={containerRef}>
                    {visibleImages.map((src, index) => (
                      <div
                        key={index}
                        style={{
                          height: imageSize,
                          width: imageSize,
                          borderRadius: '50%',
                          background: '#FDE7E7',
                          margin: '0 10px',
                          paddingTop: 10,

                          paddingBottom: 10,
                          display: 'flex',
                          justifyContent: 'center',
                          alignItems: 'center',
                          cursor: 'pointer'
                        }}
                      >
                        <div style={{ height: imageSize, width: imageSize, borderRadius: '50%', background: '#FDE7E7', overflow: 'hidden' }}>
                          <img
                            src={src}
                            alt={`Example ${index}`}
                            style={{ height: '100%', width: '100%', objectFit: 'cover' }}
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                  {currentStartIndex + visibleImagesCount < images.length && (
                    <button style={{ marginLeft:5,marginRight:5, height:40,width:40,borderRadius:40,border:'1px solid lightgray',background:'white'}} onClick={handleNext}>
                      <FontAwesomeIcon icon={faAngleRight} />
                    </button>
                  )}
                </div>
               
              </div>
            </Modal.Body>
          </Modal>
          <style jsx>{`
        .r_custom_button {
          border: 1px solid lightgray; /* Default border color */
          transition: border-color 0.1s;
        }
        .r_custom_button:hover {
          border: 1px solid black; /* Border color on hover */
        }
      `}</style>

          <style jsx>{`
        .custom-modal-2 .modal-content {
          border-radius: 30px; /* Adjust this value as needed */
          top:-30px;
          left:30px;
          height:500px;
          width:470px
        }
      `}</style>


          {/* <Modal
          animation={false}
        style={{margin:0,padding:0}}
            show={show1}
            onHide={() => setShow1(false)}
           
          >
            <div id='search-model' style={{ display: show1 ? 'block' : 'none' }} ref={searchModelRef} onHide={handleClose1}>
              <h6 className='mt-4 ms-4'>Discover More</h6>
              <Button className='mt-2 ms-4 rounded-5 text-secondary' style={{ background: isHoverd ? 'none' : 'none', }}>cold drinks</Button>
              <Button className='mt-2 ms-1 rounded-5 text-secondary' style={{ background: isHoverd ? 'none' : 'none', }}>sugar</Button>
              <Button className='mt-2 ms-1 rounded-5 text-secondary' style={{ background: isHoverd ? 'none' : 'none', }}>biscuits</Button>
              <Button className='mt-2 ms-1 rounded-5 text-secondary' style={{ background: isHoverd ? 'none' : 'none', }}>oil</Button>
              <Button className='mt-2 ms-1 rounded-5 text-secondary' style={{ background: isHoverd ? 'none' : 'none', }}>mustard oil</Button>
              <Button className='mt-2 ms-4 rounded-5 text-secondary' style={{ background: isHoverd ? 'none' : 'none', }}>bharat rise</Button>
              <Button className='mt-2 ms-1 rounded-5 text-secondary' style={{ background: isHoverd ? 'none' : 'none', }}>rise</Button>
              <Button className='mt-2 ms-1 rounded-5 text-secondary' style={{ background: isHoverd ? 'none' : 'none', }}>atta</Button>
              <Button className='mt-2 ms-1 rounded-5 text-secondary' style={{ background: isHoverd ? 'none' : 'none', }}>ghee</Button>
              <Button className='mt-2 ms-1 rounded-5 text-secondary' style={{ background: isHoverd ? 'none' : 'none', }}>surf surfexcel</Button>
            </div>
          </Modal> */}


          {/* <div id='search-model' style={{ display: show1 ? 'block' : 'none' }} ref={searchModelRef} onHide={handleClose1}>
            <h6 className='mt-4 ms-4'>Discover More</h6>
            <Button className='mt-2 ms-4 rounded-5 text-secondary' style={{background: isHoverd ? 'none' : 'none', }}>cold drinks</Button>
            <Button className='mt-2 ms-1 rounded-5 text-secondary'  style={{background: isHoverd ? 'none' : 'none', }}>sugar</Button>
            <Button className='mt-2 ms-1 rounded-5 text-secondary'  style={{background: isHoverd ? 'none' : 'none', }}>biscuits</Button>
            <Button className='mt-2 ms-1 rounded-5 text-secondary'  style={{background: isHoverd ? 'none' : 'none', }}>oil</Button>
            <Button className='mt-2 ms-1 rounded-5 text-secondary'  style={{background: isHoverd ? 'none' : 'none', }}>mustard oil</Button>
            <Button className='mt-2 ms-4 rounded-5 text-secondary'  style={{background: isHoverd ? 'none' : 'none', }}>bharat rise</Button>
            <Button className='mt-2 ms-1 rounded-5 text-secondary'  style={{background: isHoverd ? 'none' : 'none', }}>rise</Button>
            <Button className='mt-2 ms-1 rounded-5 text-secondary'  style={{background: isHoverd ? 'none' : 'none', }}>atta</Button>
            <Button className='mt-2 ms-1 rounded-5 text-secondary'  style={{background: isHoverd ? 'none' : 'none', }}>ghee</Button>
            <Button className='mt-2 ms-1 rounded-5 text-secondary'  style={{background: isHoverd ? 'none' : 'none', }}>surf surfexcel</Button>
          </div> */}
          <Form className="d-flex" style={{ width: '57%' }} >
            <div className="search-container">
              <FontAwesomeIcon icon={faMagnifyingGlass} className="search-icon" />
              <Form.Control
                style={{ borderRadius: '22px', background: '#0C5273', border: 'none', color: 'white', paddingLeft: '40px', paddingTop: '8px', paddingBottom: '8px', marginLeft: 5 }}
                type="search"
                placeholder="Search JioMart"
                className="me-5 placeholder_clr"
                aria-label="Search"
                onClick={handleShow1}
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
