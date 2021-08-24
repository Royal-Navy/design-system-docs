import React from 'react'
import { storiesOf } from '@storybook/react'

import { Card } from '.'

const stories = storiesOf('Docs/Card', module)

stories.add('Default', () => (
  <Card
    title="Design Tokens"
    titleColor="#C676FF"
    href="#browse-patterns"
    anchorText="Browse patterns"
  >
    Design tokens describe our design language with descrete variables
  </Card>
))
