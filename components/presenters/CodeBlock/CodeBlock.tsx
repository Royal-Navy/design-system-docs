import React from 'react'
import { Language } from 'prism-react-renderer'

import { ComponentWithClass } from '../../../common/ComponentWithClass'
import { StyledCodeBlock } from './partials/StyledCodeBlock'
import { StyledHeader } from './partials/StyledHeader'
import { StyledFilename } from './partials/StyledFilename'
import { StyledHighlight } from './partials/StyledHighlight'

interface CodeBlockProps extends ComponentWithClass {
  filename?: string
  language?: string
}

export const CodeBlock: React.FC<CodeBlockProps> = ({
  className,
  children,
  filename,
  language = 'jsx',
}) => {
  return (
    <StyledCodeBlock className={className} data-testid="codeblock">
      {filename && (
        <StyledHeader>
          <StyledFilename data-testid="codeblock-filename">
            {filename}
          </StyledFilename>
        </StyledHeader>
      )}

      <StyledHighlight $code={`${children}`} $language={language as Language} />
    </StyledCodeBlock>
  )
}
