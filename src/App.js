import React from 'react';
import './App.css';
import { BrowserRouter as Router, NavLink, Route, Switch } from 'react-router-dom';


function Main() {
  return (
    <h1>This is Main Page</h1>
  )
}

function SecondComponent() {
  return (
    <h1>This is Second Page</h1>
  )
}


function ThirdComponent() {
  return (
    <h1>This is Third Page</h1>
  )
}


function Index(props) {
  return (
    <div>
        <h1>This is Third Page</h1>
        <h1>this id {props.match.params.id}</h1>
    </div>
  )
}


function App() {
  return (

    <Router>
    <div className="App">

        <nav>
            <NavLink activeClassName="active-link" to="/" >Home Page</NavLink>
            <NavLink activeClassName="active-link"  to="/second" >Second Page</NavLink>
            <NavLink activeClassName="active-link"  to="/third" >Third Page</NavLink>
            <NavLink activeClassName="active-link"  to="/detail/1" >1</NavLink>
            <NavLink activeClassName="active-link"  to="/detail/2" >2</NavLink>
        </nav>


        <Switch>
            <Route path="/" exact component={Main}/> 
            <Route path="/second" exact component={SecondComponent} />
            <Route path="/third" exact component={ThirdComponent} />
            <Route path="/detail/:id" component={Index} /> 
        </Switch> 
    </div>
</Router>

  );
}

export default App;