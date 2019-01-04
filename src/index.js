import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import MainContainer from "./components/MainContainer.js"

function MyApp(){
    return (
        <div>
            <MainContainer />
        </div>
    )
}

ReactDOM.render(<MyApp />, document.getElementById('root'))