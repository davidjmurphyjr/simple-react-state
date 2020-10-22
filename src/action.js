import {render} from './index'

export const action = fn => (...args) =>  {
  fn(...args)
  render()
}

