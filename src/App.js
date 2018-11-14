import React, { Component } from 'react';
import './App.css';

import NavBarElement from "./Elements/NavBar";
import Main from "./Elements/Main";
import Footer from "./Elements/Footer";

class App extends Component {
  render() {
    return (
        <div>
            <NavBarElement/>
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-6">
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
