import React from 'react'
import { get, kebabCase } from 'lodash'
import { LinkProps } from 'next/link'

import { ComponentWithClass } from '../../../../common/ComponentWithClass'
import { FooterExternalLinkProps } from './FooterExternalLink'
import { StyledCopyright } from './partials/StyledCopyright'
import { StyledDescription } from './partials/StyledDescription'
import { StyledFooter } from './partials/StyledFooter'
import { StyledFooterLogo } from './partials/StyledFooterLogo'
import { StyledLinkList } from './partials/StyledLinkList'
import { StyledLogoClip } from './partials/StyledLogoClip'
import { StyledLogo } from './partials/StyledLogo'
import { StyledSubFooter } from './partials/StyledSubFooter'

type SiteLinksType =
  | React.ReactElement<React.PropsWithChildren<LinkProps>>
  | React.ReactElement<React.PropsWithChildren<LinkProps>>[]

type ExternalLinksType =
  | React.ReactElement<FooterExternalLinkProps>
  | React.ReactElement<FooterExternalLinkProps>[]

export interface FooterProps extends ComponentWithClass {
  description: string
  externalLinks: ExternalLinksType
  license: string
  siteLinks: SiteLinksType
}

function mapLinks(
  links: ExternalLinksType | SiteLinksType,
  keyPrefix: string,
  childrenPath: string
) {
  return React.Children.map(links, (link) => {
    const key = `${keyPrefix}-${kebabCase(get(link, childrenPath) as string)}`

    return <li key={key}>{link}</li>
  })
}

export const Footer: React.FC<FooterProps> = ({
  description,
  externalLinks,
  license,
  siteLinks,
}) => (
  <>
    <StyledFooter>
      <StyledFooterLogo>
        <div>
          <StyledLogo width={300} height={36} />
          <StyledDescription>{description}</StyledDescription>
          <StyledLinkList>
            {mapLinks(
              externalLinks,
              'external-link',
              'props.link.props.children'
            )}
          </StyledLinkList>
        </div>
      </StyledFooterLogo>
      <StyledSubFooter>
        <div>
          <StyledLinkList data-testid="footer-site-links">
            {mapLinks(siteLinks, 'site-link', 'props.children')}
          </StyledLinkList>
          <StyledCopyright>
            <p>{license}</p>
            <span>&copy; Crown copyright</span>
          </StyledCopyright>
        </div>
      </StyledSubFooter>
      <StyledLogoClip />
    </StyledFooter>
  </>
)

Footer.displayName = 'Footer'
