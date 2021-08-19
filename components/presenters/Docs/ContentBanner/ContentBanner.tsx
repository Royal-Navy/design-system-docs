import React from 'react'

import { ComponentWithClass } from '../../../../common/ComponentWithClass'
import { StyledContentBanner } from './partials/StyledContentBanner'
import { StyledTitle } from './partials/StyledTitle'
import { StyledDescription } from './partials/StyledDescription'

export interface ContentBannerProps extends ComponentWithClass {
  icon?: React.ReactElement
  title?: string
}

export const ContentBanner: React.FC<ContentBannerProps> = ({
  icon,
  title,
  children,
}) => {
  return (
    <StyledContentBanner data-testid="content-banner">
      {icon && <div>{icon}</div>}
      <div>
        {title && <StyledTitle>{title}</StyledTitle>}
        <StyledDescription>{children}</StyledDescription>
      </div>
    </StyledContentBanner>
  )
}

ContentBanner.displayName = 'ContentBanner'
