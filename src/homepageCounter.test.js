import homepageCounter from './homepageCounter.js';

describe('Test homepage counter', () => {
  test.each([
    {
      items: [
        { 'item 1': 'new item' },
        { 'item 2': 'new item' },
        { 'item 3': 'new item' },
        { 'item 4': 'new item' },
        { 'item 5': 'new item' },
      ],
      result: 5,
    },
    {
      items: [
        { 'item 1': 'new item' },
        { 'item 2': 'new item' },
        { 'item 3': 'new item' },
      ],
      result: 3,
    },
    {
      items: [],
      result: 0,
    },
  ])('Testing array', ({ items, result }) => {
    const itemsNumber = homepageCounter(items);
    expect(itemsNumber).toBe(result);
  });
});
