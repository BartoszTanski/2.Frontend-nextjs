import Navbar from 'components/Navbar'
import UserList from 'components/UserList'
import AddUser from 'components/AddUser'
import Login from 'components/Login'
import { getSession } from 'next-auth/react'
import Head from './head'





export default function Home(/*{session}*/) {
 
  
  //if(!session) return <Login/>;
  return (
    <div>
      <Head>
      </Head>
      
      <Navbar></Navbar>
    <main >
    
      <AddUser></AddUser>
    </main>
     </div>
  )
}

/*export async function getServerSideProps(context){
  const session = await getSession(context);
  return {
    props:{session}
  }
}*/