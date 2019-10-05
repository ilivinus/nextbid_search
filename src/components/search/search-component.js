import React, { Component } from 'react';

export default class SearchComponent extends Component {   
    render(){
        return (
            <div className="suggestion">
                <input type="text" 
                    className={this.props.anySuggestion ? "input-class" : ""}
                    value={this.props.searchKey}
                    onKeyDown={this.props.handleKeyDown}
                    onChange={this.props.onSearchKeyChange} 
                    placeholder="Search key" />
            </div>
        );
    }
}
