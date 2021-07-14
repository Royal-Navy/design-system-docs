import React from 'react'
import '@testing-library/jest-dom/extend-expect'
import { render, RenderResult } from '@testing-library/react'

import { Badge } from '.'

describe('Badge', () => {
  let wrapper: RenderResult

  describe('with required props', () => {
    beforeEach(() => {
      wrapper = render(<Badge>Hello, World!</Badge>)
    })

    it('render the children', () => {
      expect(wrapper.queryByText('Hello, World!')).toBeInTheDocument()
    })
  })
})
