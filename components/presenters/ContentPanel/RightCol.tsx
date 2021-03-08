import React from 'react'

import { ComponentWithClass } from '../../../common/ComponentWithClass'
import { StyledRightCol } from './partials/StyledRightCol'

export const RightCol: React.FC<ComponentWithClass> = ({
  className,
  children,
}) => {
  return <StyledRightCol className={className}>{children}</StyledRightCol>
}
