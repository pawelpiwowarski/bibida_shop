import type { NextPage } from "next";
import { trpc } from "../utils/trpc";
import { Layout } from "../components/Layout";
import Link from "next/link";



const Home: NextPage = () => {
  const hello = trpc.useQuery(["example.hello", { text: "from tRPC" }]);
  const all = trpc.useQuery(["example.getAll"])


  console.log(all.data)

  return (
 
    <Layout>

      <h1 className="text-center text-5xl"> Welcome to Bibida Shop  </h1>



<section>
  <div className="max-w-screen-xl px-4 py-12 mx-auto sm:px-6 lg:px-8">
    <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 lg:items-stretch">
      <div className="flex items-center p-8 bg-gray-100 rounded">
        <div className="mx-auto text-center lg:text-left">
          <h2 className="text-2xl font-bold">
            Bottles
          </h2>

          <p className="mt-4 text-sm text-gray-700 max-w-[45ch]">
        View our collections of unique bottles 
          </p>
          <Link  href="/products">
          <a

            className="inline-block px-6 py-3 mt-6 text-sm text-white bg-black rounded"
          >
            View the Bibida Collection 
          </a>
          </Link>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-4 lg:col-span-2 lg:grid-cols-3 lg:py-12">
        <Link href="/products/1">
        <a
          
          className="block"
        >
          <div className="aspect-w-1 aspect-h-1">
            <img
              loading="lazy"
              alt="Bibida Simple Bottle"
              className="object-cover rounded"
              src="https://ae01.alicdn.com/kf/Hd71b8430887c49ada7115f397e84195be/1000ml-przezroczysta-plastikowa-butelka-wody-trwa-a-du-a-pojemno-butelka-na-sok-z-wod-mleko.jpg_Q90.jpg_.webp"
            />
          </div>

          <div className="mt-2">
            <h5 className="font-medium">
            Bibida Simple Bottle
            </h5>

            <p className="mt-1 text-sm text-gray-700">
              10 EUR
            </p>
          </div>
        </a>
      </Link>
       
      </div>
    </div>
  </div>
</section>

    </Layout>
   
  );
};




export default Home;
