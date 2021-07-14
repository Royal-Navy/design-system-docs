import React from 'react'
import '@testing-library/jest-dom/extend-expect'
import { render, RenderResult } from '@testing-library/react'
import { LiveExample } from './LiveExample'

describe('Live example', () => {
  let wrapper: RenderResult

  describe('when', () => {
    beforeEach(() => {
      wrapper = render(
        <LiveExample>
          <div>Example</div>
        </LiveExample>
      )
    })

    it('should render the example', () => {
      expect(wrapper.getByText('Example')).toBeInTheDocument()
    })
  })
})
