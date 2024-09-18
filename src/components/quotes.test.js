import React from 'react';
import { render, cleanup } from '@testing-library/react';
import TestElements from './quotes'

afterEach(cleanup);

  it('should equal to test', () => {
    const { getByTestId } = render(<TestElements />); 
    expect(getByTestId('bodytext')).toHaveTextContent("test")
   });

   it('should equal to default authors name', () => {
    const { getByTestId } = render(<TestElements />);
     expect(getByTestId('author')).toHaveTextContent("victor")
  });
