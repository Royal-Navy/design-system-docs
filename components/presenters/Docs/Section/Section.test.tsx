import React from 'react'
import '@testing-library/jest-dom/extend-expect'
import { render, RenderResult } from '@testing-library/react'

import { Section } from '.'

describe('Section', () => {
  let wrapper: RenderResult

  describe('with required props', () => {
    beforeEach(() => {
      wrapper = render(
        <Section sectionIndex="1" title="Example Title">
          <p>Hello, World!</p>
        </Section>
      )
    })

    it('renders the children', () => {
      expect(wrapper.queryByText('Hello, World!')).toBeInTheDocument()
    })

    it('renders the index', () => {
      expect(wrapper.queryByText('1')).toBeInTheDocument()
    })

    it('renders the title', () => {
      expect(wrapper.queryByText('Example Title')).toBeInTheDocument()
    })
  })
})
