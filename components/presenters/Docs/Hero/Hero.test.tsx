import React from 'react'
import '@testing-library/jest-dom/extend-expect'
import { render, RenderResult } from '@testing-library/react'

import { Hero } from '.'
import { Button, BUTTON_VARIANT } from '../Button'

describe('Hero', () => {
  let wrapper: RenderResult

  describe('with required props', () => {
    beforeEach(() => {
      wrapper = render(
        <Hero
          title="Example Title"
          description="Example description."
          cta1={
            <Button variant={BUTTON_VARIANT.PRIMARY} data-testid="hero-cta-1">
              CTA1
            </Button>
          }
          cta2={
            <Button variant={BUTTON_VARIANT.TERTIARY} data-testid="hero-cta-2">
              CTA2
            </Button>
          }
        />
      )
    })

    it('renders the title', () => {
      expect(wrapper.queryByText('Example Title')).toBeInTheDocument()
    })

    it('renders the description', () => {
      expect(wrapper.queryByText('Example description.')).toBeInTheDocument()
    })

    it('renders the CTAs', () => {
      expect(wrapper.getByTestId('hero-cta-1')).toHaveTextContent('CTA1')
      expect(wrapper.getByTestId('hero-cta-2')).toHaveTextContent('CTA2')
    })
  })
})
