import '../search-suggestion/search-suggestion.css';
import SearchContainer from './search-container';
import './search.css';

export default SearchContainer;
// export default class Search extends Component {
//     state = {
//         search_key : "",
//         keyCode : 0,
//     }
//     handleKeyDown = (evt) => {
//         this.setState({ keyCode : evt.keyCode });
//     }
//     render(){
//         return (
//             <form autoComplete="off">
//                 <div className="suggestion" style={{"width": "300px" }}>
//                     <input type="text" 
//                         value={this.state.search_key}
//                         onKeyDown={this.handleKeyDown}
//                         onChange={(evt)=> this.setState({ search_key : evt.target.value})} 
//                         placeholder="Search key" />

//                     <SearchSuggestion                        
//                         items={["Lucy","Jane", "Regina", "Amaka", "Luciana"]} 
//                         searchKey={this.state.search_key} 
//                         keyCode={this.state.keyCode}
//                         selectedItem={(val) => this.setState({ search_key : val })} />
//                 </div>
//             </form>
//         );
//     }
// }
// const mapStateToProps = state =>({ 

// });
// const mapDispatchToProps = dispatch => ({
//     keyDown : dispatch({})
// })
// export default connect(mapStateToProps, mapDispatchToProps)(Search);