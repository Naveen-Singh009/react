function customRender(reactElement, container){
    // this code is not optimized
   /* const domElement = document.createElement(reactElement.type)
    domElement.innerHTML = reactElement.chilren
    domElement.setAttribute('href',reactElement.props.href)
    domElement.setAttribute('target', reactElement.props.taget)

    container.appendChild(domElement)*/

    const domElement =document.createElement(reactElement.type)
    domElement.innerHTML = reactElement.chilren

    for (const prop in reactElement.props) {
       if(prop === 'chilren') continue 
       domElement.setAttribute(prop, reactElement.props[prop])

    }
    container.appendChild(domElement)
}



const reactElement = {
    type : 'a',
    props: {
        href: 'https://google.com',
        taget: '_blank'
    },
    chilren: 'Click me to visit google'
}

const mainContainer = document.querySelector('#root')


customRender(reactElement, mainContainer)