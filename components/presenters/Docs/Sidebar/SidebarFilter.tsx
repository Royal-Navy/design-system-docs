import React, { useState } from 'react'

import { ComponentWithClass } from '../../../../common/ComponentWithClass'
import { StyledFilter } from './partials/StyledFilter'
import { StyledFilterButton } from './partials/StyledFilterButton'
import { StyledFilterEndAdornment } from './partials/StyledFilterEndAdornment'
import { StyledFilterInput } from './partials/StyledFilterInput'
import { StyledFilterInputWrapper } from './partials/StyledFilterInputWrapper'
import { StyledFilterOuterWrapper } from './partials/StyledFilterOuterWrapper'

export interface SidebarFilterProps extends ComponentWithClass {
  onChange: (e: React.ChangeEvent<HTMLInputElement>, value: string) => void
  onSubmit: (e: React.FormEvent<HTMLButtonElement>, value: string) => void
}

export const SidebarFilter: React.FC<SidebarFilterProps> = ({
  className,
  onChange,
  onSubmit,
}) => {
  const [value, setValue] = useState<string>(null)

  return (
    <StyledFilter className={className}>
      <StyledFilterOuterWrapper>
        <StyledFilterInputWrapper>
          <StyledFilterInput
            data-testid="sidebar-filter-input"
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
              const newValue = e.target.value
              setValue(newValue)
              onChange(e, newValue)
            }}
            placeholder="Filter..."
          />
          <StyledFilterEndAdornment>
            <StyledFilterButton
              data-testid="sidebar-filter-button"
              onClick={(e: React.FormEvent<HTMLButtonElement>) =>
                onSubmit(e, value)
              }
            >
              /
            </StyledFilterButton>
          </StyledFilterEndAdornment>
        </StyledFilterInputWrapper>
      </StyledFilterOuterWrapper>
    </StyledFilter>
  )
}

SidebarFilter.displayName = 'SidebarFilter'
