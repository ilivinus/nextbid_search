import React, { Component } from 'react';
import Search from '../search';
import './app.css';
// import { Provider } from 'react-redux';
// import store from '../../redux';



export default class App extends Component {
    render(){
        return (
            <div className="App">
             {/* <Provider store={store}> */}
                <Search />
            {/* </Provider> */}
            </div>
            );
    }
}