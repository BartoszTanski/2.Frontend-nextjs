import {React, useState, useEffect} from 'react'
import User from './User'


const UserList = () => {
    const  USER_API_BASE_URL="http://localhost:8080/api/v1/users";
    const [users, setUsers] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
      const fetchData = async() =>{
        setLoading(true);
        try{

        }catch(error){
            console.log(error);
        }
      }
    
      
    })
    

  return (
    <div className='container mx-auto my-8'>
        <div className='flex shadow border-b'>
            <table className='min-w-full'>
                <thead className='bg-gray-50'>
                    <tr>
                        <th className='text-left font-medium text-gray-800 uppercase tracking-wide py-3 px-6'>
                           First Name
                        </th>
                        <th className='text-left font-medium text-gray-800 uppercase tracking-wide py-3 px-6'>
                           Last Name
                        </th >
                        <th className='text-left font-medium text-gray-800 uppercase tracking-wide py-3 px-6'>
                           Email Id
                        </th>
                        <th className='text-right font-medium text-gray-800 uppercase tracking-wide py-3 px-6'>
                           Actions
                        </th>
                    </tr>
                </thead>
                <tbody>
                   <User></User>
                </tbody>
            </table>
        </div>
    </div>
  )
}

export default UserList