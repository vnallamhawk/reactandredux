import React from 'react';
import {configure} from 'enzyme';
import {enzyme} from 'enzyme';
import Adapter from 'enzyme-adapter-react-15';
configure({adapter:new Adapter});
import ShallowRenderer from 'react-test-renderer/shallow';
import Promotion from '../../../src/components/promotion';
import {shallow,mount} from 'enzyme';
import configureStore from 'redux-mock-store';
import sinon from 'sinon';
const mockProps=configureStore();
let props,container;
beforeEach(()=> {
    //props = mockProps(propsData);
    container = mount(<Promotion purchasingChannelCode = "0"/>) 
})

describe('Promotion Test -- Testing Presence of AddToCart and PickUpInCart of Buttons',()=>{
    it('Should contain AddToCart button',()=>{
		container = shallow(<Promotion purchasingChannelCode = "0"/>)
		let input=1;
		let result = container.find('.btnAddToCart').length;
    	expect(result).toEqual(1);
	})
	it('Should contain Pick Up in Store button',()=>{
		container = shallow(<Promotion purchasingChannelCode = "0"/>)
		let input=1;
		let result = container.find('.btnPickUp').length;
    	expect(result).toEqual(input);
	})
	it('Pick Up in Store button should not be present',()=>{
		container = shallow(<Promotion purchasingChannelCode = "1"/>)
		let input=0;
		let result = container.find('btnPickUp').length;
    	expect(result).toEqual(input);
	})
	it('AddtoCart button must not be present',()=>{
		container = shallow(<Promotion purchasingChannelCode = "3"/>)
		let input=0;
		let result = container.find('.btnAddToCart').length;
    	expect(result).toEqual(input);
	})
	it('PickupInStore button must not be present',()=>{
		container = shallow(<Promotion purchasingChannelCode = "3"/>)
		let input=0;
		let result = container.find('.btnPickUp').length;
    	expect(result).toEqual(input);
	})
})

describe('Testing Quantity State',()=>{
	const mockCallBack = sinon.spy();
		let container = mount(<Promotion onChange={mockCallBack}/>)
		let btnPlus = container.find('#btnPlus');
		let btnMinus = container.find('#btnMinus');
	it('Initial State must be 0',()=>{
		let output = JSON.stringify(container.state('quantity'));
		let input="1";
		expect(output).toEqual(input);
	})
	it('Triggering plus click method 5 times',()=>{
		let output;
		let input="6";
		for(var i=0;i<5;i++){
			btnPlus.simulate('click');
		}
		output = JSON.stringify(container.state('quantity'));
		expect(output).toEqual(input);
	})
	
	it('Triggering minus click method when initial state is 1',()=>{
		let input="5";
			btnMinus.simulate('click');
		let output = JSON.stringify(container.state('quantity'));
		expect(output).toEqual(input);
    })
})




describe('Promotion Test -- Testing if promotion is passed as props',()=>{
	let promotion=
[{Description: [{legalDisclaimer: "Offer available online only. Offer applies to purc…pping methods only. Not valid on previous orders.", shortDescription: "SPEND $50, GET FREE SHIPPING"}], endDate: "2014-05-25 06:59:00.001", promotionIdentifier: "10736506", promotionType: "Buy catalog entries from category X, get shipping at a fixed price", startDate: "2014-05-18 07:00:00.001"}]
    it('The description must be equal to the passed props',()=>{
		let desc= " SPEND $50, GET FREE SHIPPING ",result;
		container = shallow(<Promotion promotion={promotion}/>)
		result = container.find('.desc').text();
		expect(result).toEqual(desc);
	})
})

