import NextAuth, { type NextAuthOptions } from "next-auth";
import { PrismaAdapter } from "@next-auth/prisma-adapter";
import { prisma } from "../../../server/db/client";
import { env } from "../../../env/server.mjs";
import Auth0Provider from "next-auth/providers/auth0";


const stripe =require('stripe')(process.env.STRIPE_URL )


export const authOptions: NextAuthOptions = {
  // Include user.id on session
  callbacks: {

    async signIn({ user, account, profile, email, credentials }) {
    

      if (!user.stripe_id) {
        const {id}= await stripe.customers.create({ description: user.id, email: user.email })

            await prisma.user.update({ 
          where: {
            id: user.id
          },
          data: {
            stripe_id: id
          }
        })

     
      }
      return true
    },
    session({ session, user }) {
      if (session.user) {
        session.user.id = user.id;
     
      }
      return session;
    },
  },
  // Configure one or more authentication providers
  adapter: PrismaAdapter(prisma),
  providers: [
   Auth0Provider({
    clientId: process.env.AUTH0_CLIENT_ID !,
    clientSecret:process.env.AUTH0_CLIENT_SECRET!,
    issuer: process.env.AUTH0_ISSUER!, })

  ],
};

export default NextAuth(authOptions);
