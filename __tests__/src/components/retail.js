import React from 'react';
import ShallowRenderer from 'react-test-renderer/shallow';
import Retail from '../../../src/containers/Retail';

describe('Retail Test -- Snapshot',()=>{
    it('capturing snapshot of Retail',()=>{
        const renderer = new ShallowRenderer();
        const result = renderer.render(<Retail.WrappedComponent/>)   
        expect(result).toMatchSnapshot();
    })
})