import React from 'react'

import { ComponentWithClass } from '../../../../common/ComponentWithClass'
import { StyledContentPanel } from './partials/StyledContentPanel'

interface ContentPanelProps extends ComponentWithClass {
  id: string
}

export const ContentPanel: React.FC<ContentPanelProps> = ({
  className,
  children,
  id,
  ...rest
}) => {
  return (
    <StyledContentPanel
      className={className}
      id={id}
      {...rest}
      data-testid="content-panel"
    >
      {children}
    </StyledContentPanel>
  )
}
