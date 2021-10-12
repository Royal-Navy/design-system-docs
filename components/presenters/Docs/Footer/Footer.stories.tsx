import React from 'react'
import { IconBookmark } from '@royalnavy/icon-library'
import Link from 'next/link'
import { storiesOf } from '@storybook/react'

import { Footer } from '.'
import { FooterExternalLink } from './FooterExternalLink'

const stories = storiesOf('Docs/Footer', module)

stories.add('Default', () => (
  <Footer
    description="The MOD.UK Design System provides guidance and tools for building
      high–quality Services within the MOD.UK. This project is open source
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
))
