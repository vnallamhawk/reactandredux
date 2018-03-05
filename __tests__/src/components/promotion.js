import React from 'react';
import {configure} from 'enzyme';
import {enzyme} from 'enzyme';
import Adapter from 'enzyme-adapter-react-15';
configure({adapter:new Adapter});
import ShallowRenderer from 'react-test-renderer/shallow';
import Promotion from '../../../src/components/promotion';
import {shallow,mount} from 'enzyme';
import configureStore from 'redux-mock-store';
const mockProps=configureStore();
let props,container;
const propsData ={
	"purchasingChannelCode": "0",
	"returns": "refund\/exchange policy<br\/><br\/><p style=\"font-size:13px;\">Most unopened items in new condition returned within 90 days will receive a refund or exchange. Some items have a modified return policy that is less than 90 days.&nbsp;Those items will either show a \"return by\" date or \"return within\" day range under the item on your receipt or packing slip and in the \"Item details, shipping\" tab if purchased on Target.com. Items that are opened or damaged or do not have a packing slip or receipt may be denied a refund or exchange. All bundled items must be returned with all components for a full refund. Bundle components may not all have the same return policy; please check your packing slip for details.&nbsp; Some items, such as gift cards, digital items&nbsp;are never returnable.&nbsp;<br \/><br \/>See the <a href=\"http:\/\/www.target.com\/HelpContent?help=\/sites\/html\/TargetOnline\/help\/returns_and_refunds\/returns_and_refunds.html\">Target return policy<\/a> for complete information.<\/p><br\/>",
	"Promotions": [{
			"Description": [{
				"legalDisclaimer": "Offer available online only. Offer applies to purchases of $50 or more of eligible items across all categories. Look for the &quot;SPEND $50: SHIPS FREE&quot; logo on eligible items. Some exclusions apply. Items that are not eligible are subject to shipping charges. $50 purchase is based on eligible merchandise subtotal. Items that are not eligible, GiftCards, e-GiftCards, gift wrap, tax and shipping and handling charges will not be included in determining merchandise subtotal. Offer valid for orders shipping within the 48 contiguous states, as well as APO\/FPO and for Standard and To the Door shipping methods only. Not valid on previous orders.",
				"shortDescription": "SPEND $50, GET FREE SHIPPING"
			}],
			"endDate": "2014-05-25 06:59:00.001",
			"promotionIdentifier": "10736506",
			"promotionType": "Buy catalog entries from category X, get shipping at a fixed price",
			"startDate": "2014-05-18 07:00:00.001"
		},
		{
			"Description": [{
				"legalDisclaimer": "Receive a $25 gift card when you buy a Ninja Professional Blender with single serve blending cups or a Ninja MEGA Kitchen System. Not valid on previous orders. On your order summary, the item subtotal will reflect the price of the qualifying item plus the amount of the free gift card, followed by a discount given for the amount of the free gift card. &nbsp;Your price on the order summary will be the price of the qualifying item (the total charges for the qualifying item and gift card). &nbsp;Your account will actually be charged the amount of the qualifying item reduced by the amount of the gift card, and a separate charge for the amount of the gift card. The gift card will be sent to the same address as your order and will ship separately. If you want to return the item you purchased to a Target Store, you may either keep the gift card and just return the qualifying item (you will be refunded the amount of the qualifying item reduced by the amount of the gift card), or you can return the qualifying item and the gift card &nbsp;for a full refund using the online receipt. If you return the item you purchased by mail, keep the gift card; you will be refunded the amount of the qualifying item reduced by the amount of the gift card. Offer expires 05\/24\/14 at 11:59pm PST.",
				"shortDescription": "$25 gift card with purchase of a select Ninja Blender"
			}],
			"endDate": "2014-05-25 06:59:00.001",
			"promotionIdentifier": "10730501",
			"promotionType": "Multiple Items Free Gift",
			"startDate": "2014-05-11 07:00:00.001"
		}
	]
}
beforeEach(()=> {
    //props = mockProps(propsData);
    container = mount(<Promotion purchasingChannelCode = "0"/>) 
})


//const Promotion = require('../../../src/components/promotion').default;
// const wrapper =mount(<Promotion/>);
// console.log(wrapper);
describe('Promotion Test -- Testing Presence of AddToCart and PickUpInCart of Buttons',()=>{
    it('Presence of AddToCart and PickUpInCart',()=>{
		container = shallow(<Promotion purchasingChannelCode = "0"/>)
		let noButtons=2;
		let result = container.find('button').length;
    	expect(result).toEqual(noButtons);
	})
	it('Pick Up in Store button should not be present',()=>{
		container = shallow(<Promotion purchasingChannelCode = "1"/>)
		let noButtons=1;
		let result = container.find('button').length;
    	expect(result).toEqual(noButtons);
	})
	it('AddtoCart and PickupInStore button must not be present',()=>{
		container = shallow(<Promotion purchasingChannelCode = "3"/>)
		let noButtons=0;
		let result = container.find('button').length;
    	expect(result).toEqual(noButtons);
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

