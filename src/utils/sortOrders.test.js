import React from 'react'
import {sortOrders, getSortFunction, sortByItemCount, sortByDate, sortTypes} from './sortOrders';


describe('sortOrders function', () => {
	it('orders are null', () => {
		const result = sortOrders(null, sortByDate);
		expect(result).toBeUndefined();
	});

	it('orders are empty', () => {
		const result = sortOrders([], sortByDate);
		expect(result).toBeUndefined();
	});

	it('sortFunction is null', () => {
		const orders = [
			{
				items: ['item1', 'item2'],
				date: new Date('December 1, 2020 00:00:00'),
			},
		]
		const result = sortOrders(orders, null);
		expect(result).toBeUndefined();
	});

	it('sortFunction is not function', () => {
		const orders = [
			{
				items: ['item1', 'item2'],
				date: new Date('December 1, 2020 00:00:00'),
			},
		]
		const result = sortOrders(orders, 0);
		expect(result).toBeUndefined();
	});
});


describe('getSortFunction function', () => {
	it('sort type is DATE', () => {
		const result = getSortFunction(sortTypes.DATE);
		expect(result).toEqual(sortByDate);
	});

	it('sort type is COUNT', () => {
		const result = getSortFunction(sortTypes.COUNT);
		expect(result).toEqual(sortByItemCount);
	});

	it('sort type is null', () => {
		const result = getSortFunction(null);
		expect(result).toBeUndefined();
	});
});


describe('sortByItemCount function', () => {
	it('orders are null', () => {
		const result = sortByItemCount(null, null);
		expect(result).toEqual(0);
	});

	it('orders are not object', () => {
		const result = sortByItemCount('a', 1);
		expect(result).toEqual(0);
	});

	it('items are null', () => {
		const order1 = {};
		const order2 = {};

		const result = sortByItemCount(order1, order2);
		expect(result).toEqual(0);
	});

	it('same items count', () => {
		const order1 = {
			items: ['item1', 'item2'],
		};

		const order2 = {
			items: ['1', '2'],
		};

		const result = sortByItemCount(order1, order2);

		expect(result).toBe(0);
	});

	it('items count of order1 is more', () => {
		const order1 = {
			items: ['item1', 'item2', 'item3'],
		};

		const order2 = {
			items: ['1', '2'],
		};

		const result = sortByItemCount(order1, order2);

		expect(result).toBe(1);
	});

	it('items count of order1 is less', () => {
		const order1 = {
			items: ['item1'],
		};

		const order2 = {
			items: ['1', '2', '3'],
		};

		const result = sortByItemCount(order1, order2);

		expect(result).toBe(-1);
	});
});


describe('sortByDate function', () => {
	it('orders are null', () => {
		const result = sortByDate(null, null);
		expect(result).toEqual(0);
	});

	it('orders are not object', () => {
		const result = sortByDate('a', 1);
		expect(result).toEqual(0);
	});

	it('date are null', () => {
		const order1 = {};
		const order2 = {};

		const result = sortByDate(order1, order2);
		expect(result).toEqual(0);
	});

	it('same date', () => {
		const order1 = {
			date: new Date('December 1, 2020 00:00:00'),
		};

		const order2 = {
			date: new Date('December 1, 2020 00:00:00'),
		};

		const result = sortByDate(order1, order2);

		expect(result).toBe(0);
	});

	it('date of order1 is newer', () => {
		const order1 = {
			date: new Date('December 1, 2020 00:00:00'),
		};

		const order2 = {
			date: new Date('December 3, 2020 00:00:00'),
		};

		const result = sortByDate(order1, order2);

		expect(result).toBe(1);
	});

	it('date of order1 is older', () => {
		const order1 = {
			date: new Date('December 1, 2020 00:00:00'),
		};

		const order2 = {
			date: new Date('November 3, 2020 00:00:00'),
		};

		const result = sortByDate(order1, order2);

		expect(result).toBe(-1);
	});
});
