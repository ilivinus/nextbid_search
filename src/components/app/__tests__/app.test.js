import React from 'react';
import renderer from "react-test-renderer";
import App from '../index';

describe("#App",()=>{
    it("Should detect change in the App Component",()=>{
        let root = renderer.create(<App />);
        
        root = root.toJSON();
        
        expect(root).toMatchSnapshot();
    })
})
