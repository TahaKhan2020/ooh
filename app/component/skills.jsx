"use client";
import React,{useState} from 'react'

const Skills = ({data}) => {
    const setBg = (active)=>(activeTab===active ? "bg-yellow":"bg-grey")
    const setAlignment = (tab)=>tab==="soft" ? "text-left":"text-right"
    const [activeTab,setActiveTab] = useState("soft");
    const tabs = ("");
    
  return (
    <div>
        <div className='flex'>
    {["soft","hard"].map((el)=>(<button key={el} type='button' 
    className={`btn ${setBg(el)} ${setAlignment(el)}` } 
    onClick={()=>setActiveTab(el)}>{el}Skills</button>))}
  </div>
  {tabs}
  <ul className={`flex flex-row flex-wrap content-start list-none py-4 gap-2 ${activeTab==='soft' ? 'justify-start':'justify-end'}`}>
    {data[activeTab].map(({icon,text})=>(
        <li key={text} className={'skill'}><span>{icon}</span>{text}</li>
    ))}
    
    
    </ul>
  </div>
    
  )
}

export default Skills
