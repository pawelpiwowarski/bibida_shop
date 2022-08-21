import type { NextPage } from "next";
import { trpc } from "../../utils/trpc";
import { Layout } from "../../components/Layout";



const Products: NextPage = () => {
  const hello = trpc.useQuery(["example.hello", { text: "from tRPC" }]);

  return (
 
    <Layout>
        <h1 className="text-center text-5xl"> There will be list of products here  </h1>


    </Layout>
   
  );
};




export default Products;
