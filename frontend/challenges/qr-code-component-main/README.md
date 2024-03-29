# Frontend Mentor - QR code component solution

This is a solution to the [QR code component challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/qr-code-component-iux_sIO_H).

## Table of contents

- [Overview](#overview)
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

### Screenshot

Final version!

![](./screenshot.png)

### Links

- Solution URL: [Add solution URL here](https://github.com/amorabot/web-dev)
- Live Site URL: [Add live site URL here](https://amorabot.vercel.app/)

## My process

### Built with

- HTML5
- CSS
- Flexbox basics
- CSS Grid basics

### What I learned

This project was great for starting to get hands-on experience with the essentials of CSS. It was very useful for getting a better understanding of flex and grid containers, their properties and their child's properties (especially getting a better grasp of grid-template-rows/columns property). It was also great for experimenting with auto and % units for component spacing!

Below are some highlighted code snippets from the main CSS class:

```css
* {
    min-width: 0;
}

#qr-code-data{
    display: grid;
    grid-template-rows: max-content min-content min-content;

    align-self: center;

    background-color: var(--white);
    padding: 14px;
    margin-inline: 10px;
    border-radius: 5%;
    max-width: 270px;
    min-height: 450px;
}
```

### Useful resources

- [MDN Docs - Sizing items](https://developer.mozilla.org/en-US/docs/Learn/CSS/Building_blocks/Sizing_items_in_CSS) - Great visual examples of different components needing different treatments for reaching a final goal.
- [CSS Tricks - Flexbox guide](https://css-tricks.com/snippets/css/a-guide-to-flexbox/#aa-examples) - Godly flexbox demonstrations.
- [CSS Tricks - Grid guide](https://css-tricks.com/snippets/css/complete-guide-grid/#aa-introduction) - Godly grid demonstrations.
- [CSS Tricks - Flex property](https://css-tricks.com/almanac/properties/f/flex/) - Shows many flex uses for the property and some nice practical examples.
- [Kevin powell - A practical guide to responsive web design](https://www.youtube.com/watch?v=x4u1yp3Msao) - Great visual examples and practical guidelines for better responsive layouts!.

## Author

- Website - [amorabot](https://amorabot.github.io/)
- Frontend Mentor - [@amorabot](https://www.frontendmentor.io/profile/amorabot)