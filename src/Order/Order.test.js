import React from 'react'
import Adapter from 'enzyme-adapter-react-16';
import {shallow, configure} from 'enzyme';
import {fakeOrders} from '../data/fakeOrders'
import toJson from "enzyme-to-json";

import Order from './Order';

configure({adapter: new Adapter()});

import getDate from '../utils/getDate'
jest.mock(getDate)

describe('Order.js', () => {
  it('empty props', () => {
    const wrapper = shallow(<Order/>);
    expect(toJson(wrapper)).toMatchSnapshot();
  });

  it('shop and date are null', () => {
    const wrapper = shallow(<Order order={{shop: null, date: null}} />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });

  it('shop and date are null', () => {
    const wrapper = shallow(<Order order={{shop: null, date: null}} />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });

  it('render without items', () => {
    const wrapper = shallow(<Order order={{shop: 'a', date: new Date('December 1, 2020 00:00:00')}} />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });

  it('render with items', () => {
    const wrapper = shallow(<Order order={{shop: 'a', date: new Date('December 1, 2020 00:00:00'), items: ['item1','item2']}} />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });

  it('check getDate', () => {
    const wrapper = shallow(<Order order={fakeOrders} />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});
