import React, { useState, useEffect, useRef } from 'react'

import { ComponentWithClass } from '../../../../common/ComponentWithClass'
import { StyledFilter } from './partials/StyledFilter'
import { StyledFilterIcon } from './partials/StyledFilterIcon'
import { StyledFilterEndAdornment } from './partials/StyledFilterEndAdornment'
import { StyledFilterInput } from './partials/StyledFilterInput'
import { StyledFilterInputWrapper } from './partials/StyledFilterInputWrapper'
import { StyledFilterOuterWrapper } from './partials/StyledFilterOuterWrapper'

export interface SidebarFilterProps extends ComponentWithClass {
  onChange: (e: React.ChangeEvent<HTMLInputElement>, value: string) => void
}

export const SidebarFilter: React.FC<SidebarFilterProps> = ({
  className,
  onChange,
}) => {
  const filterInputRef = useRef<HTMLInputElement>()
  const [value, setValue] = useState<string>('')
  const [hasFocus, setHasFocus] = useState<boolean>(false)

  useEffect(() => {
    document.addEventListener('keyup', (e: KeyboardEvent) => {
      if (e.code !== 'Slash') {
        return
      }

      filterInputRef.current.focus()
      setHasFocus(true)
    })
  }, [])

  return (
    <StyledFilter className={className}>
      <StyledFilterOuterWrapper>
        <StyledFilterInputWrapper $hasFocus={hasFocus}>
          <StyledFilterInput
            ref={filterInputRef}
            value={value}
            data-testid="sidebar-filter-input"
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
              const newValue = e.target.value
              setValue(newValue)
              onChange(e, newValue)
            }}
            placeholder="Filter..."
            onBlur={(_) => setHasFocus(false)}
          />
          <StyledFilterEndAdornment>
            <StyledFilterIcon>/</StyledFilterIcon>
          </StyledFilterEndAdornment>
        </StyledFilterInputWrapper>
      </StyledFilterOuterWrapper>
    </StyledFilter>
  )
}

SidebarFilter.displayName = 'SidebarFilter'
