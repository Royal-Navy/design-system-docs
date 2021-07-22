import React from 'react'
import { storiesOf } from '@storybook/react'
import Link from 'next/link'

import {
  Masthead,
  MastheadMenu,
  MastheadMenuItem,
  MastheadSubMenu,
  MastheadSubMenuItem,
} from '.'

const stories = storiesOf('Docs/Masthead', module)

stories.add('Default', () => (
  <Masthead version="3.0.0" onToggle={() => null}>
    <MastheadMenu>
      <MastheadMenuItem link={<Link href="#guidance">Guidance</Link>} />
      <MastheadMenuItem link={<Link href="#principles">Principles</Link>} />
      <MastheadMenuItem link={<Link href="#reference">Reference</Link>}>
        <MastheadSubMenu>
          <MastheadSubMenuItem
            link={<Link href="#design-tokens">Design Tokens</Link>}
          />
        </MastheadSubMenu>
      </MastheadMenuItem>
      <MastheadMenuItem link={<Link href="#resources">Resources</Link>} />
      <MastheadMenuItem link={<Link href="#help">Help</Link>} />
      <MastheadMenuItem link={<Link href="#blog">Blog</Link>} />
    </MastheadMenu>
  </Masthead>
))
