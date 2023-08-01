# Frontend Mentor - Space tourism website solution

This is a solution to the [Space tourism website challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/space-tourism-multipage-website-gRWj1URZ3). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)
- [Acknowledgments](#acknowledgments)

## Overview

### The challenge

Users should be able to:

- View the optimal layout for each of the website's pages depending on their device's screen size
- See hover states for all interactive elements on the page
- View each page and be able to toggle between the tabs to see new information

### Screenshots

#### Desktop
  ![Home Page](./public/screenshots/desktop-home.png)
  ![Destination Page](./public/screenshots/desktop-destination.png)
  ![Crew Page](./public/screenshots/desktop-crew.png)
  ![Technology Page](./public/screenshots/desktop-technology.png)

#### Mobile
  ![Home Page](./public/screenshots/mobile-home.png)
  ![Destination Page](./public/screenshots/mobile-destination.png)
  ![Crew Page](./public/screenshots/mobile-crew.png)
  ![Technology Page](./public/screenshots/mobile-technology.png)
  ![Mobile Menu](./public/screenshots/mobile-menu.png)

#### Tablet
  ![Home Page](./public/screenshots/tablet-home.png)
  ![Destination Page](./public/screenshots/tablet-destination.png)
  ![Crew Page](./public/screenshots/tablet-crew.png)
  ![Technology Page](./public/screenshots/tablet-technology.png)


### Links

- Solution URL: [Add solution URL here](https://your-solution-url.com)
- Live Site URL: [Add live site URL here](https://your-live-site-url.com)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- CSS Utility classes
- Flexbox
- CSS Grid
- Mobile-first workflow
- [React](https://reactjs.org/) - JS library



### What I learned

I learned how to use utility classes in CSS. I also learned how to use React Router to create a multi-page website. I also learned how to use the following CSS code to create an underline indicator for the tabs. Additionally, I learned how to use modern CSS features and make use of various pseudo-classes as well as learning best practices for accessibility. As you can see below, I also learned how to load data from a JSON file using a promise, and how to extract the data and use it in my React components.

```css
.underline-indicators > * {
  cursor: pointer;
  padding: var(--underline-gap, 1rem) 0;
  border: 0;
  border-bottom: .2rem solid hsl( var(--clr-white) / 0 );
  }
  
  .underline-indicators > *:hover,
  .underline-indicators > *:focus {
  border-color: hsl( var(--clr-white) / .5);
  }
  
  .underline-indicators > .active,
  .underline-indicators > [aria-selected="true"] {
  color: hsl( var(--clr-white) / 1);
  border-color: hsl( var(--clr-white) / 1);
  }
```

```js
import data from '../data.json';

export default function loadData() {
  return new Promise((resolve, reject) => {
    if (data) {
      resolve(data);
    } else {
      reject(new Error('Data not found'));
    }
  });
}
```

### Continued development

Learn how to use React Router to create multi-page websites.
Learn how to use React to create a single-page application.
Learn how to use React to create a website that uses a database to store data.

## Author

- Website - [Add your name here](https://www.your-site.com)
- Frontend Mentor - [@botirk38](https://www.frontendmentor.io/profile/botirk38)


## Acknowledgments

I thank the following people for their help in completing this project:
- Kevin Powell through his Scrimba course showing his implementation of the project
  Front End Mentor for providing the project starter files and the designs
