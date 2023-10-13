# Custom React: A Simplified Exploration of React Internals

## Overview

Welcome to the "Custom React" project, where we delve into the inner workings of React by building a simplified version of it. This README provides an in-depth understanding of the key concepts and processes involved in this project.

## Project Structure

The project is organized as follows:

- **Folder "custom-react":** This directory contains the core components of the project.
  - **`index.html`:** The HTML file serving as the entry point for our exploration.
  - **`customReact.js`:** This JavaScript file is where we define a custom rendering function that mimics React's functionality.

## React Elements

At the heart of React are elements that represent the structure of HTML elements we want to render in a tree-like format. To grasp React's inner workings, it's essential to understand how these React elements are structured. Consider the following example:

```javascript
const reactElement = {
  type: 'a', // Element type (e.g., 'a' for an anchor)
  props: {
    target: '_blank',
    href: 'http://google.com',
  },
  children: 'Click to visit Google'
};

```
This structure mirrors how React internally represents elements that you return within your React components.

## Rendering React Elements
To bring these React elements to life and render them into the Document Object Model (DOM), we create a custom rendering function named customRender. This function accepts two arguments: a React element and a container element. Here's an overview of how it operates:

Create a DOM Element: A DOM element is created based on the type of the React element (e.g., 'a' for an anchor).
Set Inner HTML: The inner HTML of the DOM element is set to match the React element's children.
Attribute Assignment: The function iterates through the React element's props, setting attributes on the DOM element.
Append to Container: Finally, the DOM element is appended to the provided container, thereby rendering it in the DOM.

```javascript
function customRender(ReactElement, mainContainer) {
  const domElement = document.createElement(ReactElement.type);
  domElement.innerHTML = ReactElement.children;

  for (const prop in ReactElement.props) {
    if (prop === 'children') continue;
    domElement.setAttribute(prop, ReactElement.props[prop]);
  }

  mainContainer.appendChild(domElement);
}
```
## Understanding How React Compiles Elements
React builds a tree of elements for each component you return, structuring them with a type, props (properties), and children, much like the example we've explored.

## Usage
To experience this project:

1)Open index.html in a web browser.


2)Ensure that the script reference in index.html correctly points to customReact.js.


3)Create your own React elements, as demonstrated in the provided example, and call the customRender function to render them in the DOM.

## Next Steps
This project offers a simplified view of how React compiles and renders elements. To unlock React's full potential, consider delving into popular React libraries and frameworks, and explore the official React documentation.

#### Happy coding and enjoy your journey into the inner workings of React!







