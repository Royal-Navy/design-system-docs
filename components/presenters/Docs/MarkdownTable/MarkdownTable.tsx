import React from 'react'
import Markdown from 'markdown-to-jsx'
import { selectors } from '@royalnavy/design-tokens'
import styled from 'styled-components'

const { color, mq, fontSize, spacing } = selectors

interface MarkdownTableProps {
  children: string
}

const StyledMarkdownTable = styled(Markdown)`
  border-collapse: collapse;
  margin: ${spacing('12')} 0;
  padding: 0;
  width: 100%;
  table-layout: fixed;
  border-top: 1px solid ${color('neutral', '100')};
  border-bottom: 1px solid ${color('neutral', '100')};
  border-right: 1px solid ${color('neutral', '100')};

  tr:nth-child(odd) {
    background-color: ${color('neutral', '000')};
  }

  th,
  td {
    padding: ${spacing('6')} ${spacing('10')};
    text-align: left;
    font-size: ${fontSize('base')};
    color: ${color('neutral', '400')};
    border-left: 1px solid ${color('neutral', '100')};
  }

  th {
    font-size: ${fontSize('m')};
    background-color: ${color('neutral', 'white')};
    color: ${color('neutral', '500')};
    border-bottom: 2px solid ${color('neutral', '100')};
  }

  code {
    background-color: ${color('neutral', '500')};
    color: ${color('neutral', 'white')};
    padding: ${spacing('1')} ${spacing('3')} ${spacing('2')};
    line-height: 1;
    margin-right: ${spacing('4')};
  }
`

export const MarkdownTable: React.FC<MarkdownTableProps> = (props) => (
  <StyledMarkdownTable data-testid="markdown-table" {...props} />
)

MarkdownTable.displayName = 'MarkdownTable'
