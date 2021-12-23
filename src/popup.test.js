import { countComments } from './popup.js';

describe('Testing comments counter', () => {
  test.each([
    {
      comments: [
        { 'comment 1': 'new comment' },
        { 'comment 2': 'new comment' },
        { 'comment 3': 'new comment' },
        { 'comment 4': 'new comment' },
      ],
      result: 4,
    },
    {
      comments: [
        { 'comment 1': 'new comment' },
        { 'comment 2': 'new comment' },
        { 'comment 3': 'new comment' },
        { 'comment 4': 'new comment' },
        { 'comment 5': 'new comment' },
      ],
      result: 5,
    },
    {
      comments: [

      ],
      result: 0,
    },

  ])('Testing array with $result elements', ({ comments, result }) => {
    const commentsNumber = countComments(comments);

    expect(commentsNumber).toBe(result);
  });
});
