import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import MainContainer from "./components/MainContainer.js"
import LifeCycle from "./LifeCycle.js"

function MyApp(){
    return (
        <div>
            <MainContainer />
            <LifeCycle />
        </div>
    )
}

ReactDOM.render(<MyApp />, document.getElementById('root'))