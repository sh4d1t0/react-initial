import React from 'react'
import { configure, shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import Navbar from '@components/Navbar'

configure({ adapter: new Adapter() })

describe('Check home section', () => {
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
