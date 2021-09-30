import React from 'react'
import '@testing-library/jest-dom/extend-expect'
import { render, RenderResult } from '@testing-library/react'

import { CodeBlockAdapter } from '../CodeBlockAdapter'

describe('Docs/CodeBlockAdapter', () => {
  let wrapper: RenderResult
  let queryCommandSupported: (commandId: string) => boolean

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
    sourceCode:
      'function restructureNodes(nodes) { return nodes.map(node => {}) }',
  }

  describe('with fields', () => {
    beforeEach(() => {
      queryCommandSupported = jest.fn(() => true)
      document.queryCommandSupported = queryCommandSupported

      wrapper = render(<CodeBlockAdapter fields={fields} />)
    })

    it('renders the title', () => {
      expect(wrapper.queryByText('Example Title')).toBeInTheDocument()
    })

    it('renders the description', () => {
      expect(wrapper.queryByText('Example description.')).toBeInTheDocument()
    })
  })
})
