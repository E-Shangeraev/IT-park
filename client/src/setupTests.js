/* eslint-disable no-console */
import Enzyme, { shallow, render, mount } from 'enzyme'
import Adapter from '@wojtekmaj/enzyme-adapter-react-17'
import toJson from 'enzyme-to-json'
import '@testing-library/jest-dom/extend-expect'

// React 17 Enzyme adapter
Enzyme.configure({ adapter: new Adapter() })

global.shallow = shallow
global.render = render
global.mount = mount
global.toJson = toJson

window.matchMedia =
  window.matchMedia ||
  function () {
    return {
      matches: false,
      addListener() {},
      removeListener() {},
    }
  }

// Fail tests on any warning
console.error = message => {
  throw new Error(message)
}
