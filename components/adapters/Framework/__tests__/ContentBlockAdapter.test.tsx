import React from 'react'
import '@testing-library/jest-dom/extend-expect'
import { render, RenderResult } from '@testing-library/react'

import { ContentBlockAdapter } from '../ContentBlockAdapter'

describe('Framework/ContentBlockAdapter', () => {
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
    image: {
      title: 'Example Image',
      url: 'https://www.google.com',
    },
  }

  describe('with fields', () => {
    beforeEach(() => {
      wrapper = render(<ContentBlockAdapter fields={fields} />)
    })

    it('renders the title', () => {
      expect(wrapper.queryByText('Example Title')).toBeInTheDocument()
    })

    it('renders the description', () => {
      expect(wrapper.queryByText('Example description.')).toBeInTheDocument()
    })

    it('outputs the image', () => {
      expect(wrapper.queryByTestId('content-block-image')).toBeInTheDocument()
      expect(wrapper.getByTestId('content-block-image')).toHaveAttribute(
        'src',
        'https://www.google.com'
      )
      expect(wrapper.getByTestId('content-block-image')).toHaveAttribute(
        'alt',
        'Example Image'
      )
    })
  })
})
