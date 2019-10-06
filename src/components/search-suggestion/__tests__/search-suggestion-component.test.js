import React from 'react';
import renderer from 'react-test-renderer';
import SearchSuggestionComponent from '../search-suggestion-component';

describe("#SearchSuggestionComponent",() => {

    it("Should take the snapshot of the component",()=>{
        
        let data = ["Marnix","Livinus","Chidi","Peter"]
        ,getSelectionLength = (len) =>{}
        ,suggestionClick = jest.fn()
        ,searchKey= "searching";

        let component = renderer.create(
            <SearchSuggestionComponent
                searchKey={searchKey}
                getSelectionLength={getSelectionLength}
                suggestionClick={suggestionClick}
                suggested_items={[]} />)
        let tree =  component.toJSON();

        expect(tree).toMatchSnapshot();
    });

    it("Should call the appropriate prop",()=>{

        let data = ["Marnix","Livinus","Chidi","Peter"]
        ,getSelectionLength = (len) =>{}
        ,suggestionClick = jest.fn()
        ,searchKey= "searching";

        let component = renderer.create(
            <SearchSuggestionComponent
                searchKey={searchKey}
                getSelectionLength={getSelectionLength}
                suggestionClick={suggestionClick}
                suggested_items={data} />)

        let tree = component.toJSON();
        let props = tree.children;
          
        //manually trigger callback
        props[0].props.onClick();
        expect(suggestionClick).toHaveBeenCalledTimes(1);       

        expect(tree.children.length).toBe(4);
    })
});