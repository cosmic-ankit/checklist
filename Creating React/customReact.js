

// Now react craete the element that we return in a tree structure, the structure that we will see now. We are assuming that the element that is returned by the App.js is an anchor tag which have some properties and atttributes


// Now we have created the element and we have also selected the root element, now we have to create a  function through which we can add these elements into root element of the html 

function customRender(ReactElement, mainContainer)
{

    //  In this function we will create that element and append it to the main Container or the root element
    const domElement = document.createElement(ReactElement.type); // This will create the DOM element

    domElement.innerHTML = ReactElement.children;
    // This will create the body of the domElement

    // Now we will add the attribute or the prperties in the element. We will use the for in loop to traverse through the properties

    for (const prop in ReactElement.props) {
        domElement.setAttribute(prop, ReactElement.props[prop]);
    }

    // Now we will append this domElement into the mainContainer

    mainContainer.appendChild(domElement);

}



const ReactElement = 
{
    type:'a', // It stores which kind of element that is returned

    //Props stored the properties of the element
    props : 
    {
        target : '_blank',
        href: 'http://google.com',
    },

    // It includes the children of the element
    children : "Click on this Google link"
    }


const mainContainer = document.querySelector('#root');
customRender(ReactElement, mainContainer);




