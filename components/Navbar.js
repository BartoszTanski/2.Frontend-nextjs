
import { signOut, useSession} from 'next-auth/react'
import React from 'react'
import Image from 'next/image';

const Navbar = () => {
 
    //const {data:session} = useSession();

  return (
    <div className='bg-gray-800 '>
        <div className='h-16 px-8 flex items-center'>
            <p className='text-white font-bold flex-auto'>User Managment System</p>
            {//session && 
            (
              <div className='flex items-center sm:space-x-2 justify-end'>

                <p className='text-white font-bold'>{
                //session?.user.name
                }</p>
              </div>
            )}
        </div>
    </div>
  )
}

export default Navbar
/*                <Image 
                onClick={signOut}
                className='rounded-full cursor-pointer'
                height="30" 
                width="30" 
                fill='fixed'
                title="Click to Logout"
                </div>src={session.user.image}>

                </Image>*/