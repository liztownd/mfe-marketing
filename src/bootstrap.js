import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

// Mount fn to start app

const mount = (el) => {
    ReactDOM.render(
        <App />,
        el
    )
}

// cases : development & isolation all mount immediately
// if (process.env.NODE_ENV === 'development'){
    const devRoot = document.querySelector('#_marketing-dev-root');
    if (devRoot){
        mount(devRoot);
    };
// };


// else, run through container, export Mount fn

export { mount };