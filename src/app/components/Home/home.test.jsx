import React from 'react'
import { shallow } from 'enzyme'
import { Provider } from 'react-redux'
import configureStore from 'redux-mock-store'
import Home from '@components/Home'

describe('Check home section', () => {
  let wrapper
  let mockStore
  const mockInitialState = { device: { isMobile: false } }

  /**
   * Factory function to create a ShallowWrapper for the App component.
   * @function setup
   * @param {object} props - Component props specific to this setup.
   * @param {object} state - Initial state for setup.
   * @returns {ShallowWrapper}
   */
  const setup = (props = {}, state = null) => {
    mockStore = configureStore()(mockInitialState)
    return shallow(
      <Provider store={mockStore}>
        <Home {...props} {...state} />
      </Provider>
    )
  }

  beforeEach(() => {
    wrapper = setup()
  })

  it('should map device and get the device isMobile from Initial State', () => {
    const { value } = wrapper.props()
    const { store } = value
    const newState = store.getState()
    expect(mockInitialState).toEqual(expect.objectContaining(newState))
  })
})
