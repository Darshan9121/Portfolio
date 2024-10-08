import React from 'react'
import Project from './subComponents/Project'
import ProjectData from "../data/project.json"

const Projects = () => {
  return (
    <div className='flex flex-col justify-center items-center md:px-12' id='#project'>
      <h2 className='text-2xl text-thapa-400 font-bold'>Projects</h2>
      <h3 className='text-xl font-bold'>Frontend Projects(Tailwind)</h3>
      <Project data={ProjectData.frontend}/>
      <h3 className='text-xl font-bold'>Javascript Projects</h3>
      <Project data={ProjectData.Js}/>
      <h3 className='text-xl font-bold' >Complete Projects:Frontend+Backend</h3>
      <Project data={ProjectData.complete}/>
    </div>
  )
}

export default Projects