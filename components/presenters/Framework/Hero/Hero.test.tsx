import React from 'react'
import '@testing-library/jest-dom/extend-expect'
import { render, RenderResult } from '@testing-library/react'

import { Hero } from '.'

describe('Hero', () => {
  let wrapper: RenderResult

  describe('with required props', () => {
    beforeEach(() => {
      wrapper = render(
        <Hero
          id="home"
          title="Example Title"
          description="Example Description"
        />
      )
    })

    it('apples the id HTML attribute', () => {
      expect(wrapper.getByTestId('content-panel')).toHaveAttribute('id', 'home')
    })

    it('renders the title', () => {
      expect(wrapper.getByTestId('hero-title')).toHaveTextContent(
        'Example Title'
      )
    })

    it('renders the description', () => {
      expect(wrapper.getByTestId('hero-description')).toHaveTextContent(
        'Example Description'
      )
    })
  })
})
