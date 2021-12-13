import React, { Children, useEffect, useState } from 'react'

function getActiveIndex(items: React.ReactNode): number {
  const activeIndex = Children.toArray(items).findIndex(
    (item: React.ReactNode) => {
      return React.isValidElement(item) && item.props.isActive
    }
  )

  return activeIndex > 0 ? activeIndex : 0
}

export function useActiveItem(children: React.ReactNode): {
  isActive: (index: number) => boolean
  setActiveItemIndex: (index: number) => void
} {
  const [activeItemIndex, setActiveItemIndex] = useState<number>()

  useEffect(() => {
    setActiveItemIndex(getActiveIndex(children))
  }, [children])

  function isActive(index) {
    return index === activeItemIndex
  }

  return {
    isActive,
    setActiveItemIndex,
  }
}
