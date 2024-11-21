'use client'

import { FaExternalLinkAlt } from 'react-icons/fa'
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

type IJudaKingsKeys =
  | 'roboam'
  | 'abias'
  | 'asa'
  | 'josafat'
  | 'joram_juda'
  | 'ocozias_juda'
  | 'atalia'
  | 'joas'
  | 'amasias'
  | 'azarias'
  | 'jotam'
  | 'acaz'
  | 'ezequias'
  | 'manases'
  | 'amon'
  | 'josias'
  | 'joacaz'
  | 'joacim'
  | 'joaquin'
  | 'sedequias'

interface IJudaKingsDataItem {
  name: string
  key: IJudaKingsKeys
  time: number
  time_mensure: string
}

export const LineaReyesJudaComponent = () => {
  const kingsHeight = {
    roboam: 'bg-amber-200 h-[calc(17*52px)]',
    abias: 'bg-amber-100 h-[calc(3*52px)]',
    asa: 'bg-amber-200 h-[calc(41*52px)]',
    josafat: 'bg-amber-100 h-[calc(25*52px)]',
    joram_juda: 'bg-amber-200 h-[calc(8*52px)]',
    ocozias_juda: 'bg-amber-100 h-[calc(1*52px)]',
    atalia: 'bg-amber-200 h-[calc(6*52px)]',
    joas: 'bg-amber-100 h-[calc(40*52px)]',
    amasias: 'bg-amber-200 h-[calc(29*52px)]',
    azarias: 'bg-amber-100 h-[calc(52*52px)]',
    jotam: 'bg-amber-200 h-[calc(16*52px)]',
    acaz: 'bg-amber-100 h-[calc(16*52px)]',
    ezequias: 'bg-amber-200 h-[calc(29*52px)]',
    manases: 'bg-amber-100 h-[calc(55*52px)]',
    amon: 'bg-amber-200 h-[calc(2*52px)]',
    josias: 'bg-amber-100 h-[calc(31*52px)]',
    joacaz: 'bg-amber-200 h-[calc(3*4px)]', // 3 meses
    joacim: 'bg-amber-100 h-[calc(11*52px)]',
    joaquin: 'bg-amber-200 h-[calc(3*4px)]', // 3 meses
    sedequias: 'bg-amber-100 h-[calc(11*52px)]'
  }

  const reyesJuda: IJudaKingsDataItem[] = [
    {
      name: 'Roboam',
      key: 'roboam',
      time: 17,
      time_mensure: 'Años'
    },
    {
      name: 'Abías/Abiam',
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
    },
    {
      name: 'Joram',
      key: 'joram_juda',
      time: 8,
      time_mensure: 'Años'
    },
    {
      name: 'Ocozías',
      key: 'ocozias_juda',
      time: 1,
      time_mensure: 'Año'
    },
    {
      name: 'Atalía',
      key: 'atalia',
      time: 6,
      time_mensure: 'Años'
    },
    {
      name: 'Joas',
      key: 'joas',
      time: 40,
      time_mensure: 'Años'
    },
    {
      name: 'Amasías',
      key: 'amasias',
      time: 29,
      time_mensure: 'Años'
    },
    {
      name: 'Azarías/Uzias',
      key: 'azarias',
      time: 52,
      time_mensure: 'Años'
    },
    {
      name: 'Jotám',
      key: 'jotam',
      time: 16,
      time_mensure: 'Años'
    },
    {
      name: 'Acaz',
      key: 'acaz',
      time: 16,
      time_mensure: 'Años'
    },
    {
      name: 'Ezequías',
      key: 'ezequias',
      time: 29,
      time_mensure: 'Años'
    },
    {
      name: 'Manasés',
      key: 'manases',
      time: 55,
      time_mensure: 'Años'
    },
    {
      name: 'Amón',
      key: 'amon',
      time: 2,
      time_mensure: 'Años'
    },
    {
      name: 'Josías',
      key: 'josias',
      time: 31,
      time_mensure: 'Años'
    },
    {
      name: 'Joacaz',
      key: 'joacaz',
      time: 3,
      time_mensure: 'Meses'
    },
    {
      name: 'Joacím',
      key: 'joacim',
      time: 11,
      time_mensure: 'Años'
    },
    {
      name: 'Joaquín',
      key: 'joaquin',
      time: 3,
      time_mensure: 'Meses'
    },
    {
      name: 'Sedequías',
      key: 'sedequias',
      time: 11,
      time_mensure: 'Años'
    }
  ]

  return (
    <div className="w-full">
      <h3 className="text-center text-gray-700 py-4">Judá</h3>
      <Timeline align="right" className="juda-timeline">
        {reyesJuda.map((item: IJudaKingsDataItem) => (
          <TimelineItem key={`juda-king-${item.key}`} className={`${kingsHeight[item.key]} timeline-item`}>
            <TimelineSeparator>
              <TimelineDot></TimelineDot>
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent>
              <div className="w-full flex justify-end mt-[-10px]">
                <Link href={`${ROUTES.REYES_JUDA}/${item.key}`} className="w-fit flex items-center">
                  <h4 className="w-fit py-1 pr-2">{item.name}</h4>
                  <FaExternalLinkAlt className="text-gray-700" />
                </Link>
              </div>
              <div>
                <p className='text-lg underline'>Reinado: </p>
                <p className='text-base'>{item.time} {item.time_mensure}</p>
              </div>
              <div>
                <p className='text-lg underline'>Profetas: </p>
              </div>
            </TimelineContent>
          </TimelineItem>
        ))}
      </Timeline>
      <div className='w-full h-[calc(70*52px)] bg-gray-300'>
        70 Años exilio
      </div>
      <div className='w-full h-[calc(70*52px)] bg-orange-200'>
        Post exilio
      </div>
    </div>
  )
}
