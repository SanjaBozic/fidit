import { Button, Carousel, Col, Container, Form, Image, Nav, Navbar, Offcanvas, Row, Stack } from 'react-bootstrap';
import './App.css';
import ScrollspyNav from 'react-scrollspy';
import { useState } from 'react';

function App() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  return (
    <div className="App">
      <header className="App-header">
        <ScrollspyNav
            scrollTargetIds={["about", "gallery", "contact"]}
            activeNavClass="is-active"
            scrollDuration="1000"
            headerBackground="true"
            className='p-0 mb-0'
        >
          <Navbar key={'md'} expand={'md'} className="bg-body-secondary">
            <Container fluid>
              <Navbar.Brand href="#">FIDIT</Navbar.Brand>
              <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${'md'}`} />
              <Navbar.Offcanvas
                id={`offcanvasNavbar-expand-${'md'}`}
                aria-labelledby={`offcanvasNavbarLabel-expand-${'md'}`}
                placement="end"
              >
                <Offcanvas.Header closeButton>
                  <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${'md'}`}>
                    FIDIT
                  </Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>
                  <Nav className="justify-content-start flex-grow-1 pe-3">
                    <Nav.Link href="#about">About</Nav.Link>
                    <Nav.Link href="#gallery">Gallery</Nav.Link>
                    <Nav.Link href="#contact">Contact</Nav.Link>
                  </Nav>
                </Offcanvas.Body>
              </Navbar.Offcanvas>
            </Container>
          </Navbar>
        </ScrollspyNav>
        
        <div>
            <div id="about" className='p-2 FIDIT_background text-bg-dark '>
              <div className='container mt-3'>
                <h1 className='text-uppercase text-center my-5'>Faculty of Informatics and Digital Technologies</h1>
                <p className='text-center'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                <div className='d-flex justify-content-center gap-3 my-5'>
                  <Button className='bg-dark-subtle text-uppercase text-dark border-0 px-5'>First one</Button>
                  <Button className='bg-dark text-uppercase text-light border-0 px-5'>Second one</Button>
                </div>
              </div>
            </div>

            <div id="gallery">
              <div className='d-none d-md-block bg-white'>

                <Carousel className='bg-white'>
                  <Carousel.Item> 
                    <Stack
                      direction="horizontal"
                      className="h-100 justify-content-center align-items-center"
                      gap={3}
                    >
                      <Image src={require("./img/7314700-1024x683.jpg")} alt="First" width="auto" height="500"></Image>
                      <Image src={require("./img/Auf-Franic_Franic_Rister_FFiUF_Rijeka_-6.jpg")} alt="Second" width="auto" height="500"></Image>
                      <Image src={require("./img/sveucilisni-odjeli-rijeka.jpeg")} alt="Third" width="auto" height="500"></Image>
                    </Stack>
                  </Carousel.Item>
                  <Carousel.Item> 
                  <Stack
                      direction="horizontal"
                      className="h-100 justify-content-center align-items-center"
                      gap={3}
                    >
                      <Image src={require("./img/e424779921036fc9d0c061f4bf30f0d26457ef78.png")} alt="First" width="auto" height="500"></Image>
                      <Image src={require("./img/uniri_kampus3.jpg")} alt="Second" width="auto" height="500"></Image>
                      <Image src={require("./img/university-of-rijeka-8.jpg")} alt="Third" width="auto" height="500"></Image>
                    </Stack>
                  </Carousel.Item>
                </Carousel>
              </div>

              <div className='d-block d-md-none'>
                <Carousel className='bg-white' activeIndex={index} onSelect={handleSelect}>
                  <Carousel.Item> 
                    <Image src={require("./img/7314700-1024x683.jpg")} alt="First" width="auto" height="500"></Image>
                  </Carousel.Item>
                  <Carousel.Item>
                    <Image src={require("./img/Auf-Franic_Franic_Rister_FFiUF_Rijeka_-6.jpg")} alt="Second" width="auto" height="500"></Image>
                  </Carousel.Item>
                  <Carousel.Item>
                    <Image src={require("./img/sveucilisni-odjeli-rijeka.jpeg")} alt="Third" width="auto" height="500"></Image>
                  </Carousel.Item>
                  <Carousel.Item>
                    <Image src={require("./img/e424779921036fc9d0c061f4bf30f0d26457ef78.png")} alt="Third" width="auto" height="500"></Image>
                  </Carousel.Item>
                  <Carousel.Item>
                    <Image src={require("./img/uniri_kampus3.jpg")} alt="Third" width="auto" height="500"></Image>
                  </Carousel.Item>
                  <Carousel.Item>
                    <Image src={require("./img/university-of-rijeka-8.jpg")} alt="Third" width="auto" height="500"></Image>
                  </Carousel.Item>
                </Carousel>
              </div>

            </div>

            <div id="contact" className='p-2 bg-body-secondary'>
              <div className='container mt-3 py-4'>
                <Form>
                  <Row className="mb-3">
                    <Form.Group as={Col} controlId="formGridName">
                      <Form.Label>First Name</Form.Label>
                      <Form.Control type="email" placeholder="First name" />
                    </Form.Group>
                    <Form.Group as={Col} controlId="formGridSurname">
                      <Form.Label>Last Name</Form.Label>
                      <Form.Control type="email" placeholder="Last name" />
                    </Form.Group>
                  </Row>

                  <Row className="mb-3">
                    <Form.Group as={Col} controlId="formGridEmail">
                      <Form.Label>Email</Form.Label>
                      <Form.Control type="email" placeholder="Email" />
                    </Form.Group>
                  </Row>

                  <Row className="mb-3">
                    <Form.Group as={Col} controlId="exampleForm.ControlTextarea1">
                        <Form.Label>Ask us anything...</Form.Label>
                        <Form.Control as="textarea" placeholder="..." rows={3} />
                    </Form.Group>
                  </Row>

                  <Button variant="dark" type="submit">
                    Submit
                  </Button>
                </Form>
              </div>
            </div>
        </div>
      </header>
    </div>
  );
}

export default App;
