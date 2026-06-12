function customRender(reactElement, container) {

        const domElement = document.createElement(reactElement.type)
        domElement.innerHtml = reactElement.Children
        domElement.setAttribute('href', reactElement.props.href)\
        domElement.setAttribute('target', reactElement.props.target)

        container.appendChild(domElement)
}


const { Children } = require("react")

const domElement = document.createElement
(reactElement.type)
domElement.innerHtml = reactElement.Children

for (const props in reactElement.props) {
    
    if(props === 'children') continue;
    domElement.setAttribute(props, reactElement.props[props])
}

container.appendChild(domElement)

const = reactElement = {

    type: 'a', 
    props: {
        href: 'https://google.com'
        target: '_blank'
    },

    Children: 'click me to visit google'
}


const mainContainer = document.querySelector('#root')


customRender(reactElement, mainContainer)  