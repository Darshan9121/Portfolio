import React from 'react'

const Contact = () => {
  return (
    <div className='flex flex-col justify-center gap-2  p-5 items-center md:gap-5 md:my-10 bg-gray-50 '>
     <h2 className='text-2xl text-thapa-400 font-bold'>Contact Me</h2>
      <form class="w-full max-w-sm">
    <div class="md:flex md:items-center mb-6">
    <div class="md:w-1/3">
      <label class="block text-black font-bold md:text-right mb-1 md:mb-0 pr-4" for="inline-password">
        Email Id
      </label>
    </div>
    <div class="md:w-2/3">
      <input class="bg-white appearance-none border-2 border-black rounded w-full py-2 px-4 text-black leading-tight focus:outline-none focus:bg-white focus:border-thapa-400" id="inline-password" type="email" placeholder="Email id"/>
    </div>
  </div>
  <div class="md:flex md:items-center mb-6">
    <div class="md:w-1/3">
      <label class="block text-black font-bold md:text-right mb-1 md:mb-0 pr-4" for="inline-password">
        Message
      </label>
    </div>
    <div class="md:w-2/3">
      <input class="bg-white appearance-none border-2 border-black rounded w-full py-2 px-4 text-black leading-tight focus:outline-none focus:bg-white focus:border-thapa-400" id="inline-password" type="text" placeholder="Message"/>
    </div>
  </div>
  <div class="md:flex md:items-center md:justify-center  ">
    
      <button class="shadow hover:bg-thapa-400 hover:text-white  text-thapa-400 border-2 border-thapa-400 focus:shadow-outline focus:outline-none  font-bold py-2 px-4 rounded" type="button">
        Send Me
      </button>
    </div>
  
</form>
    </div>
  )
}

export default Contact