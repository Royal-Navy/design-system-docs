import React from 'react'
import { Badge } from '@royalnavy/react-component-library'

import { ComponentWithClass } from '../../../../common/ComponentWithClass'
import { StyledIllustration } from './partials/StyledIllustration'
import { StyledPageTitle } from './partials/StyledPageTitle'
import { StyledPageDescription } from './partials/StyledPageDescription'
import { StyledLeftCol } from './partials/StyledLeftCol'
import { ContentPanel } from '../ContentPanel'

interface HeroProps extends ComponentWithClass {
  description: string
  title: string
  id: string
}

export const Hero: React.FC<HeroProps> = ({ description, title, id }) => {
  return (
    <ContentPanel id={id}>
      <StyledLeftCol>
        <Badge color="action" colorVariant="solid">
          Framework
        </Badge>
        <StyledPageTitle data-testid="hero-title">{title}</StyledPageTitle>
        <StyledPageDescription data-testid="hero-description">
          {description}
        </StyledPageDescription>
      </StyledLeftCol>
      <StyledIllustration>
        <svg xmlns="https://www.w3.org/2000/svg" viewBox="0 0 670 300">
          <g fill="none" fillRule="evenodd">
            <path fill="#12202B" d="M0-60h670v7804H0z" />
            <g>
              <path fill="#12202B" d="M0 0h670v300H0z" />
              <path fill="#1C2D39" d="M144 40h48v226h-48zM240 40h48v226h-48z" />
              <path
                fill="#1C2D39"
                opacity=".50439453"
                d="M336 40h48v226h-48z"
              />
              <path
                fill="#1C2D39"
                opacity=".36502511"
                d="M432 40h48v226h-48z"
              />
              <rect
                fill="#5B73E6"
                x="59"
                y="159"
                width="160"
                height="20"
                rx="2"
              />
              <rect
                fill="#3A8FDD"
                x="284"
                y="159"
                width="230"
                height="20"
                rx="2"
              />
              <rect
                fill="#FC7576"
                x="130"
                y="79"
                width="70"
                height="20"
                rx="2"
              />
              <rect
                fill="#56DCE6"
                x="299"
                y="79"
                width="110"
                height="20"
                rx="2"
              />
              <rect
                fill="#D3B85F"
                x="475"
                y="79"
                width="147"
                height="20"
                rx="2"
              />
              <rect
                fill="#8FD57F"
                x="252"
                y="119"
                width="190"
                height="20"
                rx="2"
              />
              <rect
                fill="#AD89F1"
                x="119"
                y="199"
                width="240"
                height="20"
                rx="2"
              />
              <rect
                fill="#FC7576"
                x="449"
                y="199"
                width="120"
                height="20"
                rx="2"
              />
              <rect fill="#FFF" x="441" y="24" width="2" height="250" rx="1" />
              <circle fill="#FFF" cx="442" cy="29" r="5" />
              <circle fill="#FFF" cx="442" cy="269" r="5" />
            </g>
          </g>
        </svg>
      </StyledIllustration>
    </ContentPanel>
  )
}
