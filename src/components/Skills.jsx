import React from 'react'
import Skill from "./subComponents/Skill"
import SkillsData from "../data/skills.json";

const Skills = () => {
 {
  console.log(SkillsData.frontend)
 }
 
  return (
    <div className='flex flex-col justify-center items-center p-5 md:gap-1 bg-gray-50 md:py-8 ' id='#skill'>
      <h2 className='text-2xl text-thapa-400 font-bold'>Skills</h2>
      <h3 className='font-bold'>Frontend Technologies</h3>
      <Skill data={SkillsData.frontend} />
      <h3 className='font-bold' >Backend Technologies</h3>
      <Skill data={SkillsData.Backend} />
    </div>
  )
}

export default Skills;