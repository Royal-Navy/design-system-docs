import React from 'react'
import '@testing-library/jest-dom/extend-expect'
import { render, RenderResult } from '@testing-library/react'

import { Masthead } from '.'

describe('Masthead', () => {
  let wrapper: RenderResult

  describe('with required props', () => {
    beforeEach(() => {
      wrapper = render(<Masthead title="Hello, World!" version="0.1.0" />)
    })

    it('renders the title', () => {
      expect(wrapper.getByTestId('masthead-title')).toHaveTextContent(
        'Hello, World!'
      )
    })

    it('renders the version', () => {
      expect(wrapper.getByTestId('masthead-version')).toHaveTextContent('0.1.0')
    })
  })
})
