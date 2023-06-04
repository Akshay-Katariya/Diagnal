import { fireEvent, render } from '@testing-library/react-native'
import React from 'react'
import HomeScreen from '../src/screens/HomeScreen'

describe('HomeScreen', () => {
  it('renders the HomeScreen component correctly', () => {
    const { getByTestId } = render(<HomeScreen testID="home-screen" />)
    const homeScreen = getByTestId('home-screen')
    expect(homeScreen).toBeTruthy()
  })

  it('heade should render properly', () => {
    const { getByTestId, queryByTestId } = render(<HomeScreen testID="home-screen" />)
    const searchInput = queryByTestId('header')
    expect(searchInput).toBeTruthy()
  })

  it('hides the search input when toggleSearch is called twice', () => {
    const { getByTestId, queryByTestId } = render(<HomeScreen testID="home-screen" />)
    const toggleSearchButton = getByTestId('toggle-search-button')

    fireEvent.press(toggleSearchButton)
    fireEvent.press(toggleSearchButton)

    const searchInput = queryByTestId('search-input')
    expect(searchInput).toBeFalsy()
  })

  it('displays "No search results found" when there are no search results', () => {
    const { getByTestId, queryByText } = render(<HomeScreen testID="home-screen" />)
    const toggleSearchButton = getByTestId('toggle-search-button')

    fireEvent.press(toggleSearchButton)

    const searchInput = getByTestId('search-input')

    fireEvent.changeText(searchInput, 'Non-existing search query')

    const noDataText = queryByText('No search results found 🤷')
    expect(noDataText).toBeTruthy()
  })

  it('hides the search input and reset search when back pressed', () => {
    const { getByTestId, queryByTestId } = render(<HomeScreen testID="home-screen" />)
    const toggleSearchButton = getByTestId('go-back')

    fireEvent.press(toggleSearchButton)

    const searchInput = queryByTestId('search-input')
    expect(searchInput).toBeFalsy()
  })
})
