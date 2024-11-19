'use client'

import './king-description.styles.css'

import { useEffect, useState } from 'react'

import { IoIosArrowDropleft } from 'react-icons/io'
import Link from 'next/link'
import { ROUTES } from '@/constants/routes'
import ReactMarkdown from 'react-markdown'
import { getKingByKey } from '@/util/getKings'
import { useParams } from 'next/navigation'

export default function KingDetail() {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const [kingData, setKingData] = useState<any>(undefined)
  const params = useParams()

  useEffect(() => {
    if (params && params.id) {
      const data = getKingByKey(params.id as string)
      console.log('page', data)
      console.log({ data })
      setKingData({
        ...data,
        description: data?.description.replace(/\n/g, '  \n')
      })
    }
  }, [])

  console.log(kingData?.description)

  return (
    <div className="px-2 py-10">
      {!kingData ? (
        <p>Cargando...</p>
      ) : (
        <div>
          <div className='mb-10'>
            <Link href={ROUTES.LINEA_REYES}>
              <div className="text-blue-400 flex items-center">
                <IoIosArrowDropleft className='mr-2'/>
                Ver linea temporal
              </div>
            </Link>
          </div>
          <div>
            <ReactMarkdown>{kingData?.description}</ReactMarkdown>
          </div>
        </div>
      )}
    </div>
  )
}
