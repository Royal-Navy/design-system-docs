import React from 'react'
import { storiesOf } from '@storybook/react'
import { IconLightbulbOutline } from '@royalnavy/icon-library'

import { ContentBanner } from '.'

const stories = storiesOf('Docs/ContentBanner', module)

stories.add('Default', () => (
  <ContentBanner
    icon={<IconLightbulbOutline />}
    title="The documentation on this page is considered legacy."
  >
    We will be updating this content to our new principle-based format in the
    near future.
  </ContentBanner>
))
