import React from 'react'
import { storiesOf } from '@storybook/react'

import { CodeHighlighter } from '.'

const stories = storiesOf('Docs/CodeHighlighter', module)

stories.add('Default', () => (
  <CodeHighlighter
    language="javascript"
    source="function restructureNodes(nodes) { return nodes.map(node => {}) }"
  >
    <h1>This is some example JSX</h1>
  </CodeHighlighter>
))
