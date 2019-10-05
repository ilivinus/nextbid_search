import React, { Component } from 'react';
import SearchResultComponent from './search-result-component';

export default class SearchResultContainer extends Component{

    render(){
        return (
            <SearchResultComponent items={this.props.items} />
        )
    }
}