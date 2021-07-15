import React from 'react'
import { storiesOf } from '@storybook/react'

import { Hero } from '.'

const stories = storiesOf('Hero', module)

stories.add('Default', () => (
  <Hero
    id="home"
    title="Compound Timeline"
    description="A collection of composable and presentation agnostic Compound Components, Hooks and a Context Provider, to help aid in the creation of scheduling based user-interfaces."
  />
))
