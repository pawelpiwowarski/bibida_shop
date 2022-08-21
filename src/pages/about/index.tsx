import type { NextPage } from "next";
import { trpc } from "../../utils/trpc";
import { Layout } from "../../components/Layout";



const About: NextPage = () => {
  const hello = trpc.useQuery(["example.hello", { text: "from tRPC" }]);

  return (
 
    <Layout>
  
        <h1 className="text-center text-5xl">This is an about page </h1>


    </Layout>
   
  );
};




export default About;
