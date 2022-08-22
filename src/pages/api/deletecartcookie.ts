// src/pages/api/examples.ts
import type { NextApiRequest, NextApiResponse } from "next";
import * as cookie from 'cookie'


const delete_cart_cookie = async (req: NextApiRequest, res: NextApiResponse) => {





   res?.setHeader('Set-Cookie', cookie.serialize("cart", " ", {
        httpOnly: true,
        secure: process.env.NODE_ENV !== "development",
        maxAge: -1,
        sameSite: "strict",
        path: "/"
      }));

      res!.statusCode = 200
      res?.json({success: true})
};

export default delete_cart_cookie;
