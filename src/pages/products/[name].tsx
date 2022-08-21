import type { NextPage } from "next";
import { trpc } from "../../utils/trpc";
import { Layout } from "../../components/Layout";



const Product: NextPage = (props: any) => {
  const hello = trpc.useQuery(["example.hello", { text: "from tRPC" }]);

  return (
 
    <Layout>
        <h1 className="text-center text-5xl"> There will be some product here  </h1>
        <h2 className="text-center text-5xl p-10"> {props.name}</h2>

    </Layout>
   
  );
};




export async function getServerSideProps(context: any) {

  



    return {
        props: {
            name: context.query.name
        }
    }
}

export default Product;


