'use client'

import { FaExternalLinkAlt } from "react-icons/fa";
import Link from 'next/link'
import { ROUTES } from '@/constants/routes'
import React from 'react'
import Timeline from '@material-ui/lab/Timeline'
import TimelineConnector from '@material-ui/lab/TimelineConnector'
import TimelineContent from '@material-ui/lab/TimelineContent'
import TimelineDot from '@material-ui/lab/TimelineDot'
import TimelineItem from '@material-ui/lab/TimelineItem'
import TimelineSeparator from '@material-ui/lab/TimelineSeparator'
import Typography from '@material-ui/core/Typography'

type IIsraelKingsKeys =
  | 'jeroboam_1'
  | 'nadab'
  | 'baasa'
  | 'ela'
  | 'zimri'
  | 'omri'
  | 'acab'
  | 'ocozias_israel'
  | 'joram_israel'
  | 'jehu'
  | 'joacaz'
  | 'joas'
  | 'jeroboam_2'
  | 'zacarias'
  | 'salum'
  | 'manahem'
  | 'pekaia'
  | 'peka'
  | 'oseas'

interface IIsraelKingsDataItem {
  name: string
  key: IIsraelKingsKeys
  time: number
  time_mensure: string
}

export const LineaReyesIsraelComponent = () => {
  // 52px = 1 año
  //4 px = 1 mes

  // 365 dias = 52px
  // 180 días =
  const kingsHeight = {
    jeroboam_1: 'min-h-0 bg-teal-200 h-[calc(22*52px)]',
    nadab: 'min-h-0 bg-teal-100 h-[calc(2*52px)]',
    baasa: 'min-h-0 bg-teal-200 h-[calc(24*52px)]',
    ela: 'min-h-0 bg-teal-100 h-[calc(2*52px)]',
    zimri: 'min-h-0 bg-teal-200 h-[1px]', //7 días
    omri: 'min-h-0 bg-teal-100 h-[calc(6*52px)]',
    acab: 'min-h-0 bg-teal-200 h-[calc(22*52px)]',
    ocozias_israel: 'min-h-0 bg-teal-100 h-[calc(2*52px)]',
    joram_israel: 'min-h-0 bg-teal-200 h-[calc(12*52px)]',
    jehu: 'min-h-0 bg-teal-100 h-[calc(28*52px)]',
    joacaz: 'min-h-0 bg-teal-200 h-[calc(17*52px)]',
    joas: 'min-h-0 bg-teal-100 h-[calc(16*52px)]',
    jeroboam_2: 'min-h-0 bg-teal-200 h-[calc(41*52px)]',
    zacarias: 'min-h-0 bg-teal-100 h-[calc(26px)]', //6 meses
    salum: 'min-h-0 bg-teal-200 h-[calc(4px)]', //1 mes
    manahem: 'min-h-0 bg-teal-100 h-[calc(10*52px)]',
    pekaia: 'min-h-0 bg-teal-200 h-[calc(2*52px)]',
    peka: 'min-h-0 bg-teal-100 h-[calc(20*52px)]',
    oseas: 'min-h-0 bg-teal-200 h-[calc(9*52px)]'
  }

  const reyesIsrael: IIsraelKingsDataItem[] = [
    {
      name: 'Jeroboam',
      key: 'jeroboam_1',
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
      time_mensure: 'Semana'
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
    },
    {
      name: 'Ocozías',
      key: 'ocozias_israel',
      time: 2,
      time_mensure: 'Años'
    },
    {
      name: 'Jorám',
      key: 'joram_israel',
      time: 12,
      time_mensure: 'Años'
    },
    {
      name: 'Jehú',
      key: 'jehu',
      time: 28,
      time_mensure: 'Años'
    },
    {
      name: 'Joacáz',
      key: 'joacaz',
      time: 17,
      time_mensure: 'Años'
    },
    {
      name: 'Joás',
      key: 'joas',
      time: 16,
      time_mensure: 'Años'
    },
    {
      name: 'Jeroboám II',
      key: 'jeroboam_2',
      time: 41,
      time_mensure: 'Años'
    },
    {
      name: 'Zacarías',
      key: 'zacarias',
      time: 6,
      time_mensure: 'Meses'
    },
    {
      name: 'Salúm',
      key: 'salum',
      time: 1,
      time_mensure: 'Mes'
    },
    {
      name: 'Manahém',
      key: 'manahem',
      time: 10,
      time_mensure: 'Años'
    },
    {
      name: 'Pekaía',
      key: 'pekaia',
      time: 2,
      time_mensure: 'Años'
    },
    {
      name: 'Peka',
      key: 'peka',
      time: 20,
      time_mensure: 'Años'
    },
    {
      name: 'Oseas',
      key: 'oseas',
      time: 9,
      time_mensure: 'Años'
    }
  ]

  return (
    <div className="w-full">
      <h3 className='text-center text-gray-700 py-4'>Israel</h3>

      <Timeline align="left" className="israel-timeline">
        {reyesIsrael.map((item: IIsraelKingsDataItem) => (
          <TimelineItem key={`israel-king-${item.key}`} className={`${kingsHeight[item.key]} timeline-item`}>
            <TimelineSeparator>
              <TimelineDot></TimelineDot>
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent>
            <div className="mt-[-10px]">
                <Link href={`${ROUTES.REYES}/${item.key}`} className="w-fit flex items-center">
                  <h4 className="w-fit py-1 px-2">{item.name}</h4>
                  <FaExternalLinkAlt className="text-gray-700"/>
                </Link>
              </div>
              <Typography variant="body2" color="textSecondary">
                Tiempo de reinado: {item.time} {item.time_mensure}
              </Typography>
            </TimelineContent>
          </TimelineItem>
        ))}
      </Timeline>
      ISRAEL LLEVADO CAUTIVO POR ASIRIA
    </div>
  )
}
