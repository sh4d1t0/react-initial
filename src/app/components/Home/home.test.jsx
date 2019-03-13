import React from 'react'
import { configure, shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import { Provider } from 'react-redux'
import configureStore from 'redux-mock-store'
import Home from '@components/Home'

configure({ adapter: new Adapter() })

describe('Check home section', () => {
  let wrapper
  const mockInitialState = { device: { isMobile: false } }

  /**
   * Factory function to create a ShallowWrapper for the App component.
   * @function setup
   * @param {object} props - Component props specific to this setup.
   * @param {object} state - Initial state for setup.
   * @returns {ShallowWrapper}
   */
  const setup = (props = {}, state = null) => {
    const mockStore = configureStore()(mockInitialState)
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
    const { storeState } = value
    expect(storeState).toEqual(newState)
  })
})
