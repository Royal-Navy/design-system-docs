import React from 'react'
import styled from 'styled-components'
import Link from 'next/link'
import { GetStaticProps } from 'next'
import { selectors } from '@royalnavy/design-tokens'
import { IconFileDownload } from '@royalnavy/icon-library'

import { Footer } from '../components/presenters/Docs/Footer'
import { FooterExternalLink } from '../components/presenters/Docs/Footer/FooterExternalLink'
import { PageBanner } from '../components/presenters/Docs/PageBanner'
import {
  Masthead,
  MastheadMenu,
  MastheadMenuItem,
  MastheadSubMenu,
  MastheadSubMenuItem,
} from '../components/presenters/Docs/Masthead'
import { Badge, BADGE_VARIANT } from '../components/presenters/Docs/Badge'
import { LayoutHomepage } from '../components/layouts/Homepage'
import { contentful } from '../services/contentful'
import HOMEPAGE_BY_ID_QUERY from '../graphql/queries/HomepageByID.graphql'
import NAVIGATION_BY_ID_QUERY from '../graphql/queries/NavigationByID.graphql'
import {
  Navigation as NavigationType,
  Homepage as HomepageType,
} from '../graphql'
import Storybook from '../public/Storybook.svg'
import GitHub from '../public/GitHub.svg'
import { useDesignSystemVersion } from '../hooks/useDesignSystemVersion'
import { Hero } from '../components/presenters/Docs/Hero'
import { Section } from '../components/presenters/Docs/Section'
import {
  HeroCard,
  HeroCardChild,
  HERO_CARD_VARIANT,
} from '../components/presenters/Docs/HeroCard'
import { Button, BUTTON_VARIANT } from '../components/presenters/Docs/Button'
import { Card } from '../components/presenters/Docs/Card'

export interface HomeProps {
  desktopNavigation: NavigationType
  pageData: HomepageType
}

/**
 * Fetch homepage data from Contentful
 *
 */
async function fetchPageData(): Promise<HomepageType> {
  const { homepage } = await contentful(HOMEPAGE_BY_ID_QUERY, {
    id: '3HN42lUPyvUSw9nDTUryew',
  })

  return homepage
}

/**
 * Fetch desktop navigation from Contentful
 *
 */
async function fetchDesktopNavigation(): Promise<NavigationType> {
  const { navigation } = await contentful(NAVIGATION_BY_ID_QUERY, {
    id: '3dJ4ZZB9rMxXS4oe2iKuEY',
  })

  return navigation
}

/**
 * Fetch data from Contentful for static site generation (SSG)
 *
 */
export const getStaticProps: GetStaticProps = async (context) => {
  const desktopNavigation = await fetchDesktopNavigation()
  const pageData = await fetchPageData()

  return {
    props: {
      desktopNavigation,
      pageData,
    },
  }
}

const { color, mq, spacing } = selectors

const StyledDollar = styled.span`
  font-weight: 600;
  color: ${color('neutral', '300')};
`

const StyledHeroCards = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: column;
  width: 100%;
  margin-top: ${spacing('12')};

  > article {
    width: 100%;
  }

  ${mq({ gte: 'm' })`
    flex-direction: row;
  `}

  ${mq({ gte: 'l' })`
    > article {
      width: 49%;
    }
  `}
`

const StyledCards = styled.div`
  display: flex;
  flex-direction: column;

  article {
    margin: ${spacing('4')} ${spacing('8')};
  }

  ${mq({ gte: 's' })`
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-around;
    margin: ${spacing('8')};

    > article {
      width: calc(50% - ${spacing('6')});
      margin: ${spacing('3')} 0;
    }
  `}

  ${mq({ gte: 'l' })`
    flex-wrap: unset;

    > article {
      width: calc(25% - ${spacing('8')});
    }
  `}
`

const StyledButtonGroup = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: ${spacing('8')};

  > a:first-of-type {
    margin-right: ${spacing('8')};
  }
`

export const Home: React.FC<HomeProps> = ({ desktopNavigation, pageData }) => {
  const { version } = useDesignSystemVersion()
  const {
    heroHeading,
    heroSubHeading,
    heroButtons,
    section1Heading,
    section1SubHeading,
    section2Heading,
    section2SubHeading,
    section2Buttons,
    section3Heading,
    section3SubHeading,
    section3CardsCollection,
    section4Heading,
    section4SubHeading,
    section4Buttons,
    section5Heading,
    section5SubHeading,
    section5Buttons,
  } = pageData

  const pageBanner = (
    <PageBanner>
      Version <Badge variant={BADGE_VARIANT.DARK}>{version}</Badge> has been
      released!&nbsp;
      <a href="/upgrade-guide">
        Read the <strong>upgrade guide</strong>
      </a>
    </PageBanner>
  )

  const masthead = (
    <Masthead version={version}>
      <MastheadMenu>
        {desktopNavigation.childrenCollection.items.map(
          ({
            title: parentTitle,
            path: parentPath,
            externalUri: parentExternalUri,
            page: parentPage,
            childrenCollection: children,
          }) => {
            const parentHref = parentPage
              ? parentPath || '#'
              : parentExternalUri || '#'

            return (
              <MastheadMenuItem
                key={parentPath}
                link={<Link href={parentHref}>{parentTitle}</Link>}
              >
                <MastheadSubMenu>
                  {children.items.map(
                    ({
                      title: childTitle,
                      path: childPath,
                      externalUri: childExternalUri,
                      page: childPage,
                    }) => {
                      const childHref = childPage
                        ? childPath || '#'
                        : childExternalUri || '#'

                      return (
                        <MastheadSubMenuItem
                          key={childPath}
                          link={<Link href={childHref}>{childTitle}</Link>}
                        />
                      )
                    }
                  )}
                </MastheadSubMenu>
              </MastheadMenuItem>
            )
          }
        )}
      </MastheadMenu>
    </Masthead>
  )

  const footer = (
    <Footer
      description="The Royal Navy Design System provides guidance and tools for building
      high–quality Services within the Royal Navy. This project is open source
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
          link={<Link href="https://storybook.royalnavy.io">Storybook</Link>}
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

  return (
    <LayoutHomepage
      footer={footer}
      masthead={masthead}
      pageBanner={pageBanner}
      title="Home"
    >
      <Hero
        version={version}
        title={heroHeading}
        description={heroSubHeading}
        cta1={
          <Button href={heroButtons[0].href} variant={BUTTON_VARIANT.PRIMARY}>
            {heroButtons[0].title}
          </Button>
        }
        cta2={
          <Button href={heroButtons[1].href} variant={BUTTON_VARIANT.TERTIARY}>
            {heroButtons[1].title}
          </Button>
        }
      />
      <Section sectionIndex="1" title={section1Heading}>
        <p>{section1SubHeading}</p>
        <StyledHeroCards>
          <HeroCard
            variant={HERO_CARD_VARIANT.PRIMARY}
            title="Designers"
            description="Designers can use our static or dynamic Axure libraries to quickly prototype, test and validate ideas with users."
            cta={
              <Button
                variant={BUTTON_VARIANT.SECONDARY}
                href="#designers-guide"
              >
                Read the full guide
              </Button>
            }
          >
            <HeroCardChild>
              Download static library&nbsp;&nbsp;
              <IconFileDownload />
            </HeroCardChild>
            <HeroCardChild>
              Download dynamic library&nbsp;&nbsp;
              <IconFileDownload />
            </HeroCardChild>
          </HeroCard>
          <HeroCard
            variant={HERO_CARD_VARIANT.SECONDARY}
            title="Developers"
            description="Developers can install our React component library via NPM, or by grabbing the source from GitHub."
            cta={
              <Button
                variant={BUTTON_VARIANT.SECONDARY}
                href="#developers-guide"
              >
                Read the full guide
              </Button>
            }
          >
            <HeroCardChild>
              <StyledDollar>$</StyledDollar>
              &nbsp;npm&nbsp;install&nbsp;@royalnavy/react-component-library
            </HeroCardChild>
          </HeroCard>
        </StyledHeroCards>
      </Section>
      <Section sectionIndex="2" title={section2Heading}>
        <p>{section2SubHeading}</p>
        {section2Buttons.map(({ href, title }) => {
          return <Button href={href}>{title}</Button>
        })}
      </Section>
      <Section sectionIndex="3" title={section3Heading}>
        <p>{section3SubHeading}</p>
        <StyledCards>
          {section3CardsCollection?.items.map(
            ({ title, titleColor, buttonHref, buttonTitle, description }) => {
              return (
                <Card
                  title={title}
                  titleColor={titleColor}
                  href={buttonHref}
                  anchorText={buttonTitle}
                >
                  {description}
                </Card>
              )
            }
          )}
        </StyledCards>
      </Section>
      <Section sectionIndex="4" title={section4Heading}>
        <p>{section4SubHeading}</p>
        {section4Buttons.map(({ href, title }) => {
          return <Button href={href}>{title}</Button>
        })}
      </Section>
      <Section sectionIndex="5" title={section5Heading}>
        <p>{section5SubHeading}</p>
        <StyledButtonGroup>
          {section5Buttons.map(({ href, title }) => {
            return <Button href={href}>{title}</Button>
          })}
        </StyledButtonGroup>
      </Section>
    </LayoutHomepage>
  )
}

export default Home
