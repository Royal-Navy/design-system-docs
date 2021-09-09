import React from 'react'
import Markdown from 'markdown-to-jsx'
import styled from 'styled-components'

interface MarkdownTableProps {
  children: string
}

const StyledMarkdownTable = styled(Markdown)`
  // add styles
`

export const MarkdownTable: React.FC<MarkdownTableProps> = (props) => (
  <StyledMarkdownTable data-testid="markdown-table" {...props} />
)

MarkdownTable.displayName = 'MarkdownTable'
