import React, { useState } from 'react'

import { ComponentWithClass } from '../../../../common/ComponentWithClass'
import { OnThisPageItem, OnThisPageItemProps } from './OnThisPageItem'
import { StyledHeading } from './partials/StyledHeading'
import { StyledItems } from './partials/StyledItems'
import { StyledOnThisPage } from './partials/StyledOnThisPage'
import { warnIfOverwriting } from '../../../helpers'

export interface OnThisPageProps extends ComponentWithClass {
  children:
    | React.ReactElement<OnThisPageItemProps>
    | React.ReactElement<OnThisPageItemProps>[]
}

export const OnThisPage: React.FC<OnThisPageProps> = ({
  children,
  className,
}) => {
  const [activeItemIndex, setActiveItemIndex] = useState<number>(0)

  return (
    <StyledOnThisPage className={className}>
      <StyledHeading>On this page</StyledHeading>
      <StyledItems>
        {React.Children.map(
          children,
          (child: React.ReactElement<OnThisPageItemProps>, index: number) => {
            warnIfOverwriting(child.props, 'isActive', OnThisPageItem.name)

            return React.cloneElement(child, {
              ...child.props,
              isActive: index === activeItemIndex,
              onClick: (e: React.MouseEvent<HTMLElement>) => {
                setActiveItemIndex(index)
                child.props.onClick(e)
              },
            })
          }
        )}
      </StyledItems>
    </StyledOnThisPage>
  )
}

OnThisPage.displayName = 'OnThisPage'
