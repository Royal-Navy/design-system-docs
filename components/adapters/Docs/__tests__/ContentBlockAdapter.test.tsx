import React from 'react'
import '@testing-library/jest-dom/extend-expect'
import { render, RenderResult } from '@testing-library/react'

import { ContentBlockAdapter } from '../ContentBlockAdapter'

describe('Docs/ContentBlockAdapter', () => {
  let wrapper: RenderResult

  describe('with fields', () => {
    beforeEach(() => {
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

  describe('with markdown table linked entry', () => {
    beforeEach(() => {
      const fields = {
        title: 'Example Title',
        description: {
          json: {
            nodeType: 'document',
            data: {},
            content: [
              {
                nodeType: 'embedded-entry-block',
                content: [],
                data: {
                  target: {
                    sys: {
                      id: 'E0tY9P6a29Q7MyL5Ggw4m',
                      type: 'Link',
                      linkType: 'Entry',
                    },
                  },
                },
              },
            ],
          },
          links: {
            entries: {
              block: [
                {
                  sys: {
                    id: 'E0tY9P6a29Q7MyL5Ggw4m',
                  },
                  __typename: 'MarkdownTable',
                  markdown:
                    '\n| column1     | column2     |\n| ---------- | ---------- |\n| value1       | value2       |\n',
                },
              ],
            },
          },
        },
        image: {
          title: 'Example Image',
          url: 'https://www.google.com',
        },
      }

      wrapper = render(<ContentBlockAdapter fields={fields} />)
    })

    it('renders the table', () => {
      expect(wrapper.getByTestId('markdown-table')).toBeInTheDocument()
    })
  })
})
