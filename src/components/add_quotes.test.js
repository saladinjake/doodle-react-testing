import React from 'react'
import { render, cleanup,  fireEvent,waitFor } from '@testing-library/react'
import QuotesContextProvider, { QuotesContext } from '../context/app_context'
import TestComponent from "./add_quotes"
const renderWithContext = (
  component) => {
  return {
    ...render(
        <QuotesContextProvider value={QuotesContext}>
            {component}
        </QuotesContextProvider>)
  }
}

afterEach(cleanup);

it('checks initial state is equal to Quote of the day', () => {
    const { getByTestId } = renderWithContext(<TestComponent />)
    expect(getByTestId("typingQuote")).toHaveTextContent("Quote of the day")
})

it('add quotes button clicked', asyn () => {
  const { getByTestId } = renderWithContext(<TestComponent />)
  const author = getByTestId("inputA")
  fireEvent.change(author, {target: {value:"Saladin"}})
  await waitFor(() => expect(author).toHaveDisplayValue("Saladin"))

  fireEvent.click(getByTestId('button-up'))
  expect(getByTestId('data-testid')).toHaveTextContent('Saladin')
})

