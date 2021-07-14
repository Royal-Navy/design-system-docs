import React from 'react'
import { storiesOf } from '@storybook/react'

import { PageBanner } from '.'
import { Badge, BADGE_VARIANT } from '../Badge'

const stories = storiesOf('PageBanner', module)

stories.add('Default', () => (
  <PageBanner>
    Version <Badge variant={BADGE_VARIANT.DARK}>3.0.0</Badge> has been
    released!&nbsp;
    <a href="#">
      Read the <strong>upgrade guide</strong>
    </a>
  </PageBanner>
))
