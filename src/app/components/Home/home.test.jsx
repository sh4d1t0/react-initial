import React from 'react'
import { configure, shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import Home from '@components/Home'
import Navbar from '@components/Navbar'

configure({ adapter: new Adapter() })

describe('Check home section', () => {
  let wrapper

  beforeEach(() => {
    wrapper = shallow(<Home />)
  })

  it('should render <LoginForm /> element to auth', () => {
    expect(wrapper.find(Navbar).children()).toBeTruthy()
  })
})
