import React from 'react'
import { LinkProps } from 'next/link'

import { StyledExternalLink } from './partials/StyledExternalLink'

export interface FooterExternalLinkProps {
  icon: React.ReactElement
  link: React.ReactElement<React.PropsWithChildren<LinkProps>>
}

export const FooterExternalLink: React.FC<FooterExternalLinkProps> = ({
  icon,
  link,
}) => {
  return (
    <StyledExternalLink>
      {icon}
      {link}
    </StyledExternalLink>
  )
}

FooterExternalLink.displayName = 'FooterExternalLink'
