import { createRouter } from "./context";
import { z } from "zod";
import { Product } from "@prisma/client";

export const exampleRouter = createRouter().query('get_products_info_on_cookie', {
  input: z.array(z.object({price_id: z.string(), quantity: z.string()})), async resolve({ctx, input}) {
    
     const array: Array<Product | null> = await Promise.all(input.map(async (val)=> {

        return (await ctx.prisma.product.findFirst({where: {
          default_price: val.price_id
        }}))


         
     }))

     return array
  }
})
  .query("hello", {
    input: z
      .object({
        text: z.string().nullish(),
      })
      .nullish(),
    resolve({ input }) {
      return {
        greeting: `Hello ${input?.text ?? "world"}`,
      };
    },
  })
  .query("getAll", {
    async resolve({ ctx }) {
      return await ctx.prisma.example.findMany();
    },
  })
  .query('Get_Single_Item', {
    input: z.object({
      text: z.string(),
    }),
   async resolve({ctx, input}) {

     return await ctx.prisma.product.findUnique({where: {
        id: input.text
      }})
     

      
    }
  })
  ;
