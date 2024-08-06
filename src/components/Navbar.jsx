import React from 'react'
const Navbar = () => {
  return (
    
     <nav className='flex items-center justify-between px-12 py-5 bg-black text-white'>
      <div className='flex gap-1'>
       
       <a href="http://" className='text-thapa-400 text-xl'>Darshan Hiragar</a>
      </div>
       <ul className='md:flex md:gap-3 hidden md:block '>
        {/* <li><a href="http://">Home</a></li> */}
        <li><a href="http://">About</a></li>
        <li><a href="http://">Skills</a></li>
        <li><a href="http://">Projects</a></li>
        <li><a href="http://">Internship</a></li>
       </ul>
       <button className='bg-thapa-400 text-black p-3 rounded-md'>Say Hello</button>
     </nav> 
  )
}

export default Navbar