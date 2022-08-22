import React, { FunctionComponent } from 'react';
import Head from 'next/head';
import Link from 'next/link'
import { useSession } from "next-auth/react"
import Authenticated_User_Menu from './Authenticated_User_Menu';
type LayoutProps = {
  children : React.ReactNode
}
export const Layout=  (props: LayoutProps)=> {
  const {data: session, status} = useSession()

  const authenticated = status == 'authenticated'

    return (<div>  <Head>
        <title>Bibida Shop</title>
        <meta name="description" content="Bibida Shop" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="stylesheet" href="https://rsms.me/inter/inter.css" />

      </Head>


      <nav className="bg-white border-gray-200 px-2 md:px-4 py-2.5 dark:bg-gray-900">
    <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">

      <Link href={'/'}>
        <a  className="flex items-center">
            <img src="https://cdn-icons-png.flaticon.com/512/95/95880.png" className="mr-3 h-6 sm:h-9" alt="Flowbite Logo" />
            <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white">Bibida Shop</span>
        </a>
        </Link>
        <div className="flex items-center md:order-2">
          { !authenticated && <div>
          <Link href={'/login'}><a className="text-gray-800 dark:text-white hover:bg-gray-50 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-4 py-2 md:px-5 md:py-2.5 mr-1 md:mr-2 dark:hover:bg-gray-700 focus:outline-none dark:focus:ring-gray-800">Login
            </a></Link>


          
            </div>
            }

            {
             authenticated &&  <Authenticated_User_Menu></Authenticated_User_Menu>

            
            }
            <Link href={'/shopping_cart'}>
          <a>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" viewBox="0 0 20 20" fill="currentColor">
  <path fillRule="evenodd" d="M10 2a4 4 0 00-4 4v1H5a1 1 0 00-.994.89l-1 9A1 1 0 004 18h12a1 1 0 00.994-1.11l-1-9A1 1 0 0015 7h-1V6a4 4 0 00-4-4zm2 5V6a2 2 0 10-4 0v1h4zm-6 3a1 1 0 112 0 1 1 0 01-2 0zm7-1a1 1 0 100 2 1 1 0 000-2z" clipRule="evenodd" />
</svg>
</a>
</Link>
        </div>
        <div id="mega-menu-icons" className="hidden justify-between items-center w-full md:flex md:w-auto md:order-1">
            <ul className="flex flex-col mt-4 text-sm font-medium md:flex-row md:space-x-8 md:mt-0">
                <li>
                  <Link href={'/products'}> 
                    <a  className="block py-2 pr-4 pl-3 text-blue-600 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-600 md:p-0 dark:text-blue-500 md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-blue-500 md:dark:hover:bg-transparent dark:border-gray-700" aria-current="page">Products</a>
                    </Link>
                </li>
                <li>
                  <Link href={'/about'}>
                    <button id="mega-menu-icons-dropdown-button" data-dropdown-toggle="mega-menu-icons-dropdown" className="flex justify-between items-center py-2 pr-4 pl-3 w-full font-medium text-gray-700 border-b border-gray-100 md:w-auto hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-600 md:p-0 dark:text-gray-400 md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-blue-500 md:dark:hover:bg-transparent dark:border-gray-700">
                        About 
                        <svg aria-hidden="true" className="ml-1 w-5 h-5 md:w-4 md:h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
                    </button>
                    </Link>
                    <div id="mega-menu-icons-dropdown" className="grid absolute z-10 grid-cols-2 w-auto text-sm bg-white rounded-lg border border-gray-100 shadow-md dark:border-gray-700 md:grid-cols-3 dark:bg-gray-700 block" data-popper-reference-hidden="" data-popper-escaped="" data-popper-placement="bottom" >
                      
                      
                    </div>

                
                </li>
                <li>

                    <a href="#" className="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-600 md:p-0 dark:text-gray-400 md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-blue-500 md:dark:hover:bg-transparent dark:border-gray-700">Team</a>

                </li>

             
            </ul>
        </div>
    </div>
</nav>








<div>
   
  
{props.children}
  
</div>
</div>



 )
}