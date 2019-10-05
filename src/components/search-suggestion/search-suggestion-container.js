import React, { Component } from 'react';
import SearchSuggestionComponent from './search-suggestion-component';

export default class SearchSuggestionContainer extends Component {

    constructor(props){
        super(props);
        this.state = {
            suggested_items : [],
            current_focus : 0,
            clear_items : false
        }
        this.suggestionClick = this.suggestionClick.bind(this);
    }
    static selectionLength = 0;
    static inputRef;

    static getDerivedStateFromProps(nextProps, prevState){
        let { keyCode, items = [] } = nextProps;             
        if(prevState.clear_items){
            return {
                ...prevState,
                clear_items : false
            };
        }
        return {
            ...prevState,
            ...SearchSuggestionContainer.suggestionKeyPress(keyCode, prevState),
            suggested_items : items
        };
    
    }
    
    static suggestionKeyPress = (keyCode, state) => {
        let { current_focus } = state;
        let selectionLength = SearchSuggestionContainer.selectionLength;
        if(keyCode === 40){
            //down arrow key pressed
            return { current_focus : (state.current_focus + 1) % selectionLength };
        }else if(keyCode === 38){
            //up arrow key pressed
            if (current_focus >= selectionLength) current_focus = 0;
            if (current_focus < 0) current_focus = selectionLength;
            return { current_focus : current_focus - 1 };
        
        }else if(keyCode === 13){
          if (current_focus > -1) {
            /*and simulate a click on the "active" item:*/
            if (SearchSuggestionContainer.inputRef) SearchSuggestionContainer.inputRef.click();
          }
          return { current_focus : 0 };        
        }
    }

    suggestionClick = (val) =>{
        this.props.selectedItem(val);        
        this.removeAllList();
    }

    removeAllList = () => {
        this.setState({ suggested_items : [], clear_items : true });
    }
    render(){  
        return (
            <SearchSuggestionComponent
                {...this.props}
                {...this.state}
                getSelectionLength={(length) =>SearchSuggestionContainer.selectionLength = length}
                suggestionClick={this.suggestionClick}
                getInputRef={e => SearchSuggestionContainer.inputRef = e}
              />
        );
    }
}