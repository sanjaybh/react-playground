import React from 'react';
import ReactDOM from 'react-dom';


import Header from "./Header.js"
import MyInfo from "./MyInfo.js"
import Footer from "./Footer.js"
import TodoMain from "./TodoMain.js"

function MainContainer(){
    return (
        <div>
            <Header />
            <br/>
            <MyInfo />
            <br />
            <TodoMain />
            <br />
            <Footer />
        </div>
    )
}

export default MainContainer