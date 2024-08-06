import React from 'react'

const Social = () => {
  return (
    <div className='flex justify-evenly items-center flex-col gap-3 md:py-5 md:my-5'> 
     <h2 className='text-2xl text-thapa-400 font-bold'>Follow Me</h2>

        <ul class="flex flex-row gap-5">
    <li>
      <a href="http://"
        ><img src="https://tse2.mm.bing.net/th?id=OIP.fqZ9-PPqcG_cm0k3JfoINQHaEK&pid=Api&P=0&h=180"  className="w-[120px] h-[100px] object-cover" alt="footer_img"
      /></a>
    </li>
    <li>
      <a href="http://"
        ><img src="http://1000logos.net/wp-content/uploads/2017/02/New-Instagram-logo.jpg" className="w-[120px] h-[100px] object-contain"  alt="footer_img"
      /></a>
    </li>
    <li>
      <a href="http://"
        ><img src="https://logodownload.org/wp-content/uploads/2015/04/whatsapp-logo-7.png"  className="w-[120px] h-[100px] object-contain" alt="footer_img"
      /></a>
    </li>
 
  </ul></div>
  )
}

export default Social