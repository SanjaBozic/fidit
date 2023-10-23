# FIDIT One-page design with React and Bootstrap

This is a small frontend React page created with the help of Bootstrap for a 45 min workshop to show students about React and Bootstrap v5.3.

If you don't have Node.js, install from here: [Node.js](https://nodejs.org/en/download).

Add Node.js to your path.

## Create a react app with bootstrap
In the terminal run:
```
npm install -g create-react-app
npx create-react-app fidit
cd fidit
npm install bootstrap@v5.3.2 react-bootstrap
```
Afterwards we will also need:
```
npm i react-scrollspy
```

## Code explanation
Since we only have 45 min all the page sections including the heading and the footer will be in the App.js file. This is not how it is usually done. Usually, we would create a component for each of the section, footer and header seperately and if you are looking at this code after the workshop feel free to fork it and for a little exercise you could seperate all the sections into components and organize it better. 

If you have no clue how to create components take a look here: [React Components](https://react.dev/learn/your-first-component) and here is an additional link on how to import/export components from different files: [Import/Export component](https://react.dev/learn/importing-and-exporting-components). Each component should be standalone and generic enough so that it can be used throughout the application multiple times (so we don't have to write more duplicate or simmilar code). 

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
Since we are creating a one-page website we will be using [ScrollspyNav](https://www.npmjs.com/package/react-scrollspy-nav) React component. With it when we click on a navigation link in our navbar the scroll will be automatically activated and we will be dragged to the correct section on the page. Other then that, we will be using React Bootstrap components [Navbar](https://react-bootstrap.netlify.app/docs/components/navbar/), Container and [Offcanvas](https://react-bootstrap.netlify.app/docs/components/offcanvas). 

We will be using the offcanvas component to build a hidden navigation bar. This navigation bar will be shown if our screen size is smaller then 720px, so it will be for mobile sizes. For Bootstrap screen size breakpoints take a look at this link [here](https://getbootstrap.com/docs/5.3/layout/grid/), but most important thing to remember here is this grid (keep in mind this is the table for the Bootstrap version 5.3):

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
This section is pretty simple and we are not using any components other then the Button component which is like the name states, a simple button. We could have used the full potential of this component and rather then adding Bootstrap classes on it we could have used the variant option. For more information about what we could do with the React Bootstrap component Button click [here](https://react-bootstrap.netlify.app/docs/components/buttons). 

For now we wanted to look more in depth and show you about all the different bootstrap css classes.
The link for all possible css classes that we can use can be checked out [here](https://bootstrapshuffle.com/classes).

## For those who want to play around more

[Fork](https://docs.github.com/en/get-started/quickstart/fork-a-repo) the project or just [clone](https://docs.github.com/en/repositories/creating-and-managing-repositories/cloning-a-repository) it and take a look at this exercises:

### Exercise 01

Usually, we would create a component for each of the section, footer and header seperately and if you are looking at this code after the workshop feel free to fork it and for a little excersize you could seperate all the sections into components and organize it better. 

If you have no clue how to create components take a look here: [React Components](https://react.dev/learn/your-first-component) and here is an additional link on how to import/export components from different files: [Import/Export component](https://react.dev/learn/importing-and-exporting-components). Each component should be standalone and generic enough so that it can be used throughout the application multiple times (so we don't have to write more duplicate or similar code). 

### Exercise 02

Rather then using css for styling, create a [scss](https://www.upwork.com/resources/what-is-scss) file, write more styling code or change the whole look of the sections. You can compile you scss styling to css. With [SASS](https://sass-lang.com/) you can not only do all the usuall css coding but more. You can create variables, nest, create styling modules, add mixins, for loops, while, if and else, extend/inherit styling code, use operators (more about this functionalities [here](https://sass-lang.com/guide/)). Nowadays, the css itself has evolved and can also be used to create variables and nest but there is still some functionalities that are missing and that is why SCSS is so useful. With it you can easier create theming, animations and other useful styling.

[Visual Studio Code](https://code.visualstudio.com/download) has a helpful extension for scss. It will track your scss file, one you save the file it will automatically compile it for you and show you your changes (if you of course imported the compiled css file). Read more about this extension here [Live Sass Compiler](https://marketplace.visualstudio.com/items?itemName=glenn2223.live-sass).

### Exercise 03

If you want to add a bit more character to the whole page I suggest you go and install the [FontAwesome](https://fontawesome.com/) icon library. They have a free and paid option (with the free option you will have more then enough icons to play with don't worry). 
To add the FontAwesome library just go to your terminal and run:
```
npm i --save @fortawesome/fontawesome-svg-core
npm i --save @fortawesome/free-solid-svg-icons
npm i --save @fortawesome/free-regular-svg-icons
npm i --save @fortawesome/free-brands-svg-icons
```
You can also add their fontawesome react component:
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
