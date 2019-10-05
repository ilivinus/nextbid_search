import React from 'react';

export default  (props) => (
            <div>
                {props.items.map((val,idx) =>(
                <div key={idx} className="card">
                    <div className="container">
                        <h4>{val}</h4>
                    </div>
                </div>))}
            </div>
        );
    