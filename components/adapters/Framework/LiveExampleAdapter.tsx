import React from 'react'
import camelCase from 'lodash/camelCase'
import { documentToReactComponents } from '@contentful/rich-text-react-renderer'
import {
  Timeline,
  TimelineTodayMarker,
  TimelineMonths,
  TimelineWeeks,
  TimelineDays,
  TimelineHours,
  TimelineRows,
  TimelineRow,
  TimelineEvents,
  TimelineEvent,
} from '@defencedigital/react-component-library'

import { ComponentWithClass } from '../../../common/ComponentWithClass'
import {
  ContentPanel,
  LeftCol,
  RightCol,
} from '../../presenters/Framework/ContentPanel'
import { LiveExample } from '../../presenters/Framework/LiveExample/LiveExample'

interface LiveExampleAdapterProps extends ComponentWithClass {
  fields: Record<string, any>
}

export const LiveExampleAdapter: React.FC<LiveExampleAdapterProps> = ({
  fields,
}) => {
  const { title, description } = fields
  const id = camelCase(title)

  return (
    <ContentPanel id={id}>
      <LeftCol>
        {title && <h2 data-testid="live-example-adapter-title">{title}</h2>}
        {description?.json && documentToReactComponents(description.json)}
      </LeftCol>
      <RightCol>
        <LiveExample title={title}>
          <Timeline
            hasSide
            startDate={new Date(2020, 3, 1)}
            today={new Date(2020, 3, 3)}
          >
            <TimelineTodayMarker />
            <TimelineMonths />
            <TimelineWeeks />
            <TimelineDays />
            <TimelineHours />
            <TimelineRows>
              <TimelineRow name="Row 1">
                <TimelineEvents>
                  <TimelineEvent
                    startDate={new Date(2020, 2, 14)}
                    endDate={new Date(2020, 3, 4)}
                  >
                    Event 1
                  </TimelineEvent>
                </TimelineEvents>
              </TimelineRow>
              <TimelineRow name="Row 2">
                <TimelineEvents>
                  <TimelineEvent
                    startDate={new Date(2020, 3, 2)}
                    endDate={new Date(2020, 3, 5)}
                  >
                    Event 2
                  </TimelineEvent>
                </TimelineEvents>
              </TimelineRow>
            </TimelineRows>
          </Timeline>
        </LiveExample>
      </RightCol>
    </ContentPanel>
  )
}
