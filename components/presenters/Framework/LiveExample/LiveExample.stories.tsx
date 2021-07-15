import React from 'react'
import { storiesOf } from '@storybook/react'
import { LiveExample } from './LiveExample'

const stories = storiesOf('LiveExample', module)

stories.add('Default', () => (
  <LiveExample>
    <div>Example</div>
  </LiveExample>
))
