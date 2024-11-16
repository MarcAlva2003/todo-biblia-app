'use client'

import React, { useState } from 'react'

import { LineaProfetasComponent } from './components/linea-profetas'
import { LineaReyesComponent } from './components/linea-reyes'
import Timeline from '@material-ui/lab/Timeline'
import TimelineConnector from '@material-ui/lab/TimelineConnector'
import TimelineContent from '@material-ui/lab/TimelineContent'
import TimelineDot from '@material-ui/lab/TimelineDot'
import TimelineItem from '@material-ui/lab/TimelineItem'
import TimelineSeparator from '@material-ui/lab/TimelineSeparator'
import ToggleButton from '@mui/material/ToggleButton'
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup'
import Typography from '@material-ui/core/Typography'

type ITimelineSwitch = 'REYES' | 'PROFETAS'

interface ITimelineSwitchOptions {
  value: ITimelineSwitch
  text: string
}

export default function ReyesTimelinePage() {
  const TIMELINE_SWITCH = {
    REYES: 'REYES',
    PROFETAS: 'PROFETAS'
  }

  const timelineSwitchOptions: ITimelineSwitchOptions[] = [
    {
      value: TIMELINE_SWITCH.REYES as ITimelineSwitch,
      text: 'Reyes'
    },
    {
      value: TIMELINE_SWITCH.PROFETAS as ITimelineSwitch,
      text: 'Profetas'
    }
  ]

  const [showTimeline, setShowTimeline] = useState<ITimelineSwitch>(TIMELINE_SWITCH.REYES as ITimelineSwitch)

  const handleSetTimeline = (event: React.MouseEvent<HTMLElement>, newAlignment: string) => {
    setShowTimeline(newAlignment as ITimelineSwitch)
  }

  return (
    <div>
      <h2 className="text-center">REINO UNIDO</h2>
      <Timeline align="left">
        <TimelineItem className="bg-red-200">
          <TimelineSeparator>
            <TimelineDot></TimelineDot>
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent>
            <Typography variant="h6" component="h1">
              Saúl
            </Typography>
            <Typography variant="body2" color="textSecondary">
              Años de reinado: 42
            </Typography>
          </TimelineContent>
        </TimelineItem>
        <TimelineItem>
          <TimelineSeparator>
            <TimelineDot></TimelineDot>
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent>
            <Typography variant="h6" component="h1">
              David
            </Typography>
            <Typography variant="body2" color="textSecondary">
              Años de reinado: 40
            </Typography>
          </TimelineContent>
        </TimelineItem>
        <TimelineItem>
          <TimelineSeparator>
            <TimelineDot></TimelineDot>
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent>
            <Typography variant="h6" component="h1">
              Salomón
            </Typography>
            <Typography variant="body2" color="textSecondary">
              Años de reinado: 40
            </Typography>
          </TimelineContent>
        </TimelineItem>
      </Timeline>
      <h2 className="text-center">REINO DIVIDIDO</h2>
      <div className='md:hidden'>
        <ToggleButtonGroup
          color="primary"
          value={showTimeline}
          className="w-full"
          onChange={handleSetTimeline}
          exclusive
        >
          {timelineSwitchOptions.map((item) => (
            <ToggleButton key={`kings-switch-options-${item.value}`} className="w-full" value={item.value}>
              {item.text}
            </ToggleButton>
          ))}
        </ToggleButtonGroup>
      </div>

      {/* SHOW/HIDE TIMELINE ONLY ON MOBILE RESOLUTIONS */}
      {/* BIGGER RESOLUTIONS: SHOW BOTH TIMELINES */}
      <div className='md:flex'>
        <div className={`${showTimeline === TIMELINE_SWITCH.PROFETAS ? 'invisible hidden' : ''} md:visible md:block`}>
          <LineaReyesComponent />
        </div>
        <div className={`${showTimeline === TIMELINE_SWITCH.REYES ? 'invisible hidden' : ''} md:visible md:block`}>
          <LineaProfetasComponent />
        </div>
      </div>
    </div>
  )
}
