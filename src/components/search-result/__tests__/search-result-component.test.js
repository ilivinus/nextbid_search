import React from 'react';
import renderer from 'react-test-renderer';
import SearchResultComponent from '../search-result-component';

describe("#SearchResultComponent",() => {

    it("Should take the snapshot of the component",()=>{
        let component = renderer.create(
            <SearchResultComponent 
                items={[]} />)
        let tree =  component.toJSON();

        expect(tree).toMatchSnapshot();

    })

    it("Should call the appropriate prop",()=>{

        let data = ["Marnix","Livinus","Chidi","Peter"];

        let component = renderer.create(
            <SearchResultComponent 
                items={data} />)

        let tree = component.toJSON();
        expect(tree.children.length).toBe(4);
    })
});