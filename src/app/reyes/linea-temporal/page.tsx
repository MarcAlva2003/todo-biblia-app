'use client'

import './timeline.style.css'

import { LineaProfetasComponent } from './components/linea-profetas'
// import { LineaReyesComponent } from './components/linea-reyes'
import { LineaReyesIsraelComponent } from './components/linea-reyes-israel'
import { LineaReyesJudaComponent } from './components/linea-reyes-juda'
import React from 'react'
import Timeline from '@material-ui/lab/Timeline'
import TimelineConnector from '@material-ui/lab/TimelineConnector'
import TimelineContent from '@material-ui/lab/TimelineContent'
import TimelineDot from '@material-ui/lab/TimelineDot'
import TimelineItem from '@material-ui/lab/TimelineItem'
import TimelineSeparator from '@material-ui/lab/TimelineSeparator'
import Typography from '@material-ui/core/Typography'

export default function ReyesTimelinePage() {
  return (
    <div>
      <h2 className="text-center">Reino unido</h2>
      <Timeline align="left" className="pr-2">
        <TimelineItem>
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
      <h2 className="text-center mt-10 mb-4">Reino dividio</h2>
      <div className="max-w-[full] overflow-x-scroll">
        <div className="lineas flex">
          <div className=" w-[33%] min-w-[220px] kings-timeline">
            <LineaReyesJudaComponent />
          </div>
          <div className=" w-[33%] min-w-[220px] kings-timeline">
            <LineaReyesIsraelComponent />
          </div>
          <div className=" w-[33%] min-w-[220px]">
            <LineaProfetasComponent />
          </div>
        </div>
      </div>
    </div>
  )
}
