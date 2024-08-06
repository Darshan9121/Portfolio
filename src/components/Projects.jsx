import React from 'react'
import Project from './subComponents/Project'

const Projects = () => {
  return (
    <div className='flex flex-col justify-center items-center md:px'>
      <h2 className='text-2xl text-thapa-400 font-bold'>Projects</h2>
      <h3 className='text-xl font-bold'>Frontend Projects(Tailwind)</h3>
      <Project/>
      <h3 className='text-xl font-bold'>Javascript Projects</h3>
      <Project/>
      <h3 className='text-xl font-bold'>Complete Projects:Frontend+Backend</h3>
      <Project/>
    </div>
  )
}

export default Projects