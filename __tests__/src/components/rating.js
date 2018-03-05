import React from 'react';
import ShallowRenderer from 'react-test-renderer/shallow';
import Rating from '../../../src/components/rating';

describe('Rating Test -- Snapshot',()=>{
    it('capturing snapshot of Rating',()=>{
        const renderer = new ShallowRenderer();
        const result = renderer.render(<Rating/>)
        expect(result).toMatchSnapshot();
    })
})
