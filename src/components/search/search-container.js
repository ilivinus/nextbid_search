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
            error : "",
            loading : false
        };
        this.handleSearchKeyChange = this.handleSearchKeyChange.bind(this);
        this.handleKeyDown = this.handleKeyDown.bind(this);
        this.handleSubmit  = this.handleSubmit.bind(this);
    }
    
    handleSearchKeyChange = evt =>{        
        let { value } = evt.target;
        this.setState({ search_key : value });
        debounce(() => {
            this.setState({ loading : true });
            ApiService.fetchData(this.state.search_key)
            .then(data => this.setState(prevState => ({ loading : false, result : Object.assign({},prevState.result, data)})))
            .catch(err => {         
                this.setState({ loading : false });
                alert("Something went wrong")
            });            
        },c.debounceWaitTime)()
    }
    handleSubmit = evt =>{
        this.setState({ loading : true });
        ApiService.fetchData(this.state.search_key)
        .then(data => this.setState(prevState => ({ loading : false, result : Object.assign({},prevState.result, data)})))
        .catch(err => {         
            this.setState({ loading : false });
            alert("Something went wrong")
        });
    }
    handleKeyDown = (evt) => {
        this.setState({ keyCode : evt.keyCode, error : "" });
    }
    render(){
        return (   
            <div className="search-container">        
                <p className="search-header">
                    <img alt="TheNextBid" src={c.nextBidLogoUrl} className="logo" />
                    <strong>Search Engine</strong>
                </p>
                <form autoComplete="off">
                    <div className="suggestion">
                        <SearchComponent
                            anySuggestion={(this.state.result.suggestions && this.state.result.suggestions.length > 0) ? true : false}
                            searchKey={this.state.search_key}
                            handleKeyDown={this.handleKeyDown}
                            onSearchKeyChange={this.handleSearchKeyChange}      
                            handleSubmit={this.handleSubmit}              
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