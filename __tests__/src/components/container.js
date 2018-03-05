import React from 'react';
import ShallowRenderer from 'react-test-renderer/shallow';
import Container from '../../../container';

describe('Container Test -- Snapshot',()=>{
    it('capturing snapshot of container',()=>{
        const renderer = new ShallowRenderer();
        const result = renderer.render(<Container/>)
        expect(result).toMatchSnapshot();
    })
})