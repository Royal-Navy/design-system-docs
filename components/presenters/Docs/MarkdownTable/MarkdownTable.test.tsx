import React from 'react'
import '@testing-library/jest-dom/extend-expect'
import { render, RenderResult } from '@testing-library/react'

import { MarkdownTable } from '.'

describe('Card', () => {
  let wrapper: RenderResult

  describe('with required props', () => {
    beforeEach(() => {
      const markdown =
        '\n| column1     | column2     |\n| ---------- | ---------- |\n| value1       | value2       |\n'

      wrapper = render(<MarkdownTable>{markdown}</MarkdownTable>)
    })

    it('renders the table', () => {
      expect(wrapper.getByText('column1')).toBeInTheDocument()
      expect(wrapper.getByText('column2')).toBeInTheDocument()
      expect(wrapper.getByText('value1')).toBeInTheDocument()
      expect(wrapper.getByText('value2')).toBeInTheDocument()
    })
  })
})
