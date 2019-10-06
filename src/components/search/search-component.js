import React from 'react';

export default function SearchComponent(props){
            return (
            <div className="suggestion">
                <input type="text" 
                    className={props.anySuggestion ? "input-class" : ""}
                    value={props.searchKey}
                    onKeyDown={props.handleKeyDown}
                    onChange={props.onSearchKeyChange} 
                    placeholder="Search..." />                    
                    <button type="submit" onClick={props.handleSubmit} className="sb-button">Submit</button>
            </div>
        );
}
