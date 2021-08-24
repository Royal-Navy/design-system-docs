import React from 'react'
import '@testing-library/jest-dom/extend-expect'
import { render, RenderResult } from '@testing-library/react'

import { Card } from '.'

describe('Card', () => {
  let wrapper: RenderResult

  describe('with required props', () => {
    beforeEach(() => {
      wrapper = render(
        <Card
          title="Design Tokens"
          titleColor="#C676FF"
          href="#browse-patterns"
          anchorText="Browse patterns"
        >
          Design tokens describe our design language with descrete variables
        </Card>
      )
    })

    it('renders the children', () => {
      expect(
        wrapper.queryByText(
          'Design tokens describe our design language with descrete variables'
        )
      ).toBeInTheDocument()
    })

    it('renders the title', () => {
      expect(wrapper.queryByText('Design Tokens')).toBeInTheDocument()
    })

    it('renders the anchor correctly', () => {
      expect(wrapper.queryByText('Browse patterns')).toBeInTheDocument()
      expect(wrapper.getByTestId('card-anchor')).toHaveAttribute(
        'href',
        '#browse-patterns'
      )
    })
  })
})
