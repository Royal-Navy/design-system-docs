import React from 'react'
import '@testing-library/jest-dom/extend-expect'
import { render, RenderResult } from '@testing-library/react'

import { CodeHighlighter } from '.'

describe('CodeHighlighter', () => {
  let wrapper: RenderResult
  let queryCommandSupported: (commandId: string) => boolean

  describe('with required props', () => {
    beforeEach(() => {
      queryCommandSupported = jest.fn(() => true)
      document.queryCommandSupported = queryCommandSupported

      wrapper = render(
        <CodeHighlighter
          language="javascript"
          source="function restructureNodes(nodes) { return nodes.map(node => {}) }"
        >
          <h1>This is some example JSX</h1>
        </CodeHighlighter>
      )
    })

    it('output the example JSX', () => {
      expect(wrapper.getByTestId('code-highlighter-example')).toHaveTextContent(
        'This is some example JSX'
      )
    })

    it('should check that browser copy functionality is supported', () => {
      expect(queryCommandSupported).toHaveBeenCalledWith('copy')
    })
  })
})
