import React from 'react';
//import ReactDOM from 'react-dom';

import Header from "./Header.js"
import MyInfo from "./MyInfo.js"
import Footer from "./Footer.js"

import TodoMain from "./todoItems/TodoMain.js"

import ContactCardContainer from "./contactCard/ContactCardContainer.js"
import JokesContainer from "./jokes/JokesContainer.js"

import ProdCont from "./products/ProdCont.js"

import ClassComp from "./ClassComponent.js"

import Comp from "./Comp.js"

import Logged from "./Logged.js";
 
import ClickEvent from "./events/clickEvent.js";

import ChangeState from "./todoItems/ChangeState.js";

import Conditional from "./Conditional.js";

import Fetch from "./form/Fetch.js";
import Form from "./form/Form.js";

class MainContainer extends React.Component {
    constructor(props) {
      super(props)
    
      this.state = {
          isLoading: true
      }
    }

    componentDidMount() {
        setTimeout(() => {
            this.setState({
                isLoading: false
            })
        }, 1500);
    }

    render (){
        return <div>
            <Form />
          </div>;
    }    
    
}

export default MainContainer



/*
    <div>
        <Header />
        <br />

        <h3>Personal Info</h3>
        <MyInfo />
        <br />

        <h3>Jokes List</h3>
        <JokesContainer />
        <br />

        <ContactCardContainer />
        <br />

        <TodoMain />
        <br />

        <Footer />
        <br />

        <h3>Products List</h3>
        <ProdCont />
        <br />

        <ClassComp />

        <Comp />

        <Logged />

        <ClickEvent />

        <ChangeState />

        <Conditional />
        {this.state.isLoading ? "Loading..." : <Conditional /> }

        <Fetch />

        <Form />

    </div>;
    */