import React from 'react'
import '@testing-library/jest-dom/extend-expect'
import { render, RenderResult } from '@testing-library/react'

import { HeroCard, HeroCardChild, HERO_CARD_VARIANT } from '.'
import { Button, BUTTON_VARIANT } from '../Button'

describe('HeroCard', () => {
  let wrapper: RenderResult

  describe('with required props', () => {
    beforeEach(() => {
      wrapper = render(
        <HeroCard
          variant={HERO_CARD_VARIANT.PRIMARY}
          title="Example Title"
          description="Example description."
          cta={
            <Button
              variant={BUTTON_VARIANT.SECONDARY}
              href="#example-href"
              data-testid="hero-card-cta"
            >
              Example CTA Text
            </Button>
          }
        >
          <HeroCardChild data-testid="hero-card-child">
            Example Child Content
          </HeroCardChild>
        </HeroCard>
      )
    })

    it('renders the child content', () => {
      expect(wrapper.getByTestId('hero-card-child')).toHaveTextContent(
        'Example Child Content'
      )
    })

    it('renders the injected CTA', () => {
      expect(wrapper.getByTestId('hero-card-cta')).toHaveTextContent(
        'Example CTA Text'
      )
      expect(wrapper.getByTestId('hero-card-cta')).toHaveAttribute(
        'href',
        '#example-href'
      )
    })

    it('renders the title', () => {
      expect(wrapper.queryByText('Example Title')).toBeInTheDocument()
    })

    it('renders the description', () => {
      expect(wrapper.queryByText('Example description.')).toBeInTheDocument()
    })
  })
})
