// src/pages/api/examples.ts
import type { NextApiRequest, NextApiResponse } from "next";
import * as cookie from 'cookie'

//Holy grail of setting up cookies 
// It works in a retarded way but it works :D

export type cookie_individual_value = {
    price_id: string
    quantity: string
}
const set_cart_cookie = async (req: NextApiRequest, res: NextApiResponse) => {





    let cookie_value: Array<cookie_individual_value>
    
    if (!req.cookies.cart) 
    {
      cookie_value =  [req.body]
    }

    else {
    
        cookie_value = JSON.parse(req.cookies.cart)

  
           if (!(cookie_value.some((val)=> {

            if (val.price_id === req.body.price_id) {
                val.quantity = (parseInt(val.quantity) + parseInt(req.body.quantity)).toString()
            }
            return val.price_id == req.body.price_id
           })))

           {
            cookie_value.push(req.body)
           }
        
    }

    
    res?.setHeader('Set-Cookie', cookie.serialize("cart", JSON.stringify(cookie_value), {
        httpOnly: true,
        secure: process.env.NODE_ENV !== "development",
        maxAge: 10000,
        sameSite: "strict",
        path: "/"

 
      }))


    res!.statusCode = 200
    res?.json({success: true})

};

export default set_cart_cookie;
