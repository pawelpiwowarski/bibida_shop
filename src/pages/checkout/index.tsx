import type { NextPage } from "next";
import { trpc } from "../../utils/trpc";
import { Layout } from "../../components/Layout";



const Checkout: NextPage = () => {
  const hello = trpc.useQuery(["example.hello", { text: "from tRPC" }]);

  return (
 
    <Layout>
  
   

        <section>


  <div className="relative mx-auto">
  <h1 className="sr-only">Checkout</h1>

      <div className="py-12 bg-gray-50 md:py-24">
        <div className="max-w-lg px-4 mx-auto lg:px-8">
          <div className="flex items-center">
            <span className="w-10 h-10 bg-blue-900 rounded-full"></span>

            <h2 className="ml-4 font-medium">BambooYou</h2>
          </div>

          <div className="mt-8">
            <p className="text-2xl font-medium tracking-tight">$99.99</p>
            <p className="mt-1 text-sm text-gray-500">For the purchase of</p>
          </div>

          <div className="mt-12">
            <div className="flow-root">
              <ul className="-my-4 divide-y divide-gray-200">
                <li className="flex items-center justify-between py-4">
                  <div className="flex items-start">
                    <img
                      className="flex-shrink-0 object-cover w-16 h-16 rounded-lg"
                      src="https://images.unsplash.com/photo-1588099768531-a72d4a198538?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8Y2xvdGhpbmd8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60"
                      alt=""
                    />

                    <div className="ml-4">
                      <p className="text-sm">Vibrant Trainers</p>

                      <dl className="mt-1 space-y-1 text-xs text-gray-500">
                        <div>
                          <dt className="inline">Color:</dt>
                          <dd className="inline">Blue</dd>
                        </div>

                        <div>
                          <dt className="inline">Size:</dt>
                          <dd className="inline">UK 10</dd>
                        </div>
                      </dl>
                    </div>
                  </div>

                  <div>
                    <p className="text-sm">
                      $49.99
                      <small className="text-gray-500">x1</small>
                    </p>
                  </div>
                </li>

                <li className="flex items-center justify-between py-4">
                  <div className="flex items-start">
                    <img
                      className="flex-shrink-0 object-cover w-16 h-16 rounded-lg"
                      src="https://images.unsplash.com/photo-1588099768531-a72d4a198538?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8Y2xvdGhpbmd8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60"
                      alt=""
                    />

                    <div className="ml-4">
                      <p className="text-sm">Vibrant Trainers</p>

                      <dl className="mt-1 space-y-1 text-xs text-gray-500">
                        <div>
                          <dt className="inline">Color:</dt>
                          <dd className="inline">Blue</dd>
                        </div>

                        <div>
                          <dt className="inline">Size:</dt>
                          <dd className="inline">UK 10</dd>
                        </div>
                      </dl>
                    </div>
                  </div>

                  <div>
                    <p className="text-sm">
                      $25
                      <small className="text-gray-500">x2</small>
                    </p>
                  </div>

                </li>

                <div className="col-span-6">
              <button
                className="rounded-lg bg-black text-sm p-2.5 text-white w-full block"
                type="submit"
              >
                Pay Now
              </button>
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




export default Checkout;
