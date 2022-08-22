import type { NextPage } from "next";
import { trpc } from "../../utils/trpc";
import { Layout } from "../../components/Layout";
import { useRouter } from 'next/router'
import ItemAdded from "../../components/ItemAdded";
import { useState } from "react";



const Product: NextPage = (props: any) => {




  const router = useRouter()
  const [added_to_cart, add_to_cart] = useState(false)
  const [quantity, setquantity] = useState("1")
  const {data} = trpc.useQuery(['example.Get_Single_Item', {text: props.name}])
  


const serCartCookie = trpc.useMutation('cartadd_to_cart')
const stripeCheckout = trpc.useMutation('stipe.create-checkout-session')



  return (
 
    <Layout>



<section>
  <div className="relative max-w-screen-xl px-4 py-8 mx-auto">
    <div className="grid items-start grid-cols-1 gap-8 md:grid-cols-2">
      <div className="grid grid-cols-2 gap-4 md:grid-cols-1">
        <div className="aspect-w-1 aspect-h-1">
          <img
            alt="Mobile Phone Stand"
            className="object-cover rounded-xl"
            src={data?.images[0]}
          />
        </div>

        <div className="grid grid-cols-2 gap-4 lg:mt-4">
          <div className="aspect-w-1 aspect-h-1">
            <img
              alt="Mobile Phone Stand"
              className="object-cover rounded-xl"
              src={data?.images[1]}
            />
          </div>

          <div className="aspect-w-1 aspect-h-1">
            <img
              alt="Mobile Phone Stand"
              className="object-cover rounded-xl"
              src={data?.images[2]}
            />
          </div>

          <div className="aspect-w-1 aspect-h-1">
            <img
              alt="Mobile Phone Stand"
              className="object-cover rounded-xl"
              src={data?.images[3]}
            />
          </div>

          <div className="aspect-w-1 aspect-h-1">
            <img
              alt="Mobile Phone Stand"
              className="object-cover rounded-xl"
              src={data?.images[4]}
            />
          </div>
        </div>
      </div>

      <div className="sticky top-0">

        <div className="flex justify-between mt-8">
          <div className="max-w-[35ch]">
            <h1 className="text-2xl font-bold">
              {data?.name}
            </h1>

            <p className="mt-0.5 text-sm">
              Highest Rated Product
            </p>

            <div className="flex mt-2 -ml-0.5">
              <svg
                className="w-5 h-5 text-yellow-400"
                xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"
              >
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>

              <svg
                className="w-5 h-5 text-yellow-400"
                xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"
              >
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>

              <svg
                className="w-5 h-5 text-yellow-400"
                xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"
              >
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>

              <svg
                className="w-5 h-5 text-yellow-400"
                xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"
              >
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>

              <svg
                className="w-5 h-5 text-gray-200"
                xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"
              >
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
            </div>
          </div>

          <p className="text-lg font-bold">
            {`${data?.price}€`} 
          </p>
        </div>

        <details className="relative mt-4 group">
          <summary className="block">
            <div>
              <div className="prose max-w-none group-open:hidden">
                <p>
{data?.description}
                </p>
              </div>

              <span className="mt-4 text-sm font-medium underline cursor-pointer group-open:absolute group-open:bottom-0 group-open:left-0 group-open:mt-0">
                Read More
              </span>
            </div>
          </summary>

          <div className="pb-6 prose max-w-none">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa veniam dicta beatae eos ex error culpa delectus rem tenetur, architecto quam nesciunt, dolor veritatis nisi minus inventore, rerum at recusandae?
            </p>

            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat nam sapiente nobis ea veritatis error consequatur nisi exercitationem iure laudantium culpa, animi temporibus non! Maxime et quisquam amet. A, deserunt!
            </p>
          </div>
        </details>

        <form className="mt-8">
          <div className="flex mt-8">
            <div>
              <label htmlFor="quantity" className="sr-only">Qty</label>

              <input
                type="number"
                id="quantity"
                min={quantity}
                value={quantity}
                onChange = {(e)=> {
                  setquantity(e.target.value)
                }}
                className="w-12 py-3 text-xs text-center border-gray-200 rounded no-spinners"
              />
            </div>

            <button
              onClick={ async ()=> {
                

                const response = await fetch('/api/cookie', { method: "POST",headers: {'Content-Type': 'application/json'}, body: 
                  JSON.stringify({
                    quantity,
                    price_id: data?.default_price
                  })
                })

                console.log(response.status)
                add_to_cart(true)

              }}
              type="button"
              className="block px-5 py-3 ml-3 text-xs font-medium text-white bg-green-600 rounded hover:bg-green-500"
            >
              Add to Cart
            </button>

            <button
         
              type="button"
              className="block px-5 py-3 ml-3 text-xs font-medium text-white bg-teal-600 rounded hover:bg-teal-500"
              onClick =  {async ()=> {
                const url = await stripeCheckout.mutateAsync({price_id: data?.default_price, quantity})
                router.push(url)
              }}
            >
            Instant Buy 
            </button>
          </div>
        </form>
        
        { added_to_cart && 
        <ItemAdded {...data} quantity = {quantity} call = {()=> {
          add_to_cart(false)
        }} ></ItemAdded>
}
      </div>
    </div>
  </div>
</section>




      
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


