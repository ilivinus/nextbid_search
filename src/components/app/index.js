import React, { Component } from 'react';
import Search from '../search';
import './app.css';


export default class App extends Component {
    render(){
        return (
            <div className="App">
                <Search />
            </div>
            );
    }
}