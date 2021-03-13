import React from 'react'
import Adapter from 'enzyme-adapter-react-16';
import {shallow, configure} from 'enzyme';
import {fakeOrders} from '../data/fakeOrders'

import Order from './Order';

configure({adapter: new Adapter()});

import {getDate} from '../utils/getDate'
jest.mock('../utils/getDate')

describe('Order.js', () => {
  beforeEach(() => {
    getDate.mockReturnValue('1 12 2020');
  });

  afterEach(() => {
    jest.resetModules();
  });

  it('empty props', () => {
    const wrapper = shallow(<Order/>);
    expect(wrapper.getElement()).toBeNull();
  });

  it('shop and date are null', () => {
    const wrapper = shallow(<Order order={{shop: null, date: null}} />);
    expect(wrapper.getElement()).toBeNull();
  });

  it('render without items', () => {
    const wrapper = shallow(<Order order={{shop: 'a', date: new Date('December 1, 2020 00:00:00')}} />);
    expect(wrapper).toMatchSnapshot();
  });

  it('render with items', () => {
    const wrapper = shallow(<Order order={{shop: 'a', date: new Date('December 1, 2020 00:00:00'), items: ['item1','item2']}} />);
    expect(wrapper).toMatchSnapshot();
  });

  it('check getDate', () => {
    const wrapper = shallow(<Order order={fakeOrders} />);
    expect(getDate).toHaveBeenCalled();
  });
});
