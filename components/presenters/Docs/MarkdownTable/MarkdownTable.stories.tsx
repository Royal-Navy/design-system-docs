import React from 'react'
import { storiesOf } from '@storybook/react'

import { MarkdownTable } from '.'

const stories = storiesOf('Docs/MarkdownTable', module)

const markdown =
  '\n| Size | Breakpoint |\n| ---------- | ---------- |\n| root | 0 |\n| xs |\n' +
  '    576px |\n| s | 768px |\n'

stories.add('Default', () => <MarkdownTable>{markdown}</MarkdownTable>)
