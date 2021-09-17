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

  describe('with image linked entry', () => {
    beforeEach(() => {
      const fields = {
        title: 'Example Title',
        description: {
          json: {
            nodeType: 'document',
            data: {},
            content: [
              {
                nodeType: 'embedded-asset-block',
                content: [],
                data: {
                  target: {
                    sys: {
                      id: '1eMpKozmtsh9SEbjdOB8QE',
                      type: 'Link',
                      linkType: 'Asset',
                    },
                  },
                },
              },
            ],
          },
          links: {
            assets: {
              block: [
                {
                  fileName: 'styles hyperlinks.svg',
                  title: 'styles hyperlinks',
                  description: '',
                  url: 'https://images.ctfassets.net/fq5pxympyusn/1eMpKozmtsh9SEbjdOB8QE/e6b8e162af13f756fc98dd58d2b86da9/styles_hyperlinks.svg',
                  width: 726,
                  height: 180,
                  sys: {
                    id: '1eMpKozmtsh9SEbjdOB8QE',
                  },
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

    it('renders the image', () => {
      expect(wrapper.getByTestId('content-block-img')).toBeInTheDocument()
    })
  })

  describe('with h2 content', () => {
    beforeEach(() => {
      const fields = {
        title: 'Example Title',
        description: {
          json: {
            nodeType: 'document',
            data: {},
            content: [
              {
                nodeType: 'heading-2',
                content: [
                  {
                    nodeType: 'text',
                    value: 'Overview',
                    marks: [],
                    data: {},
                  },
                ],
                data: {},
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

    it('renders the h2', () => {
      expect(wrapper.getByTestId('content-block-h2')).toHaveTextContent(
        'Overview'
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

  describe('with code block linked entry', () => {
    beforeEach(() => {
      const fields = {
        title: 'Example Title',
        description: {
          json: {
            nodeType: 'document',
            data: {},
            content: [
              {
                nodeType: 'embedded-entry-inline',
                content: [],
                data: {
                  target: {
                    sys: {
                      id: '47DP1urOOAdvdXaCGeheqZ',
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
              inline: [
                {
                  sys: {
                    id: '47DP1urOOAdvdXaCGeheqZ',
                  },
                  __typename: 'CodeBlock',
                  sourceCode: '// code',
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

    it('renders the code block', () => {
      expect(wrapper.getByTestId('codeblock')).toBeInTheDocument()
    })
  })

  describe('with swatch linked entry', () => {
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
                      id: '5GimEiW01oX9nKha7HZjTm',
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
                    id: '5GimEiW01oX9nKha7HZjTm',
                  },
                  __typename: 'Swatch',
                  colourCollection: {
                    items: [
                      {
                        name: 'White',
                        colour: '#FFFFFF',
                        isDark: false,
                      },
                    ],
                  },
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

    it('renders the swatch', () => {
      expect(wrapper.getByTestId('swatch')).toBeInTheDocument()
    })
  })
})
