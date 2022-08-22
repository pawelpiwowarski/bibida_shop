import type { NextPage } from "next";
import { useState } from "react";
import Link from 'next/link'
import { image_check } from "../utils/image_check";
interface ItemAddedProps {
    id?: string
    name? : string
    description?: string
    images?: string[],
    call: ()=> void,
    quantity: string

}

const ItemAdded = ({id, name, description, images,call, quantity}: ItemAddedProps) => {



  return (
 
    <div
    className="block w-screen max-w-sm p-10 border sm:px-12 bg-stone-100 border-stone-600 my-10"
    aria-modal="true"
    aria-label="Item added to your cart"
    role="dialog"
    tabIndex={-1}
  >
    <div className="flex items-start justify-between">
      <h2 className="flex items-center text-gray-700">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-4 h-4"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M5 13l4 4L19 7"
          />
        </svg>
  
        <span className="ml-2 text-sm"> Item added to your cart </span>
      </h2>
  
      <button
        className="-mt-6 -mr-6 transition-transform sm:-mr-8 hover:scale-110"
        type="button"
        aria-label="Close"
        onClick={()=> {
             call()
        }}

      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-5 h-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M6 18L18 6M6 6l12 12"
          />
        </svg>
      </button>
    </div>
  
    <div className="flex items-start pt-8 pb-12">
      <img
        className="object-cover w-16 h-16 rounded-lg"
        src={image_check(images)}
        alt="Basic Tee"
      />
  
      <div className="ml-4">
        <h3 className="text-sm">{name}</h3>
    
        <dl className="mt-1 space-y-1 text-xs text-gray-500">
          <div>
            <dt className="inline">Quantity: </dt>
            <dd className="inline">{quantity}</dd>
          </div>
  
      
        </dl>
      </div>
    </div>
  
    <div className="space-y-4 text-center">
    <Link href="/shopping_cart"> 
      <a
        className="block p-3 text-sm border rounded-lg border-stone-600 text-stone-500 hover:ring-1 hover:ring-stone-400 hover:text-stone-600"
        href="/cart"
      >
        View my cart
      </a></Link>
    

    <Link href={"/checkout"}>
      <form >
        <button
          className="block w-full p-3 text-sm rounded-lg bg-stone-600 text-stone-100 hover:bg-stone-500"
          type="submit"
        >
          Check out
        </button>
      </form>
      </Link>

      <a
        className="inline-block text-sm tracking-wide underline underline-offset-4 text-stone-500 hover:text-stone-600"
        onClick={()=> {
            call()
        }}
      >
        Continue shopping
      </a>


    </div>
  </div>
  


   
  );
};




export default ItemAdded;