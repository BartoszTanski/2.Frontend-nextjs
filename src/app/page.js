import Image from 'next/image'
import Navbar from 'components/Navbar'
import UserList from 'components/UserList'



export default function Home() {
  return (
    <div>
    <Navbar></Navbar>
    <main >
      <UserList></UserList>
    </main>
     </div>
  )
}
