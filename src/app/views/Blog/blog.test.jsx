import React from 'react'
import { configure, shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import Blog from '@views/Blog'
import Navbar from '@components/Navbar'

configure({ adapter: new Adapter() })

describe('Check login section', () => {
  let wrapper

  beforeEach(() => {
    wrapper = shallow(<Blog />)
  })

  it('should render <Navbar /> element', () => {
    expect(wrapper.find(Navbar).children()).toBeTruthy()
  })
})
