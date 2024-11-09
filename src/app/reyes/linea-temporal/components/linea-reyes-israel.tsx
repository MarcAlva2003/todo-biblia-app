'use client'

import React from 'react'
import Timeline from '@material-ui/lab/Timeline'
import TimelineConnector from '@material-ui/lab/TimelineConnector'
import TimelineContent from '@material-ui/lab/TimelineContent'
import TimelineDot from '@material-ui/lab/TimelineDot'
import TimelineItem from '@material-ui/lab/TimelineItem'
import TimelineSeparator from '@material-ui/lab/TimelineSeparator'
import Typography from '@material-ui/core/Typography'

// import TimelineOppositeContent from '@material-ui/lab/TimelineOppositeContent'

type IIsraelKingsKeys = 'jeroboam' | 'nadab' | 'baasa' | 'ela' | 'zimri' | 'omri' | 'acab'

interface IIsraelKingsDataItem {
  name: string
  key: IIsraelKingsKeys
  time: number
  time_mensure: string
}

export const LineaReyesIsraelComponent = () => {
  const kingsHeight = {
    jeroboam: 'min-h-0 bg-green-400 h-[calc(22*52px)]',
    nadab: 'min-h-0 bg-green-200 h-[calc(2*52px)]',
    baasa: 'min-h-0 bg-green-400 h-[calc(24*52px)]',
    ela: 'min-h-0 bg-green-200 h-[calc(2*52px)]',
    zimri: 'min-h-0 bg-green-400 h-[1px]',
    omri: 'min-h-0 bg-green-200 h-[calc(6*52px)]',
    acab: 'min-h-0 bg-green-400 h-[calc(22*52px)]'
  }

  const reyesIsrael: IIsraelKingsDataItem[] = [
    {
      name: 'Jeroboam',
      key: 'jeroboam',
      time: 22,
      time_mensure: 'Años'
    },
    {
      name: 'Nadab',
      key: 'nadab',
      time: 2,
      time_mensure: 'Años'
    },
    {
      name: 'Baasa',
      key: 'baasa',
      time: 24,
      time_mensure: 'Años'
    },
    {
      name: 'Ela',
      key: 'ela',
      time: 2,
      time_mensure: 'Años'
    },
    {
      name: 'Zimri',
      key: 'zimri',
      time: 1,
      time_mensure: 'Años'
    },
    {
      name: 'Omri',
      key: 'omri',
      time: 6,
      time_mensure: 'Años'
    },
    {
      name: 'Acab',
      key: 'acab',
      time: 22,
      time_mensure: 'Años'
    }
  ]

  return (
    <div className="w-full">
      <Timeline align="right">
        {reyesIsrael.map((item: IIsraelKingsDataItem) => (
          <TimelineItem key={`israel-king-${item.key}`} className={`${kingsHeight[item.key]}`}>
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
