import React from 'react'

import { ComponentWithClass } from '../../../../common/ComponentWithClass'
import { OnThisPageItem, OnThisPageItemProps } from './OnThisPageItem'
import { StyledHeading } from './partials/StyledHeading'
import { StyledItems } from './partials/StyledItems'
import { StyledOnThisPage } from './partials/StyledOnThisPage'
import { warnIfOverwriting } from '../../../helpers'
import { useActiveItem } from './hooks/useActiveItem'

export const OnThisPage: React.FC<ComponentWithClass> = ({
  children,
  className,
}) => {
  const { isActive, setActiveItemIndex } = useActiveItem(children)

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
              isActive: isActive(index),
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
