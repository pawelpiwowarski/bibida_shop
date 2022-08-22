import type { NextPage } from "next";
import { trpc } from "../../utils/trpc";
import { Layout } from "../../components/Layout";
import { signIn } from "next-auth/react";
import { useSession, getSession, getProviders } from "next-auth/react"



const Login: NextPage = () => {
  const hello = trpc.useQuery(["example.hello", { text: "from tRPC" }]);
  

  return (
 
    <Layout>
  
  
<div onClick={()=> {

signIn()
}} className="	items-center justify-center px-8 py-4 font-bold transition bg-pink-100 border-4 border-black rounded-xl focus:outline-none focus:ring shadow-[6px_6px_0_0_#000] hover:shadow-none active:bg-pink-50">

<button >
  Login  <span aria-hidden="true" className="ml-1.5" role="img">🤔</span>
</button>

</div>



    </Layout>
   
  );
};




export default Login;
