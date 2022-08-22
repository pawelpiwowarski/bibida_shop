import { createRouter } from "./context";
import { z } from "zod";
import * as bcrpyt from 'bcrypt'
import * as cookie from 'cookie'


export const cartRouter = createRouter()
  .mutation("add_to_cart", {
    input: z
      .object({
        price_id: z.string().nullish().optional(),
        quantity: z.string()
      })
      .nullish(),
   async  resolve({ ctx, input }) {

  


        

        
        
      return {

      };
    },
  })
  
     

      
  ;
