import type { NextPage } from "next";
import { trpc } from "../../utils/trpc";
import { Layout } from "../../components/Layout";



const Cancel: NextPage = () => {
  const hello = trpc.useQuery(["example.hello", { text: "from tRPC" }]);

  return (
 
    <Layout>
  
        <h1 className="text-center text-5xl">Your payement has been canceled</h1>



    </Layout>
   
  );
};




export default Cancel;
