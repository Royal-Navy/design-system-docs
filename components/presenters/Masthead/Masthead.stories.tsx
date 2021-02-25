import React from 'react'
import { storiesOf } from '@storybook/react'

import { Masthead } from '.'

const stories = storiesOf('Masthead', module)

stories.add('Default', () => (
  <Masthead title="Royal Navy Design System" version="2.36.3" />
))
