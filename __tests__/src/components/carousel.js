import React from 'react';
import ShallowRenderer from 'react-test-renderer/shallow';
import Carousel from '../../../src/components/carousel';

describe('Retail Test -- Snapshot',()=>{
    it('capturing snapshot of Carousel',()=>{
        const renderer = new ShallowRenderer();
        const result = renderer.render(<Carousel/>)
        expect(result).toMatchSnapshot();
    })
})