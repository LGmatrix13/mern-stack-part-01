import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

import CreateListing from "./components/create-listing.component";
import EditListing from "./components/edit-listing.component";
import ShowListings from "./components/show-listings.component";

import logo from "./logo.png";

class App extends Component {
  render() {
    return (
      <Router>
        <div className="container">
          
          <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <a className="navbar-brand" href="https://codingthesmartway.com" target="_blank">
              <img src={logo} width="30" height="30" alt="CodingTheSmartWay.com" />
            </a>
            <Link to="/" className="navbar-brand">Cuivy</Link>
            <div className="collpase nav-collapse">
              <ul className="navbar-nav mr-auto">
                <li className="navbar-item">
                  <Link to="/" className="nav-link">Home</Link>
                </li>
                <li className="navbar-item">
                  <Link to="/create" className="nav-link">Create Listing</Link>
                </li>
              </ul>
            </div>
          </nav>

          <Route path="/" exact component={ShowListings} />
          <Route path="/edit/:id" component={EditListing} />
          <Route path="/create" component={CreateListing} />
        </div>
      </Router>
    );
  }
}

export default App;
