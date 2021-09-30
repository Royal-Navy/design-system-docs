import { selectors } from '@royalnavy/design-tokens'
import { useDocumentClick } from '@royalnavy/react-component-library'
import {
  Dispatch,
  MutableRefObject,
  SetStateAction,
  useRef,
  useState,
} from 'react'

const { breakpoint } = selectors

export function useMastheadMenuItem(): {
  isNotMobile: boolean
  setShowChildren: Dispatch<SetStateAction<boolean>>
  showChildren: boolean
  subMenuRef: MutableRefObject<HTMLDivElement>
} {
  const subMenuRef = useRef()
  const [showChildren, setShowChildren] = useState<boolean>(false)
  const mediumBreakpointWidth = Number(
    breakpoint('m').breakpoint.replace(/px/g, '')
  )
  const isNotMobile = window.innerWidth >= mediumBreakpointWidth

  useDocumentClick(subMenuRef, (_: Event) => {
    if (isNotMobile) {
      setShowChildren(false)
    }
  })

  return {
    isNotMobile,
    setShowChildren,
    showChildren,
    subMenuRef,
  }
}
