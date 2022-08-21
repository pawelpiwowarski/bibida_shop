import type { NextPage } from "next";
import { trpc } from "../../utils/trpc";
import { Layout } from "../../components/Layout";



const ShoppingCart: NextPage = () => {
  const hello = trpc.useQuery(["example.hello", { text: "from tRPC" }]);

  return (
 
    <Layout>
        <h1 className="text-center text-5xl"> There will be list of products which are currently in your shopping cart  </h1>


    </Layout>
   
  );
};




export default ShoppingCart;
