import React from 'react';
import renderer from 'react-test-renderer';
import SearchContainer from '../search-container';

describe("#SearchContainer",()=>{

    it("SearchContainer doesn't change on keydown",()=>{
        const component = renderer.create(
            <SearchContainer />
        )
        let tree = component.toJSON();
        expect(tree).toMatchSnapshot();
        let props = tree.children[1].children[0].children[0].children[0].props;
        //manually trigger the callback
        props.onKeyDown({ keyCode : 32});
        
        
        tree = component.toJSON();
        expect(tree).toMatchSnapshot();
    })
});