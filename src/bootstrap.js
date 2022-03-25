import React from "react";
import ReactDOM from "react-dom";
import { createMemoryHistory, createBrowserHistory } from 'history';
import App from "./App";

// Mount fn to start app

const mount = (el, { onNavigate, defaultHistory }) => {
    const history = defaultHistory || createMemoryHistory();

    if (onNavigate) {
        history.listen(onNavigate);
    };

    ReactDOM.render(
        <App history={history} />,
        el
    )

    return {
        onParentNavigate({ pathname: nextPathname }) {
            if (history.location.pathname !== nextPathname){
                history.push(nextPathname);
            }
        }
    };
};

// cases : development & isolation all mount immediately
// if (process.env.NODE_ENV === 'development'){
    const devRoot = document.querySelector('#_marketing-dev-root');
    if (devRoot){
        mount(devRoot, { defaultHistory: createBrowserHistory() });
    };
// };


// else, run through container, export Mount fn

export { mount };