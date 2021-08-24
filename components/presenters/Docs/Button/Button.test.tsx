import React from 'react'
import '@testing-library/jest-dom/extend-expect'
import { render, RenderResult } from '@testing-library/react'

import { Button } from '.'

describe('Button', () => {
  let wrapper: RenderResult

  describe('with required props', () => {
    beforeEach(() => {
      wrapper = render(<Button>Hello, World!</Button>)
    })

    it('render the children', () => {
      expect(wrapper.queryByText('Hello, World!')).toBeInTheDocument()
    })
  })
})
