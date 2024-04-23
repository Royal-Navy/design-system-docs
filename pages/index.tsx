import React from 'react'
import Link from 'next/link'

import { Footer } from '../components/presenters/Docs/Footer'
import { FooterExternalLink } from '../components/presenters/Docs/Footer/FooterExternalLink'
import { Masthead } from '../components/presenters/Docs/Masthead'
import { LayoutHomepage } from '../components/layouts/Homepage'
import Storybook from '../public/Storybook.svg'
import GitHub from '../public/GitHub.svg'
import { useDesignSystemVersion } from '../hooks/useDesignSystemVersion'
import { Section } from '../components/presenters/Docs/Section'

export const Home: React.FC = () => {
  const { version = '0.1.0' } = useDesignSystemVersion()

  const masthead = <Masthead version={version} />

  const footer = (
    <Footer
      description="The Royal Navy Design System provides guidance and tools for building
      high–quality Services within the UK Ministry of Defence. This project is open source
      and its source code is available on GitHub."
      externalLinks={[
        <FooterExternalLink
          icon={<GitHub />}
          link={
            <Link href="https://github.com/Royal-Navy/design-system">
              GitHub
            </Link>
          }
        />,
        <FooterExternalLink
          icon={<Storybook />}
          link={
            <Link href="https://storybook.design-system.navy.digital.mod.uk/">
              Storybook
            </Link>
          }
        />,
      ]}
      license="All content is available under the Apache 2.0 licence, except where
      otherwise stated."
      siteLinks={[
        <Link href="/accessibility">Accessibility</Link>,
        <Link href="/privacy-policy">Privacy Policy</Link>,
        <Link href="/contact">Contact</Link>,
      ]}
    />
  )

  return (
    <LayoutHomepage footer={footer} masthead={masthead} title="Home">
      <Section title="301 Moved Permanently">
        <p>
          We&apos;ve migrated our documentation to{' '}
          <a href="https://storybook.design-system.navy.digital.mod.uk/?path=/docs/getting-started--docs">
            Storybook
          </a>
        </p>
      </Section>
    </LayoutHomepage>
  )
}

export default Home
