import React from 'react'
import { action } from '@storybook/addon-actions'
import { storiesOf } from '@storybook/react'

import { OnThisPage } from './index'
import { OnThisPageItem } from './OnThisPageItem'

const stories = storiesOf('Docs/OnThisPage', module)

stories.add('Default', () => (
  <OnThisPage>
    <OnThisPageItem onClick={action('onClick')}>Overview</OnThisPageItem>
    <OnThisPageItem onClick={action('onClick')}>Usage</OnThisPageItem>
    <OnThisPageItem onClick={action('onClick')}>Anatomy</OnThisPageItem>
    <OnThisPageItem onClick={action('onClick')}>
      Hierarchy &amp; placement
    </OnThisPageItem>
    <OnThisPageItem onClick={action('onClick')}>
      Sizing &amp; spacing
    </OnThisPageItem>
  </OnThisPage>
))
