import React from "react"
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Nav from './components/nav'
import Body from './components/body'
function App() {
  return (
   <Router>
     <Nav/>
     <Body/>
   </Router>
   
  );
}

export default App;
