import { createRouter } from "./context";
import { z } from "zod";
const stripe = require('stripe')(process.env.STRIPE_URL);

export const stripeRouter = createRouter().mutation("create-checkout-session", {
    input: z.object({
        price_id: z.string().optional().nullish(),
        quantity: z.string()
    }), async resolve({ctx, input}) {
        
        const session = await stripe.checkout.sessions.create({
            line_items: [{
                price: input.price_id,
                quantity: input.quantity
            }],
        mode: 'payment',
        success_url: `${process.env.NEXTAUTH_URL}/success`,
        cancel_url: `${process.env.NEXTAUTH_URL}/cancel`


        })

        return session.url

    }

})