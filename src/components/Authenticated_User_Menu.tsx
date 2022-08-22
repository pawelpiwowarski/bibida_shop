import type { NextPage } from "next";
import { useSession } from "next-auth/react"
import { signOut } from "next-auth/react"


const Authenticated_User_Menu = () => {
    const {data: session, status} = useSession()
 
  return (
   
<div>
<h1> {session?.user?.email}</h1>
<button onClick={()=> {
  signOut({redirect: false, callbackUrl: "/api/auth/logout"})
}}> Logout </button>
</div>
  
  );
};




export default Authenticated_User_Menu;
