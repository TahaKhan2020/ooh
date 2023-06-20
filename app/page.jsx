import React from 'react'
import AboutMe from './component/about-me'
import {aboutMe,skills,professionalData, AcademicData,Certification,projects,activities,languages} from '../app/data/page-data'
import ProfessionaExperience from './component/professiona-experience'
import Academic from './component/academic'
import Certifications from './component/Certifications'
import Project from './component/Projects'
import CurriAct from './component/curriact'
import Languages from './component/language'
const page = () => {
  return (
    <div>
      
      <AboutMe data={aboutMe} skills={skills}/>
      <ProfessionaExperience data={professionalData}/>
      <Academic data={AcademicData}/>
      <Certifications data={Certification}/>
      <Project data={projects}/>
      <CurriAct data={activities}/>
      <Languages data={languages}/>
    </div>
  )
}

export default page
