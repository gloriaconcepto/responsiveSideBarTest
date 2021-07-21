import React, { Component } from "react";
import Sidebar from "./components/sidebar/SideBar";
import "./App.css";

class App extends Component {
    render() {
        return (
            <div className="App">
                <div className="container">
                    <Sidebar className="grid-sidebar" />
                    <div className="header" />
                    <div className="content" />
                </div>
            </div>
        );
    }
}

export default App;
