import React from 'react'
import styled from 'styled-components'
import Highlight, { defaultProps, Language } from 'prism-react-renderer'
import { selectors } from '@royalnavy/design-tokens'
import 'firacode'

import theme from './theme'

const { color, spacing } = selectors

import { ComponentWithClass } from '../../../../../common/ComponentWithClass'

interface StyledHighlightProps extends ComponentWithClass {
  $code: string
  $language?: Language
}

const Pre = styled.pre`
  text-align: left;
  margin: 1em 0;
  padding: 0.5em;
  overflow: scroll;
  white-space: pre-wrap;
`

const Line = styled.div`
  display: table-row;
  font-size: 14px;
`

const LineNo = styled.span`
  padding-bottom: 5px;
  display: table-cell;
  text-align: right;
  padding-right: 1em;
  user-select: none;
  opacity: 0.5;
  color: ${color('neutral', '200')};
`

const LineContent = styled.span`
  display: table-cell;
`

export const StyledHighlight: React.FC<StyledHighlightProps> = ({
  $code,
  $language = 'jsx',
}) => (
  <Highlight
    {...defaultProps}
    theme={theme}
    code={`${$code}`}
    language={$language}
  >
    {({ className, style, tokens, getLineProps, getTokenProps }) => (
      <Pre className={className} style={style}>
        {tokens.map((line, i) => (
          <Line {...getLineProps({ line, key: i })}>
            <LineNo>{i + 1}</LineNo>
            <LineContent>
              {line.map((token, key) => (
                <span {...getTokenProps({ token, key })} />
              ))}
            </LineContent>
          </Line>
        ))}
      </Pre>
    )}
  </Highlight>
)
