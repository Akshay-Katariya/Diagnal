import { render } from '@testing-library/react-native'
import React from 'react'
import App from '../App'

describe('App', () => {
  it('renders the App component correctly', () => {
    const { getByTestId } = render(<App />)
    const container = getByTestId('container')
    expect(container).toBeTruthy()
    const homeScreen = getByTestId('home-screen')
    expect(homeScreen).toBeTruthy()
  })
})
