import React from 'react'
import { shallow } from 'enzyme'
import Navbar from '@components/Navbar'

describe('Check navbar component', () => {
  let wrapper

  /**
   * Factory function to create a ShallowWrapper for the App component.
   * @function setup
   * @param {object} props - Component props specific to this setup.
   * @param {object} state - Initial state for setup.
   * @returns {ShallowWrapper}
   */
  const setup = (props = {}, state = null) => {
    return shallow(<Navbar {...props} {...state} />)
  }

  beforeEach(() => {
    wrapper = setup()
  })

  it('should render <Link> elements', () => {
    expect(wrapper.find('Link')).toHaveLength(3)
  })
})
