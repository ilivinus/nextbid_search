import React from 'react';

export default function SearchSuggestionComponent (props){

        let { searchKey, suggested_items, current_focus, getSelectionLength, getInputRef, suggestionClick } = props;
        let selection = suggested_items;//.filter(val => this.filter(val,searchKey));
        
        getSelectionLength(selection.length);
        
        return (
            <div className="suggestion-items">
            { selection.map((val, idx,) =>{                
                return (
                    <div key={idx} className={current_focus === idx ? "suggestion-active" : ""} ref={getInputRef} onClick={() => suggestionClick(val)} >  
                        <strong>{val.substr(0,searchKey.length)}</strong>
                        {val.substr(searchKey.length)}
                        <input type="hidden" value={val}/>
                    </div>)
                }                
            )}
            </div>
        );  
}
