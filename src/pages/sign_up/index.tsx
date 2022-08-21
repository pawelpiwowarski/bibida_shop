import type { NextPage } from "next";
import { trpc } from "../../utils/trpc";
import { Layout } from "../../components/Layout";



const Sign_Up: NextPage = () => {
  const hello = trpc.useQuery(["example.hello", { text: "from tRPC" }]);

  return (
 
    <Layout>
  
        <h1 className="text-center text-5xl">This is a sign_up page</h1>


    </Layout>
   
  );
};




export default Sign_Up;
