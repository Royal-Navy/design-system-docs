import React from 'react'
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'

import { Masthead } from '.'

const stories = storiesOf('Framework/Masthead', module)

stories.add('Default', () => (
  <Masthead
    title="Royal Navy Design System"
    version="2.36.3"
    onToggle={action('onToggle')}
  />
))
