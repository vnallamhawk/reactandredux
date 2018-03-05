import React from 'react';
import fetchItems  from '../../../../src/reducers/item';

describe('>>>>Reducer - Test Fetch Items Reducer',()=>{
    it('reducer for fetchItem',()=>{
        //let state = [{item:"1,2,3"}];
        let input=[];
        let type = {type:"fetch_items"}
        let result = fetchItems(input,"");
        expect(result).toEqual(input);
    })
})

describe('>>>>Reducer - Test Fetch Items Reducer',()=>{
    it('reducer for fetchItem',()=>{
        //let state = [{item:"1,2,3"}];
        let expectedState = [{item:"1,2,3"}];
        let output = {type:"fetch_items",payload:{data:{CatalogEntryView:expectedState}}}
        // let action ={type:FETCH_ITEMS,payload:output}
        let result = fetchItems([],output)
        expect(expectedState).toEqual(result);
    })
})