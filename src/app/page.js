import Image from 'next/image'
import Navbar from 'components/Navbar'
import UserList from 'components/UserList'
import AddUser from 'components/AddUser'



export default function Home() {
  return (
    <div>
    <Navbar></Navbar>
    <main >
      <AddUser></AddUser>
     
    </main>
     </div>
  )
}
