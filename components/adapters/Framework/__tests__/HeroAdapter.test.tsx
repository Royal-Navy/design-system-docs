import React from 'react'
import '@testing-library/jest-dom/extend-expect'
import { render, RenderResult } from '@testing-library/react'

import { HeroAdapter } from '../HeroAdapter'

describe('Framework/HeroAdapter', () => {
  let wrapper: RenderResult

  const fields = {
    title: 'Example Title',
    heading: 'Example Heading',
    heroDescription: 'Example description.',
  }

  describe('with fields', () => {
    beforeEach(() => {
      wrapper = render(<HeroAdapter fields={fields} />)
    })

    it('correctly applies the ID attribute', () => {
      expect(wrapper.getByTestId('content-panel')).toHaveAttribute(
        'id',
        'exampleTitle'
      )
    })

    it('renders the heading', () => {
      expect(wrapper.queryByText('Example Heading')).toBeInTheDocument()
    })

    it('renders the description', () => {
      expect(wrapper.queryByText('Example description.')).toBeInTheDocument()
    })
  })
})
