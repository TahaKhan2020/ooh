import React from 'react'
import Image from 'next/image'
import {Envelope,Twitter,Linkedin,Medium} from './icons'

const Sidebar = ({data}) => {
  const {name,role,education,contactLinks} = data
  return (
    <div className='bg-Cblue bg-opacity-100 hover:bg-opacity-90 flex flex-col sm:h-screen content-between w-full h-auto sm:justify-around sm:w-1/3 sm:fixed'>
      <div className='text-white flex flex-col p-10 items-center'>
        <Image priority width={200} height={200} className='rounded-full h-full mb-6 mt-4' src = '/images/vp.jfif' alt = 'vp' aria-label = 'vp.jfif' />
        <h1 className='mb-2'>{data.name}</h1>
        <h2 className='mb-6'>{data.role}</h2>
        <p className='mb-2'>{data.education[0]}</p>
        <p className='mb-2'>{data.education[1]}</p>
        <div className='text-white text-center mb-4 mt-4 sm:mt-8'>
          <h3 className='mb-2'>CONTACT ME</h3>
          <div className='flex flex-row justify-center gap-2'>
          <a className='icons-contactme' href={data.contactLinks?.[0]} aria-label={"email link"}><Envelope /></a>
          <a className='icons-contactme' href={data.contactLinks?.[1]} aria-label={"twitter link"}><Twitter /></a>
          <a className='icons-contactme' href={data.contactLinks?.[2]} aria-label={"linkedin link"}><Linkedin /></a>
          <a className='icons-contactme' href={data.contactLinks?.[3]} aria-label={"medium link"}><Medium /></a>
        </div>
        </div>
      </div>
    </div>
  )
}

export default Sidebar
