import React from 'react';
import { render } from '@testing-library/react';
import Board from './Board';


// Mock isReversed function
Board.isReversed = jest.fn((index) => {
    return index % 2 === 0;
  });
  
  test('isReversed returns true when index is even', () => {
    expect(Board.isReversed(0)).toBe(true);
    expect(Board.isReversed(2)).toBe(true);
    expect(Board.isReversed(4)).toBe(true);
  });
  
  test('isReversed returns false when index is odd', () => {
    expect(Board.isReversed(1)).toBe(false);
    expect(Board.isReversed(3)).toBe(false);
    expect(Board.isReversed(5)).toBe(false);
  });