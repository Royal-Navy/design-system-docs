import React, { useEffect, useState } from 'react'
import { IconContentCopy } from '@royalnavy/icon-library'
import { Language } from 'prism-react-renderer'
import Prism from 'prismjs'
import 'prismjs/plugins/line-numbers/prism-line-numbers'
import 'prismjs/plugins/line-numbers/prism-line-numbers.css'

import { ComponentWithClass } from '../../../../common/ComponentWithClass'
import { StyledCodeHighlighter } from './partials/StyledCodeHighlighter'
import { StyledHeader } from './partials/StyledHeader'
import { StyledBody } from './partials/StyledBody'
import { StyledCopyButton } from './partials/StyledCopyButton'
import { StyledHighlight } from '../../Framework/CodeBlock/partials/StyledHighlight'

export interface CodeHighlighterProps extends ComponentWithClass {
  source?: string
  language?: string
}

export const CodeHighlighter: React.FC<CodeHighlighterProps> = ({
  source = '// No source to display',
  language = 'javascript',
  children,
}) => {
  useEffect(() => {
    Prism.highlightAll()
  }, [])

  const [copyLabel, setCopyLabel] = useState('Copy code')

  function copyToClipboard() {
    const textarea = document.createElement('textarea')

    textarea.innerText = source
    document.body.appendChild(textarea)
    textarea.select()
    document.execCommand('copy')
    textarea.remove()

    setCopyLabel('Code copied')
  }

  return (
    <StyledCodeHighlighter>
      {children && (
        <StyledHeader data-testid="code-highlighter-example">
          {children}
        </StyledHeader>
      )}
      <StyledBody>
        {typeof document !== 'undefined' &&
          document.queryCommandSupported('copy') && (
            <StyledCopyButton
              type="button"
              onClick={copyToClipboard}
              data-testid="code-highlighter-copy"
            >
              <IconContentCopy />
              {copyLabel}
            </StyledCopyButton>
          )}

        <StyledHighlight $code={`${source}`} $language={language as Language} />
      </StyledBody>
    </StyledCodeHighlighter>
  )
}

CodeHighlighter.displayName = 'CodeHighlighter'
