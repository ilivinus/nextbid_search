import React from 'react';
import renderer from 'react-test-renderer';
import SearchComponent from '../search-component';

describe("#SearchComponent",() => {

    it("Should call the appropriate prop",()=>{
        let onSearchKeyChange = jest.fn()
        , anySuggestion = true
        , handleKeyDown = jest.fn()
        , handleSubmit = jest.fn()
        , searchKey = "searching"
        
        const component = renderer.create(
            <SearchComponent 
                anySuggestion={anySuggestion}
                handleKeyDown={handleKeyDown}
                searchKey={searchKey}
                handleSubmit={handleSubmit}
                onSearchKeyChange={onSearchKeyChange} />
        )
        let tree = component.toJSON();

        let props = tree.children[0].props; 
         //manually trigger the callback
        props.onChange();
        expect(onSearchKeyChange).toHaveBeenCalledTimes(1);
        
        props.onKeyDown();
        expect(handleKeyDown).toHaveBeenCalledTimes(1);

        expect(props.value).toBe(searchKey);

        tree.children[1].props.onClick();

        expect(handleSubmit).toHaveBeenCalledTimes(1);
    })
});