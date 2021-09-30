import React from 'react'
import '@testing-library/jest-dom/extend-expect'
import { render, RenderResult } from '@testing-library/react'

import { LiveExampleAdapter } from '../LiveExampleAdapter'

describe('Framework/LiveExampleAdapter', () => {
  let wrapper: RenderResult

  const fields = {
    title: 'Example Title',
    description: {
      json: {
        nodeType: 'document',
        data: {},
        content: [
          {
            nodeType: 'p',
            content: [
              {
                nodeType: 'text',
                value: 'Example description.',
                marks: [],
                data: {},
              },
            ],
          },
        ],
      },
    },
  }

  describe('with fields', () => {
    beforeEach(() => {
      wrapper = render(<LiveExampleAdapter fields={fields} />)
    })

    it('correctly applies the ID attribute', () => {
      expect(wrapper.getByTestId('content-panel')).toHaveAttribute(
        'id',
        'exampleTitle'
      )
    })

    it('renders the titles', () => {
      expect(wrapper.getByTestId('live-example-title')).toHaveTextContent(
        'Example Title'
      )
      expect(
        wrapper.getByTestId('live-example-adapter-title')
      ).toHaveTextContent('Example Title')
    })

    it('renders the description', () => {
      expect(wrapper.queryByText('Example description.')).toBeInTheDocument()
    })
  })
})
