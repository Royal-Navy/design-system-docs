import React from 'react'

import { ComponentWithClass } from '../../../../common/ComponentWithClass'
import { StyledLeftCol } from './partials/StyledLeftCol'

export const LeftCol: React.FC<ComponentWithClass> = ({
  className,
  children,
}) => {
  return <StyledLeftCol className={className}>{children}</StyledLeftCol>
}
