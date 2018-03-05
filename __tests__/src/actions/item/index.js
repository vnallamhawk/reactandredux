import React from 'react';
import {fetchItems}  from '../../../../src/actions/item/index';
import {FETCH_ITEMS} from '../../../../src/actions/types';

describe('>>>>Action - Test Fetch Actions',()=>{
    it('Actions for fetchItem',()=>{
        let state = fetchItems();
        expect(state.type).toEqual('fetch_items')
    })
})
