import React from 'react'
const Navbar = () => {
  return (
    
     <nav className='flex items-center justify-between px-12 py-5 bg-black text-white'>
      <div className='flex gap-1'>
       
       <a href="./" className='text-thapa-400 text-xl'>Darshan Hiragar</a>
      </div>
       <ul className='md:flex md:gap-3 hidden md:block '>
        <li><a href="Portfolio/">Home</a></li>
        <li><a href="/">Home</a></li>
        {/* <li><a href="http://">About</a></li> */}
        <li><a href="Portfolio/skills">Skills</a></li>
        <li><a href="Portfolio/Projects">Projects</a></li>
        <li><a href="Portfolio/Follow">Follow Me</a></li>
       </ul>
       <button className='bg-thapa-400 text-black p-3 rounded-md'><a href='/contact'>Say Hello</a></button>
     </nav> 
  )
}

export default Navbar