'use client'

import './timeline.style.css'

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

  
  // const jsonText = '# Jeroboam\n## Llamado\nRecibió palabra de que reinaría sobre 10 tribus de Israel, y que si tenía un corazón como el de David, Dios le edificaría casa como la de David.\n## Sus hechos\nEdificó dos becerros de oro para que el pueblo adorara, con tal de que no se vayan hasta Judá para adorar, pues temía que una vez allí, no quieran regresar y se pusieran en contra suyo, y estableció sacerdotes provenientes del pueblo común, siendo que Dios le dio ese ministerio a los Levitas, y Dios mismo es quien los levanta y los constituye. También edificó lugares altos donde se ejercía la idolatría. Luego de todo esto, creó una fiesta solemne y subió un altar para quemar incienso.\n### El varón de Dios\nAnte esto, un profeta de Dios proveniente de Judá, va hacia él mientras ofrecía incienso, y al llegar se pronuncia contra lo que estaba haciendo, diciéndole que nacería un rey que sobre un altar quemaría huesos de hombres, y que como señal de lo que decía, ese mismo altar en el que estaba quemando incienso se quebraría (ver apartado de profetas: Varón de Dios). En ese momento, Jeroboám extiende su mano para que prendan al varón de Dios, pero ocurre algo inesperado: al extender la mano, se le queda seca. Ante esto, el rey se humilla y le dice al profeta que ore a Dios para que su mano sea sanada; el profeta ora, la mano se le cura y en ese instnte, el altar se quiebra.\nA pesar de todo esto, su arrepentimiento fue circunstancial, y no corrigió su manera de vivir, sino que siguió instituyendo sacerdotes, por lo que su casa sería cortada rapidamente del reino.\n### Profecía de Ahías\nEl rey tenía un hijo muy grave de salud, por lo que envía a su esposa disfrazada con el profeta que le dio la palabra del reino, Ahías. Si bien este profeta era viejo y no veía, el Señor le reveló que aquella mujer que lo visitaba era la esposa de Jeroboam, por lo que cuando ella llegó, comenzó a reprender duramente al rey por sus pecados y a acusarlo de no haber sido como David; además, le dice que cuando llegara a su casa, su hijo  moriría, y emite juicio a su casa.\n## A tener en cuenta:\nJeroboam inició lo que mas tarde sería la religion de los samaritanos: una mezcla de las cosas de Dios con las distintas religiones que estaban en las naciones vecinas.'
  // const text = jsonText

  return (
    <div>
      <h2 className="text-center">REINO UNIDO</h2>
      <Timeline align="left" className="pr-2">
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
      <div className="md:hidden">
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
      <div className="md:flex">
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
