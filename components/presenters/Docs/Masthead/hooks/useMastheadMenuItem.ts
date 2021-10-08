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
  ariaLabel: string
  buttonRef: MutableRefObject<HTMLButtonElement>
  mediumBreakpointWidth: number
  setShowChildren: Dispatch<SetStateAction<boolean>>
  showChildren: boolean
  subMenuRef: MutableRefObject<HTMLDivElement>
} {
  const buttonRef = useRef()
  const subMenuRef = useRef()
  const [showChildren, setShowChildren] = useState<boolean>(false)
  const mediumBreakpointWidth = Number(
    breakpoint('m').breakpoint.replace(/px/g, '')
  )
  const ariaLabel = showChildren ? 'Hide menu' : 'Show menu'

  useDocumentClick([buttonRef, subMenuRef], (_: Event) => {
    if (window.innerWidth >= mediumBreakpointWidth && showChildren) {
      setShowChildren(false)
    }
  })

  return {
    ariaLabel,
    buttonRef,
    mediumBreakpointWidth,
    setShowChildren,
    showChildren,
    subMenuRef,
  }
}
