import React from 'react'

import { ApiTableItemProps } from './ApiTableItem'
import { ComponentWithClass } from '../../../common/ComponentWithClass'

export interface ApiTableProps extends ComponentWithClass {
  children:
    | React.ReactElement<ApiTableItemProps>
    | React.ReactElement<ApiTableItemProps>[]
}

export const ApiTable: React.FC<ApiTableProps> = ({ children }) => (
  <>{children}</>
)

ApiTable.displayName = 'ApiTable'
