import React from 'react'
import {
  Badge,
  BADGE_COLOR,
  BADGE_COLOR_VARIANT,
  BADGE_SIZE,
  BADGE_VARIANT,
} from '@defencedigital/react-component-library'

import { ApiTableDefaultValueProps } from './ApiTableDefaultValue'
import { ApiTableDescriptionProps } from './ApiTableDescription'
import { StyledBody } from './partials/StyledBody'
import { StyledItem } from './partials/StyledItem'
import { StyledHeader } from './partials/StyledHeader'
import { StyledHeaderTitle } from './partials/StyledHeaderTitle'
import { StyledHeaderRequired } from './partials/StyledHeaderRequired'

export interface ApiTableItemProps {
  children:
    | React.ReactElement<ApiTableDefaultValueProps>
    | React.ReactElement<ApiTableDefaultValueProps>[]
    | React.ReactElement<ApiTableDescriptionProps>
    | React.ReactElement<ApiTableDescriptionProps>[]
  isRequired?: boolean
  name: string
  type: string
}

export const ApiTableItem: React.FC<ApiTableItemProps> = ({
  children,
  isRequired,
  name,
  type,
}) => {
  return (
    <StyledItem>
      <StyledHeader>
        <StyledHeaderTitle>
          {name}
          {isRequired && (
            <StyledHeaderRequired
              color={BADGE_COLOR.DANGER}
              colorVariant={BADGE_COLOR_VARIANT.FADED}
              size={BADGE_SIZE.SMALL}
              variant={BADGE_VARIANT.PILL}
            >
              Required
            </StyledHeaderRequired>
          )}
        </StyledHeaderTitle>
        <Badge
          color={BADGE_COLOR.SUPA}
          colorVariant={BADGE_COLOR_VARIANT.FADED}
          size={BADGE_SIZE.SMALL}
        >
          {type}
        </Badge>
      </StyledHeader>
      <StyledBody>{children}</StyledBody>
    </StyledItem>
  )
}

ApiTableItem.displayName = 'ApiTableItem'
