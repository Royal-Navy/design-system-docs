import React from 'react'
import { action } from '@storybook/addon-actions'
import {
  Breadcrumbs,
  BreadcrumbsItem,
} from '@royalnavy/react-component-library'
import { IconBookmark, IconLightbulbOutline } from '@royalnavy/icon-library'
import Link from 'next/link'
import { storiesOf } from '@storybook/react'

import { Badge, BADGE_VARIANT } from '../../presenters/Docs/Badge'
import { LayoutComponent } from './Component'
import { ContentBanner } from '../../presenters/Docs/ContentBanner'
import { Footer } from '../../presenters/Docs/Footer'
import { FooterExternalLink } from '../../presenters/Docs/Footer/FooterExternalLink'
import {
  Masthead,
  MastheadMenu,
  MastheadMenuItem,
  MastheadSubMenu,
  MastheadSubMenuItem,
} from '../../presenters/Docs/Masthead'
import { OnThisPageItem } from '../../presenters/Docs/OnThisPage/OnThisPageItem'
import { SidebarFilter } from '../../presenters/Docs/Sidebar/SidebarFilter'
import {
  Sidebar,
  SidebarMenu,
  SidebarMenuItem,
  SidebarOverview,
  SidebarOverviewMenuItem,
} from '../../presenters/Docs/Sidebar'
import { OnThisPage } from '../../presenters/Docs/OnThisPage'
import { PageBanner } from '../../presenters/Docs/PageBanner'

const stories = storiesOf('Docs/Layouts/Component', module)

stories.add('Default', () => {
  const breadcrumbs = (
    <Breadcrumbs>
      <BreadcrumbsItem link={<Link href="#home">Home</Link>} />
      <BreadcrumbsItem link={<Link href="#components">Components</Link>} />
      <BreadcrumbsItem link={<Link href="#sidebar">Sidebar</Link>} />
    </Breadcrumbs>
  )

  const contentBanner = (
    <ContentBanner
      icon={<IconLightbulbOutline />}
      title="The documentation on this page is considered legacy."
    >
      We will be updating this content to our new principle-based format in the
      near future.
    </ContentBanner>
  )

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

  const onThisPage = (
    <OnThisPage>
      <OnThisPageItem onClick={action('onClick')}>Overview</OnThisPageItem>
      <OnThisPageItem onClick={action('onClick')}>Usage</OnThisPageItem>
      <OnThisPageItem onClick={action('onClick')}>Anatomy</OnThisPageItem>
      <OnThisPageItem onClick={action('onClick')}>
        Hierarchy & placement
      </OnThisPageItem>
      <OnThisPageItem onClick={action('onClick')}>
        Sizing & spacing
      </OnThisPageItem>
    </OnThisPage>
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

  const sidebar = (
    <Sidebar title="Components">
      <SidebarOverview>
        <SidebarOverviewMenuItem
          icon={<IconBookmark />}
          link={<Link href="#storybook">Storybook</Link>}
        />
        <SidebarOverviewMenuItem
          icon={<IconBookmark />}
          link={<Link href="#axure-prototype-kit">Axure Prototype Kit</Link>}
        />
      </SidebarOverview>
      <SidebarFilter
        onChange={action('filter onChange')}
        onClear={action('filter onClear')}
      />
      <SidebarMenu>
        <SidebarMenuItem link={<Link href="#alert">Alert</Link>} />
        <SidebarMenuItem link={<Link href="#avatar">Avatar</Link>} />
        <SidebarMenuItem link={<Link href="#badge">Badge</Link>} />
        <SidebarMenuItem link={<Link href="#breadcrumbs">Breadcrumbs</Link>} />
        <SidebarMenuItem link={<Link href="#button">Button</Link>} />
      </SidebarMenu>
      <SidebarMenu title="Banners">
        <SidebarMenuItem
          link={<Link href="#dismissible-banner">Dismissible Banner</Link>}
        />
        <SidebarMenuItem
          link={<Link href="#phase-banner">Phase Banner</Link>}
        />
      </SidebarMenu>
      <SidebarMenu title="Cards">
        <SidebarMenuItem link={<Link href="#content">Content</Link>} />
        <SidebarMenuItem link={<Link href="#frame">Frame</Link>} />
      </SidebarMenu>
      <SidebarMenu title="Forms">
        <SidebarMenuItem link={<Link href="#checkbox">Checkbox</Link>} />
        <SidebarMenuItem link={<Link href="#date-picker">Date Picker</Link>} />
        <SidebarMenuItem
          link={<Link href="#number-input">Number Input</Link>}
        />
        <SidebarMenuItem link={<Link href="#radio">Radio</Link>} />
        <SidebarMenuItem link={<Link href="#select">Select</Link>} />
        <SidebarMenuItem link={<Link href="#text-input">Text Input</Link>} />
        <SidebarMenuItem link={<Link href="#text-area">Text Area</Link>} />
      </SidebarMenu>
    </Sidebar>
  )

  return (
    <LayoutComponent
      breadcrumbs={breadcrumbs}
      contentBanner={contentBanner}
      footer={footer}
      masthead={masthead}
      onThisPage={onThisPage}
      pageBanner={pageBanner}
      sidebar={sidebar}
      title="Sidebar"
    >
      Content
    </LayoutComponent>
  )
})
