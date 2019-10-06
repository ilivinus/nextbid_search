import React from 'react';

export default  function SearchResult(props){
    return (
            <div>
                {props.items.map((val,idx) =>(
                <div key={idx} className="card">
                    <div className="container">
                        <h4>{val}</h4>
                    </div>
                </div>))}
            </div>
        );
}