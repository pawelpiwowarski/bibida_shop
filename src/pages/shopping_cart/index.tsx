import type { GetServerSideProps, GetServerSidePropsContext, NextPage, NextPageContext } from "next";
import { trpc } from "../../utils/trpc";
import { Layout } from "../../components/Layout";
import { useSession } from "next-auth/react";
import { useEffect } from "react";
import { ShoppingCartUtils, CalculatePrice } from "../../components/ShoppingCartUtils";

import Link from "next/link";
import { useRouter } from "next/router";
type prop_type = {
  cart: {
    price_id: string;
    quantity: string;
}[]
}




const ShoppingCart = ({cart} : prop_type)=> {




  const {data: session, status} = useSession()

  const hello = trpc.useQuery(["example.hello", { text: "from tRPC" }]);
  const {data} = trpc.useQuery(["example.get_products_info_on_cookie",cart])

 

  return (
 
    <Layout>

<section>


<div className="relative mx-auto">
<h1 className="sr-only">Checkout</h1>

    <div className="py-12 bg-gray-50 md:py-24">
      <div className="max-w-lg px-4 mx-auto lg:px-8">
        <div className="flex items-center">
          <span className="w-10 h-10 rounded-full">

<img alt= {session?.user?.id} src={session?.user?.image!}></img>
            
          </span>

          <h2 className="ml-4 font-medium">{session?.user?.email}</h2>
        </div>

        <div className="mt-8">
          <p className="text-2xl font-medium tracking-tight">{`${CalculatePrice(cart,data)}`}</p>
          <p className="mt-1 text-sm text-gray-500">{data?"For the purchase of": ''}</p>
        </div>

        <div className="mt-12">
          <div className="flow-root">
            <ul className="-my-4 divide-y divide-gray-200">

            {  data?.map((val, index)=> {

return ( 
  <ShoppingCartUtils key={index} {...val} quantity = {cart[index]?.quantity}></ShoppingCartUtils>
)
})}


            
                    <div className="col-span-6">
         
            <button
              onClick={async ()=> {

                  await fetch('/api/deletecartcookie', {method: "POST", body: JSON.stringify({}),headers: {'Content-Type': 'application/json'}})
                  location.reload()
              }}
              className="rounded-lg bg-blue-500 text-sm p-2.5 text-white w-full block"
              type="button"
            >
            Clear the basket
            </button>
     


     
          </div>

              <div className="col-span-6">
              <Link href={'/checkout'}>
            <a>
            <button
              className="rounded-lg bg-black text-sm p-2.5 text-white w-full block"
              type="button"
            >
              Checkout 
            </button>
            </a>
            </Link>

     
          </div>
            </ul>
          </div>
        </div>
      </div>
    </div>

 
    </div>

</section>   
    
    </Layout>
   
  );
};



export async function getServerSideProps(context: GetServerSidePropsContext) {

    let cart = ""
  

      if (context.req.cookies.cart !== undefined)  {
        cart = JSON.parse(context.req.cookies.cart)
      }



  return {
    props: {
      cart: cart
    }, // will be passed to the page component as props
  }
}
export default ShoppingCart;
