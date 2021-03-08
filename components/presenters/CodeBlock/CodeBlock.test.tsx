import React from 'react'
import '@testing-library/jest-dom/extend-expect'
import { render, RenderResult } from '@testing-library/react'

import { CodeBlock } from '.'

describe('CodeBlock', () => {
  let wrapper: RenderResult

  describe('with required props', () => {
    beforeEach(() => {
      wrapper = render(
        <CodeBlock filename="Example Filename" language="js">
          {`function helloWorld () { return 'Hello, World!' }`}
        </CodeBlock>
      )
    })

    it('render the filename', () => {
      expect(wrapper.getByTestId('codeblock-filename')).toHaveTextContent(
        'Example Filename'
      )
    })
  })
})
