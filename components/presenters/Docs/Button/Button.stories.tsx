import React from 'react'
import { storiesOf } from '@storybook/react'

import { Button, BUTTON_VARIANT } from '.'

const stories = storiesOf('Docs/Button', module)

stories.add('Default', () => <Button>Start Building</Button>)

stories.add('Primary', () => (
  <Button variant={BUTTON_VARIANT.PRIMARY}>Start Building</Button>
))

stories.add('Secondary', () => (
  <Button variant={BUTTON_VARIANT.SECONDARY}>Read the full guide</Button>
))

stories.add('Tertiary', () => (
  <Button variant={BUTTON_VARIANT.TERTIARY}>Visit Storybook</Button>
))

stories.add('Quaternary', () => (
  <Button variant={BUTTON_VARIANT.QUATERNARY}>Browse patterns</Button>
))
