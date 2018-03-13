import React from 'react';
import ShallowRenderer from 'react-test-renderer/shallow';
import Carousel from '../../../src/components/carousel';
import { mount, configure,shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-15';
configure({ adapter: new Adapter });

let container, images = [{
    "image": "http:\/\/target.scene7.com\/is\/image\/Target\/14263758_Alt01"
},
{
    "image": "http:\/\/target.scene7.com\/is\/image\/Target\/14263758_Alt02"
},
{
    "image": "http:\/\/target.scene7.com\/is\/image\/Target\/14263758_Alt03"
},
{
    "image": "http:\/\/target.scene7.com\/is\/image\/Target\/14263758_Alt04"
}
], title = "My Retail Store";

beforeEach(() => {
    container = shallow(<Carousel title={title} images={images} />)
})

describe('Retail Test -- Snapshot', () => {
    it('capturing snapshot of Carousel', () => {
        const renderer = new ShallowRenderer();
        const result = renderer.render(<Carousel />)
        expect(result).toMatchSnapshot();
    })
})

describe('Carousel Rendering -- Testing', () => {
    it('Testing rendering of title', () => {

        let result = container.find('.title').text();
        expect(result).toEqual(title);
    })

    it('Testing rendering of images', () => {
        let result = container.find('img').length;
        expect(result).toEqual(images.length);
    })
})


