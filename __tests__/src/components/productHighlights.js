import React from 'react';
import {configure} from 'enzyme';
import ShallowRenderer from 'react-test-renderer/shallow';
import ProductHighlights from '../../../src/components/productHighlights';
import {shallow,mount} from 'enzyme';
import Adapter from 'enzyme-adapter-react-15';
configure({adapter:new Adapter});

describe('Product Highlights Test -- Snapshot',()=>{
    it('capturing snapshot of Product Hightlight',()=>{
        const renderer = new ShallowRenderer();
        const result = renderer.render(<ProductHighlights/>)
        expect(result).toMatchSnapshot();
    })
})


describe('Testing of features rendering',()=>{
    it('capturing snapshot of Product Hightlight',()=>{
        let container,result;
        let highlights=["<strong>Wattage Output:</strong> 1100 Watts", "<strong>Number of Speeds:</strong> 3 "]
        container = shallow(<ProductHighlights highlights = {highlights}/>)
        result = container.find('.features').length;
        expect(result).toEqual(2);
    })
})
