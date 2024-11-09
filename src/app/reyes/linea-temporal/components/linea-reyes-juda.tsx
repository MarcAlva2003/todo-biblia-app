'use client'

import React from 'react'
import Timeline from '@material-ui/lab/Timeline'
import TimelineConnector from '@material-ui/lab/TimelineConnector'
import TimelineContent from '@material-ui/lab/TimelineContent'
import TimelineDot from '@material-ui/lab/TimelineDot'
import TimelineItem from '@material-ui/lab/TimelineItem'
import TimelineSeparator from '@material-ui/lab/TimelineSeparator'
import Typography from '@material-ui/core/Typography'

type IJudaKingsKeys = 'roboam' | 'abias' | 'asa' | 'josafat'

interface IJudaKingsDataItem {
  name: string
  key: IJudaKingsKeys
  time: number
  time_mensure: string
}

export const LineaReyesJudaComponent = () => {
  const kingsHeight = {
    roboam: 'bg-green-200 h-[calc(17*52px)]',
    abias: 'bg-green-400 h-[calc(3*52px)]',
    asa: 'bg-green-200 h-[calc(41*52px)]',
    josafat: 'bg-green-400 h-[calc(25*52px)]'
  }

  const reyesJuda: IJudaKingsDataItem[] = [
    {
      name: 'Roboam',
      key: 'roboam',
      time: 17,
      time_mensure: 'Años'
    },
    {
      name: 'Abías/Abiám',
      key: 'abias',
      time: 3,
      time_mensure: 'Años'
    },
    {
      name: 'Asa',
      key: 'asa',
      time: 41,
      time_mensure: 'Años'
    },
    {
      name: 'Josafat',
      key: 'josafat',
      time: 25,
      time_mensure: 'Años'
    }
  ]

  return (
    <div className="w-full">
      <Timeline align="right">
        {reyesJuda.map((item: IJudaKingsDataItem) => (
          <TimelineItem key={`juda-king-${item.key}`} className={`${kingsHeight[item.key]}`}>
            <TimelineSeparator>
              <TimelineDot></TimelineDot>
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent>
              <Typography variant="h6" component="h1">
                {item.name}
              </Typography>
              <Typography variant="body2" color="textSecondary">
                Tiempo de reinado: {item.time} {item.time_mensure}
              </Typography>
            </TimelineContent>
          </TimelineItem>
        ))}
      </Timeline>
    </div>
  )
}
