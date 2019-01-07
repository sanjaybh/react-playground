import React from 'react'

class LifeCycle extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  static getDerivedStateFromProps(props, state) { // new method in lifecycle
    // return the new, updated state based upon the props
    // https://reactjs.org/docs/react-component.html#static-getderivedstatefromprops
    // https://reactjs.org/blog/2018/06/07/you-probably-dont-need-derived-state.html
  }

  getSnapshotBeforeUpdate() { // new method in lifecycle
    // create a backup of the current way things are
    // https://reactjs.org/docs/react-component.html#getsnapshotbeforeupdate
  }

  componentWillMount() { //Deprecated
  
  }

  componentDidMount() {
    /*
        lifecycle method - 1 (component just born)
        
        Very first time the component shows up, react will run this method, this method will run only once while the 
        component is showing up on the screen

        Things just like re-render which changes the way the component is displayed, does not re-run 
        componentDidMount(), this is actually
        component does not unmount and remount; best example for this method is doing an API calls, that is used
        to bring data from outside source
        */
  }

  componentWillReceiveProps(nextProps) {//Deprecated
    //This method is deprecated starting 16.3, untill React 17 comes out
    //they have renamed it to -> UNSAFE_componentWillReceiveProps()
    /*
        lifecycle method - 2 (Receive props)
        it is something like someone gives you a gift 
        component could be receiving props from a parent component
        every time component is receiving props it will run this method
        
        this method will not run only the very first time when the component is mounted
        but also will run every time a parent component decides to hand props to the child component
        */
    if (nextProps.whatever !== this.props.whatever) {
      // do something important here
    }
  }

  shouldComponentUpdate(nextProps, nextState, nextContext) {
    /*
        You take the decision if you want to change your clothes or not
        React will sometimes re-render the component even if nthing about that component has changed
        that can become kind of expensive or rather slow operation, if you let that happen to every single
        component in large application

        This method gives us(developers) a chance to optimize our app, we can build some logic that
        allows us to determine wheather or not it is important we have to let the component 
        update or not

        this is the place were user can take decision if he wantes to rerender the component
        */

    return true; //true if we need to update or false if not
  }

  componentWillUpdate() { //Deprecated
  
  }
  //-------------[will decide later]----------------\\
  willMount() {
    console.log("willMount");
  }
  didMount() {
    console.log("didMount");
  }
  willUnmount() {
    console.log("willUnmount");
  }
  didUpdate() {
    console.log("didUpdate");
  }
  _render() {
    console.log("render");
  }
  willUpdate() {
    console.log("willUpdate");
  }
  shouldUpdate() {
    console.log("shouldUpdate");
  }
  willReceiveProps() {
    console.log("willReceiveProps");
  }
  didMount() {
    console.log("didMount");
  }

  componentWillUnmount() {
    /*
        Remove the event listeners, place to clear up before the component will disappear
    */
  }

  render() {
    /*
        First - not listed in lifecycle method,
        What gets redered to the screen, which internally is how the component is displayed to the outside world
        decides, render method can be called many times, when react determines something changes like state or props 
        which might effect how the component is supposed to display; react may run the render method once again 
         */
    return <h1>Code goes here</h1>;
  }
}
export default LifeCycle