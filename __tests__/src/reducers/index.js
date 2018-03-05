import React from 'react';
import {createStore} from 'redux';
import combineReducer from '../../../src/reducers/index';

let store = createStore(combineReducer);
describe('>>>>Reducer - Combine Reducer Test',()=>{
    it('Combine Redcuer test',()=>{
        //let state = [{item:"1,2,3"}];
        expect(store.getState().items).toEqual([])
    })
})
