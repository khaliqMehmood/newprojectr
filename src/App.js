import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"
import Header from "./components/Header/Header.js"
import Home from "./components/Home/Home.js"
import MovieDetails from "./components/MovieDetails/MovieDetails.js"
import PageNotFound from "./components/PageNotFound/PageNotFound.js";
import Footer from "./components/Footer/Footer.js"
import './App.scss';
function App() {
  return (
    <div className="App">
      <Router>
          <Header/>
          <div className="container">
          <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/movie/:imbID" component={MovieDetails} />
          <Route component={PageNotFound} />
          </Switch>
          </div>
          <Footer />
       
      </Router>
    </div>
  );
}
export default App;
