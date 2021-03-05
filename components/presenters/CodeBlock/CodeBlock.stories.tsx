import React from 'react'
import { storiesOf } from '@storybook/react'

import { CodeBlock } from '.'

const stories = storiesOf('CodeBlock', module)

stories.add('Default', () => (
  <CodeBlock filename="Example.js">
    {`function helloWorld() { return 'Hello, World!' }`}
  </CodeBlock>
))
