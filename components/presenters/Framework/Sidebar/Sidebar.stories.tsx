import React from 'react'
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'

import { Sidebar, SidebarMenu, SidebarMenuItem } from '.'

const stories = storiesOf('Sidebar', module)

stories.add('Default', () => (
  <Sidebar title="Compound Timeline" onToggle={action('onToggle')}>
    <SidebarMenu title="Introduction">
      <SidebarMenuItem href="#home" title="Home" />
    </SidebarMenu>
  </Sidebar>
))
