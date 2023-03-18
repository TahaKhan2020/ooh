import React, {useId} from 'react'
import Skills from './skills';


const AboutMe = ({data,skills}) => {
    const id = useId();
    const {title,body} = data;
  return (
    <section>
    <div>
      <h2 className='mb-8'>{title}</h2>
      {body?.map((el, i)=>(
        <p key={`${id}_${i}`} className='mb-6'>{el}</p>
      ))}
    </div>
    <Skills data={skills}/>
    
    </section>
  )
}

export default AboutMe
