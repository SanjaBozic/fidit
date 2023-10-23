# FIDIT One-page design with React and Bootstrap

This is a small frontend React page created with the help of Bootstrap for a 45-minute workshop to show students about React and Bootstrap v5.3.

If you don't have Node.js, install from here: [Node.js](https://nodejs.org/en/download).

Add Node.js to your path.

## Create a react app with Bootstrap
In the terminal run:
```
npm install -g create-react-app
npx create-react-app fidit
cd fidit
npm install bootstrap@v5.3.2 react-bootstrap
```
Afterward, we will also need:
```
npm i react-scrollspy
```

## Code explanation
Since we only have 45 min all the page sections including the heading and the footer will be in the App.js file. This is not how it is usually done. Usually, we would create a component for each section, footer, and header separately and if you are looking at this code after the workshop feel free to fork it and for a little exercise you could separate all the sections into components and organize it better. 

If you have no clue how to create components take a look here: [React Components](https://react.dev/learn/your-first-component) and here is an additional link on how to import/export components from different files: [Import/Export component](https://react.dev/learn/importing-and-exporting-components). Each component should be standalone and generic enough so that it can be used throughout the application multiple times (so we don't have to write more duplicate or similar code). 

### Header
```html
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
```
Since we are creating a one-page website we will be using [ScrollspyNav](https://www.npmjs.com/package/react-scrollspy-nav) React component. With it when we click on a navigation link in our navbar the scroll will be automatically activated and we will be dragged to the correct section on the page. Other than that, we will be using React Bootstrap components [Navbar](https://react-bootstrap.netlify.app/docs/components/navbar/), Container and [Offcanvas](https://react-bootstrap.netlify.app/docs/components/offcanvas). 

We will be using the Offcanvas component to build a hidden navigation bar. This navigation bar will be shown if our screen size is smaller than 720px, so it will be for mobile sizes. For Bootstrap screen size breakpoints take a look at this link [here](https://getbootstrap.com/docs/5.3/layout/grid/), but the most important thing to remember here is this grid (keep in mind this is the table for the Bootstrap version 5.3):

|  | xs | sm | md | lg | xl | xxl |
|  :-----------: | :-----------: | :-----------: | :-----------: | :-----------: | :-----------: | :-----------: |
|  | <576px      | ≥576px       | ≥768px      | ≥992px      | ≥1200px      | ≥1400px      |
| Container (max-width) |  None (auto)  |   540px   |   720px   |   960px   |   1140px   |   1320px   |
| Class prefix |  .col-  |   .col-sm-   |   .col-md-   |   .col-lg-   |   .col-xl-   |   .col-xxl-   |

### About section
```html
<div id="about" className='p-2 FIDIT_background text-bg-dark '>
  <div className='container mt-3'>
    <h1 className='text-uppercase text-center my-5'>Faculty of Informatics and Digital Technologies</h1>
    <p className='text-center'>Some text</p>
    <div className='d-flex justify-content-center gap-3 my-5'>
      <Button className='bg-dark-subtle text-uppercase text-dark px-5 border-dark'>First one</Button>
      <Button className='bg-dark text-uppercase text-light px-5 border-dark-subtle'>Second one</Button>
    </div>
  </div>
</div>
```
This section is pretty simple and we are not using any components other than the Button component which is as the name states, a simple button. We could have used the full potential of this component and rather than adding Bootstrap classes, we could have used the variant option. For more information about what we could do with the React Bootstrap component Button click [here](https://react-bootstrap.netlify.app/docs/components/buttons). 

For now, we wanted to look more in-depth and show you all the different bootstrap css classes.
The link for all possible css classes that we can use can be checked out [here](https://bootstrapshuffle.com/classes).

### Gallery section
```html
<div id="gallery">

  <div className='d-none d-md-block bg-dark py-5'>
    <Carousel>
      <Carousel.Item> 
        <Stack
          direction="horizontal"
          className="h-100 justify-content-center align-items-center"
          gap={3}
        >
          <Image src={require("./img/image1.jpg")} alt="First" width="auto" height="500"></Image>
          <Image src={require("./img/image2.jpg")} alt="Second" width="auto" height="500"></Image>
          <Image src={require("./img/image3.jpeg")} alt="Third" width="auto" height="500"></Image>
        </Stack>
      </Carousel.Item>
      <Carousel.Item> 
      <Stack
          direction="horizontal"
          className="h-100 justify-content-center align-items-center"
          gap={3}
        >
          <Image src={require("./img/image4.png")} alt="First" width="auto" height="500"></Image>
          <Image src={require("./img/image5.jpg")} alt="Second" width="auto" height="500"></Image>
          <Image src={require("./img/image6.jpg")} alt="Third" width="auto" height="500"></Image>
        </Stack>
      </Carousel.Item>
    </Carousel>
  </div>

  <div className='d-block d-md-none'>
    <Carousel className='bg-white' activeIndex={index} onSelect={handleSelect}>
      <Carousel.Item> 
        <Image src={require("./img/image1.jpg")} alt="First" width="auto" height="500"></Image>
      </Carousel.Item>
      <Carousel.Item>
        <Image src={require("./img/image2.jpg")} alt="Second" width="auto" height="500"></Image>
      </Carousel.Item>
      <Carousel.Item>
        <Image src={require("./img/image3.jpeg")} alt="Third" width="auto" height="500"></Image>
      </Carousel.Item>
      <Carousel.Item>
        <Image src={require("./img/image4.png")} alt="Third" width="auto" height="500"></Image>
      </Carousel.Item>
      <Carousel.Item>
        <Image src={require("./img/image5.jpg")} alt="Third" width="auto" height="500"></Image>
      </Carousel.Item>
      <Carousel.Item>
        <Image src={require("./img/image6.jpg")} alt="Third" width="auto" height="500"></Image>
      </Carousel.Item>
    </Carousel>
  </div>

</div>
```
### Contact section
```html
<div id="contact" className='p-2 bg-body-secondary'>
  <div className='container mt-3 py-4'>
    <Form>
      <Row className="mb-3">
        <Form.Group as={Col} controlId="formName">
          <Form.Label>First Name</Form.Label>
          <Form.Control type="email" placeholder="First name" />
        </Form.Group>
        <Form.Group as={Col} controlId="formSurname">
          <Form.Label>Last Name</Form.Label>
          <Form.Control type="email" placeholder="Last name" />
        </Form.Group>
      </Row>

      <Row className="mb-3">
        <Form.Group as={Col} controlId="formEmail">
          <Form.Label>Email</Form.Label>
          <Form.Control type="email" placeholder="Email" />
        </Form.Group>
      </Row>

      <Row className="mb-3">
        <Form.Group as={Col} controlId="formTextarea">
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
```
### Footer
```html
<div className="container my-3">
  <div className="d-flex flex-wrap justify-content-between align-items-center border-top py-3">
    <a href="/" class="mb-3 me-2 mb-md-0 text-muted text-decoration-none lh-1 logo-cenosco">
      <svg xmlns="http://www.w3.org/2000/svg" width="100" height="auto" viewBox="0 0 483.993 79.52">
        <g id="Group_4020" data-name="Group 4020" transform="translate(-154.729 -73.626)">
        <path id="Path_11421" data-name="Path 11421" d="M311.686,106.024l9.074-4.879c-3.872-8.135-12.165-12.983-22.237-12.983-7.566,0-13.834,2.386-18.628,7.092-4.763,4.674-7.178,10.76-7.178,18.087,0,7.3,2.385,13.384,7.089,18.088,4.793,4.705,10.971,7.091,18.36,7.091,9.582,0,18.143-4.769,22.406-12.461l-9.059-5.3a15.317,15.317,0,0,1-13.169,7.515,13.908,13.908,0,0,1-10.386-4.285,14.755,14.755,0,0,1-4.1-10.649A14.486,14.486,0,0,1,298.7,98.406,15.2,15.2,0,0,1,311.686,106.024Z"></path>
        <path id="Path_11422" data-name="Path 11422" d="M350.274,88.162c-7.328,0-13.413,2.415-18.087,7.177-4.587,4.676-6.913,10.732-6.913,18,0,11.615,6.829,25.179,26.074,25.179a34.29,34.29,0,0,0,20.807-6.536l-4.415-7.894a27.718,27.718,0,0,1-15.944,4.9c-7.96,0-13.467-4.15-15.107-11.386l-.068-.306h37.16a41.6,41.6,0,0,0,.329-4.943c0-7.519-2.2-13.289-6.728-17.637C362.942,90.367,357.186,88.162,350.274,88.162Zm-13.653,20.773.068-.305c1.546-6.913,6.751-11.208,13.585-11.208,6.937,0,11.87,4.3,12.872,11.227l.042.286Z"></path>
        <path id="Path_11423" data-name="Path 11423" d="M408.65,88.072c-6.832,0-12.473,2.963-15.09,7.925l-.471.894V89.326H382.128v48.119h11.14V111.461c0-7.792,4.963-13.233,12.069-13.233,6.727,0,10.906,5,10.906,13.053v26.164h11.229V108.058c0-6.437-1.791-11.268-5.473-14.772A18.733,18.733,0,0,0,408.65,88.072Z"></path>
        <path id="Path_11424" data-name="Path 11424" d="M460.166,88.072c-7.522,0-13.585,2.407-18.537,7.358a24.382,24.382,0,0,0-7.179,17.911,24.922,24.922,0,0,0,7.18,18.091c4.89,4.889,10.954,7.267,18.536,7.267,7.61,0,13.644-2.377,18.445-7.267a24.661,24.661,0,0,0,7.27-18.091,24.133,24.133,0,0,0-7.268-17.91C473.819,90.548,467.613,88.072,460.166,88.072Zm10.3,35.918a14.308,14.308,0,0,1-20.6,0,15.518,15.518,0,0,1,0-21.21,14.308,14.308,0,0,1,20.6,0,15.518,15.518,0,0,1,0,21.21Z"></path>
        <path id="Path_11425" data-name="Path 11425" d="M519.418,111.411c-.747-.414-4.355-1.9-11.7-4.822-2.853-1.012-4.366-2.734-4.366-4.978,0-2.88,2.476-4.816,6.16-4.816a14.871,14.871,0,0,1,10.91,4.887l5.773-7.048c-4.149-4.592-9.641-6.92-16.324-6.92-5.228,0-9.482,1.336-12.645,3.972a12.717,12.717,0,0,0-4.745,10.194c0,5.513,2.62,9.481,8.009,12.132,1.261.631,3.5,1.573,6.156,2.588a56.938,56.938,0,0,1,5.942,2.431c2.482,1.195,3.8,2.883,3.8,4.875,0,3.052-3.186,5.354-7.413,5.354a17.082,17.082,0,0,1-13.092-6.757l-6.284,6.8a23.482,23.482,0,0,0,19.286,9.4c5.589,0,10.144-1.456,13.538-4.328a13.484,13.484,0,0,0,5.1-10.823C527.524,118.4,524.8,114.321,519.418,111.411Z"></path>
        <path id="Path_11426" data-name="Path 11426" d="M572.9,106.024l9.074-4.879C578.1,93.01,569.81,88.162,559.738,88.162c-7.567,0-13.834,2.386-18.629,7.092-4.762,4.674-7.177,10.759-7.177,18.087,0,7.3,2.385,13.385,7.089,18.088,4.793,4.705,10.971,7.091,18.358,7.091,9.582,0,18.144-4.769,22.408-12.461l-9.059-5.3a15.323,15.323,0,0,1-13.17,7.515,13.913,13.913,0,0,1-10.387-4.285,14.759,14.759,0,0,1-4.1-10.649,14.487,14.487,0,0,1,14.845-14.935A15.2,15.2,0,0,1,572.9,106.024Z"></path>
        <path id="Path_11427" data-name="Path 11427" d="M631.453,95.431c-4.794-4.883-11-7.359-18.448-7.359-7.52,0-13.584,2.407-18.535,7.358a24.382,24.382,0,0,0-7.18,17.911,24.922,24.922,0,0,0,7.181,18.091c4.89,4.889,10.953,7.267,18.534,7.267,7.611,0,13.645-2.377,18.446-7.267a24.665,24.665,0,0,0,7.271-18.091A24.133,24.133,0,0,0,631.453,95.431ZM623.3,123.99a14.307,14.307,0,0,1-20.594,0,15.516,15.516,0,0,1,0-21.21,14.307,14.307,0,0,1,20.594,0,15.516,15.516,0,0,1,0,21.21Z"></path>
        <path id="Path_11428" data-name="Path 11428" d="M194.489,73.626a39.76,39.76,0,1,0,39.76,39.76A39.8,39.8,0,0,0,194.489,73.626Zm24.09,59.11a4.74,4.74,0,0,1-4.74,4.74v0h-38.7a4.741,4.741,0,0,1-4.741-4.74v-38.7a4.741,4.741,0,0,1,4.741-4.741h38.7a4.741,4.741,0,0,1,4.74,4.741Z"></path>
        </g>
      </svg>
    </a>
    <div class="d-flex align-items-center">
      <span class="mb-3 mb-md-0 text-muted">© 2023 Cenosco Company</span>
    </div>
  </div>
</div>
```

## For those who want to play around more

[Fork](https://docs.github.com/en/get-started/quickstart/fork-a-repo) the project or just [clone](https://docs.github.com/en/repositories/creating-and-managing-repositories/cloning-a-repository) it and take a look at this exercises:

### Exercise 01

Usually, we would create a component for each of the section, footer and header seperately and if you are looking at this code after the workshop feel free to fork it and for a little excersize you could seperate all the sections into components and organize it better. 

If you have no clue how to create components take a look here: [React Components](https://react.dev/learn/your-first-component) and here is an additional link on how to import/export components from different files: [Import/Export component](https://react.dev/learn/importing-and-exporting-components). Each component should be standalone and generic enough so that it can be used throughout the application multiple times (so we don't have to write more duplicate or similar code). 

### Exercise 02

Rather then using css for styling, create a [scss](https://www.upwork.com/resources/what-is-scss) file, write more styling code or change the whole look of the sections. You can compile your scss styling to css. With [SASS](https://sass-lang.com/) you can not only do all the usual css coding but more. You can create variables, nest, create styling modules, add mixins, for loops, while, if and else, extend/inherit styling code, use operators (more about these functionalities [here](https://sass-lang.com/guide/)). Nowadays, the css itself has evolved and can also be used to create variables and nest but there are still some functionalities that are missing and that is why SCSS is so useful. With it, you can easily create theming, animations, and other useful styling.

[Visual Studio Code](https://code.visualstudio.com/download) has a helpful extension for scss. It will track your scss file. Once you save the file it will automatically compile it for you and show you your changes (if you of course imported the compiled css file). Read more about this extension here [Live Sass Compiler](https://marketplace.visualstudio.com/items?itemName=glenn2223.live-sass).

### Exercise 03

If you want to add a bit more character to the whole page I suggest you go and install the [FontAwesome](https://fontawesome.com/) icon library. They have a free and paid option (with the free option you will have more than enough icons to play with don't worry). 
To add the FontAwesome library just go to your terminal and run:
```
npm i --save @fortawesome/fontawesome-svg-core
npm i --save @fortawesome/free-solid-svg-icons
npm i --save @fortawesome/free-regular-svg-icons
npm i --save @fortawesome/free-brands-svg-icons
```
You can also add their FontAwesome react component:
```
npm i --save @fortawesome/react-fontawesome@latest
```
For more information about how to use the icons in the project take a look [here](https://fontawesome.com/docs/web/use-with/react/add-icons).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.
