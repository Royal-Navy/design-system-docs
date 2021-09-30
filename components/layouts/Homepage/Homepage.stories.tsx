import React from 'react'
import { IconBookmark } from '@royalnavy/icon-library'
import Link from 'next/link'
import { storiesOf } from '@storybook/react'

import { Badge, BADGE_VARIANT } from '../../presenters/Docs/Badge'
import { LayoutHomepage } from './Homepage'
import { Footer } from '../../presenters/Docs/Footer'
import { FooterExternalLink } from '../../presenters/Docs/Footer/FooterExternalLink'
import {
  Masthead,
  MastheadMenu,
  MastheadMenuItem,
  MastheadSubMenu,
  MastheadSubMenuItem,
} from '../../presenters/Docs/Masthead'
import { PageBanner } from '../../presenters/Docs/PageBanner'

const stories = storiesOf('Docs/Layouts/Homepage', module)

stories.add('Default', () => {
  const footer = (
    <Footer
      description="The Royal Navy Design System provides guidance and tools for building
      high–quality Services within the Royal Navy. This project is open source
      and its source code is available on GitHub."
      externalLinks={[
        <FooterExternalLink
          icon={<IconBookmark />}
          link={<Link href="#github">GitHub</Link>}
        />,
        <FooterExternalLink
          icon={<IconBookmark />}
          link={<Link href="#storybook">Storybook</Link>}
        />,
      ]}
      license="All content is available under the Apache 2.0 licence, except where
      otherwise stated."
      siteLinks={[
        <Link href="#accessibility">Accessibility</Link>,
        <Link href="#privacy-policy">Privacy Policy</Link>,
        <Link href="#contact">Contact</Link>,
      ]}
    />
  )

  const masthead = (
    <Masthead version="3.0.0">
      <MastheadMenu>
        <MastheadMenuItem link={<Link href="#guidance">Guidance</Link>} />
        <MastheadMenuItem link={<Link href="#principles">Principles</Link>} />
        <MastheadMenuItem link={<Link href="#reference">Reference</Link>}>
          <MastheadSubMenu>
            <MastheadSubMenuItem
              link={<Link href="#design-tokens">Design Tokens</Link>}
            />
            <MastheadSubMenuItem
              link={<Link href="#components">Components</Link>}
            />
            <MastheadSubMenuItem
              link={<Link href="#patterns">Patterns</Link>}
            />
            <MastheadSubMenuItem
              link={<Link href="#frameworks">Frameworks</Link>}
            />
          </MastheadSubMenu>
        </MastheadMenuItem>
        <MastheadMenuItem link={<Link href="#resources">Resources</Link>} />
        <MastheadMenuItem link={<Link href="#help">Help</Link>} />
        <MastheadMenuItem link={<Link href="#blog">Blog</Link>} />
      </MastheadMenu>
    </Masthead>
  )

  const pageBanner = (
    <PageBanner>
      Version <Badge variant={BADGE_VARIANT.DARK}>3.0.0</Badge> has been
      released!&nbsp;
      <a href="#">
        Read the <strong>upgrade guide</strong>
      </a>
    </PageBanner>
  )

  return (
    <LayoutHomepage
      footer={footer}
      masthead={masthead}
      pageBanner={pageBanner}
      title="Home"
    >
      Content
    </LayoutHomepage>
  )
})
