import React from 'react'
import { storiesOf } from '@storybook/react'

import { Badge, BADGE_VARIANT } from '.'

const stories = storiesOf('Docs/Badge', module)

stories.add('Default', () => <Badge>3.0.0</Badge>)

stories.add('Dark', () => <Badge variant={BADGE_VARIANT.DARK}>3.0.0</Badge>)
