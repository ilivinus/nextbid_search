import React, { Component } from 'react';
import SearchComponent from './search-component';
import SearchResult from '../search-result';
import SearchSuggestion from '../search-suggestion';
import { debounce } from '../../utils/debounce';
import c from '../../utils/config';
import ApiService from '../../services/api-service';

export default class SearchContainer extends Component {
    constructor(props){
        super(props);
        this.state = {
            search_key : "",
            keyCode : 0,
            result : {},
            error : ""
        };
        this.handleSearchKeyChange = this.handleSearchKeyChange.bind(this);
        this.handleKeyDown = this.handleKeyDown.bind(this);
    }
    
    handleSearchKeyChange = evt =>{        
        let { value } = evt.target;
        this.setState({ search_key : value });
        debounce(() => {
            ApiService.fetchData(this.state.search_key)
            .then(data => this.setState(prevState => ({ result : Object.assign({},prevState.result, data)})))
            .catch(err => this.setState({ error : err }));            
        },c.debounceWaitTime)()
    }

    handleKeyDown = (evt) => {
        this.setState({ keyCode : evt.keyCode });
    }
    render(){
        return (   
            <div className="search-container">        
                <p className="search-header">
                    <img alt="TheNextBid" src="https://thenextbid.com/eeb9b1a373fc912868daaa578bb7ccc0.svg" className="logo" />
                    <strong>Search Engine</strong>
                </p>
                <form autoComplete="off">
                    <div className="suggestion">
                        <SearchComponent
                            anySuggestion={(this.state.result.suggestions && this.state.result.suggestions.length > 0) ? true : false}
                            searchKey={this.state.search_key}
                            handleKeyDown={this.handleKeyDown}
                            onSearchKeyChange={this.handleSearchKeyChange}                    
                        />
                        <SearchSuggestion            
                            items={this.state.result.suggestions} 
                            searchKey={this.state.search_key} 
                            keyCode={this.state.keyCode}
                            selectedItem={(val) => this.handleSearchKeyChange({ target : { value : val}})} />                
                    </div>
                </form>
                <SearchResult 
                    items={this.state.result.docs || []} />
        </div>
        );
    }
}