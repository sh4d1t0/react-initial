import React from 'react'
import { mount } from 'enzyme'
import { Provider } from 'react-redux'
import configureStore from 'redux-mock-store'
import PageNotFound from '@views/PageNotFound'

describe('Check Page not found, 404', () => {
  let wrapper
  let mockStore
  const mockInitialState = { device: { isMobile: false } }

  /**
   * Factory function to create a MountWrapper for the App component.
   * @function setup
   * @param {object} props - Component props specific to this setup.
   * @param {object} state - Initial state for setup.
   * @returns {MountWrapper}
   */
  const setup = (props = {}, state = null) => {
    mockStore = configureStore()(mockInitialState)
    return mount(
      <Provider store={mockStore}>
        <PageNotFound {...props} {...state} />
      </Provider>
    )
  }

  beforeEach(() => {
    wrapper = setup()
  })

  it('should map device and get the device isMobile from Initial State', () => {
    const { store } = wrapper.props()
    const newState = store.getState()
    const { isMobile } = newState.device
    expect(isMobile).toEqual(false)
  })
})
