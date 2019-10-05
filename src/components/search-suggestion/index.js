import React from 'react';
import SearchSuggestionContainer from './search-suggestion-container';

export default SearchSuggestionContainer;
// import React, { Component } from 'react';

// export default class SearchSuggestions extends Component {

//     constructor(props){
//         super(props);
//         this.state = {
//             suggested_items : [],
//             current_focus : 0
//         }
//         this.suggestionClick = this.suggestionClick.bind(this);
//     }
//     static selectionLength = 0;
//     static inputRef = ()=>{}

//     componentDidMount(){
//         if(this.props){
//             let { items = [], keyCode = 0 } = this.props;
//             this.setState({ suggested_items : items, current_focus : keyCode })
//         }
//     }
//     static getDerivedStateFromProps(nextProps, prevState){
//         let { keyCode } = nextProps;              
//         return {
//             ...prevState,
//             ...SearchSuggestions.suggestionKeyPress(keyCode, prevState)
//         };
    
//     }
    
//     static suggestionKeyPress = (keyCode, state) => {
//         let { current_focus } = state;
//         let selectionLength = SearchSuggestions.selectionLength;
//         if(keyCode === 40){
//             //down arrow key pressed
//             return { current_focus : (state.current_focus + 1) % selectionLength };
//         }else if(keyCode === 38){
//             //up arrow key pressed
//             if (current_focus >= selectionLength) current_focus = 0;
//             if (current_focus < 0) current_focus = selectionLength;
//             return { current_focus : current_focus - 1 };
        
//         }else if(keyCode === 13){
//           if (current_focus > -1) {
//             /*and simulate a click on the "active" item:*/
//             if (SearchSuggestions.inputRef) SearchSuggestions.inputRef.click();
//           }
//           return { current_focus : 0 };        
//         }
//     }

//     suggestionClick = (val) =>{
//         this.props.selectedItem(val)
//         this.removeAllList();
//     }

//     removeAllList = () => {
//         this.setState({ suggested_items : [] });
//     }
//     filter = (val,searchKey) => val.substr(0, searchKey.length).toUpperCase() === searchKey.toUpperCase();
   
//     render(){

//         let { suggested_items,current_focus } = this.state;
//         let { searchKey } = this.props;
//         let selection = suggested_items.filter(val => this.filter(val,searchKey));
//         SearchSuggestions.selectionLength = selection.length;

//         return (
//             <div className="suggestion-items">
//             { selection.map((val, idx,) =>{                
//                 return (
//                     <div key={idx} className={current_focus === idx ? "suggestion-active" : ""} ref={e => {SearchSuggestions.inputRef = e}} onClick={() => this.suggestionClick(val)} >  
//                         <strong>{val.substr(0,searchKey.length)}</strong>
//                         {val.substr(searchKey.length)}
//                         <input type="hidden" value={val}/>
//                     </div>)
//                 }                
//             )}
//             </div>
//         );
//     }
// }