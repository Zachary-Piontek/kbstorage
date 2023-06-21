import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import { PrismaAdapter } from "@next-auth/prisma-adapter";
import { PrismaClient } from "@prisma/client";
import Stripe from "stripe";

// next auth needs pages api folder for auth to work properly, I believe docs for update in next version with fix this 

const prisma = new PrismaClient();

// need to pass to check if user is authenticated
export const options = {
    adapter: PrismaAdapter(prisma),
    providers: [
        // start with google auth
        GoogleProvider({
            // added as string to avoid error for typescript and env files
            clientId: process.env.GOOGLE_CLIENT_ID as string,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
        }),
    ],
    // this event if for creating only one per user(sign up stripe customer)
    events: {
        createUser: async ({ user }: any) => {
            const stripe = new Stripe(process.env.STRIPE_SECRET_KEY as string, {
                apiVersion: "2022-11-15",
            });

            if (user.name && user.email) {
                const customer = await stripe.customers.create({
                    email: user.email,
                    name: user.name,
                });

                await prisma.user.update({
                    where: { id: user.id },
                    data: { stripeCustomerId: customer.id },
            })
        }
    },
},
};

export default NextAuth(options);