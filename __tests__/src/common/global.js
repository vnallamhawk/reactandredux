import React from 'react';
import dateFunction from '../../../src/common/global';


describe('Global Function Test',()=>{
    it('It should return the right date format',()=>{
        let expected = "May 25,2014"
        let result = dateFunction("2014-05-25 06:59:00.001")
    	expect(result).toEqual(expected);
    })
})