import React, { Component } from 'react';
import './App.css';

import NavBarElement from "../Header/NavBar";
import Footer from "../Elements/Footer";
import Main from "../Elements/Main";

class App extends Component {
  render() {
    return (
        <div>
            <NavBarElement/>
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-8" id="content">
                        <Main/>
                    </div>
                </div>
            </div>
            <Footer/>
        </div>
    );
  }
}

export default App;
