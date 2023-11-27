import { connectToDB } from "@/libs/dbConnection";
import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import EmailProvider from "next-auth/providers/email";

import { MongoDBAdapter } from "@auth/mongodb-adapter";
import clientPromise from "@/libs/mongodbAdapter";

export const authOptions = {
  // adapter: MongoDBAdapter(connectToDB),
  adapter: MongoDBAdapter(clientPromise),
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
    EmailProvider({
      server: process.env.EMAIL_SERVER,
      from: process.env.EMAIL_FROM,
    }),
  ],
  callbacks: {
    async signIn({ profile }) {
      try {
        console.log("user signed in", profile);

        // await connectToDB();

        // // if user not exists then insert a new user to database
        // const userExists = await Users.findOne({
        //   email: profile.email,
        // });
        // if (!userExists) {
        //   await Users.create({
        //     username: profile.name,
        //     email: profile.email,
        //     image: profile.picture,
        //   });
        // }

        return true;
      } catch (err) {
        console.log("Error while sign in: ", err.message);
        return false;
      }
    },
    async session({ session }) {
      // const currentUser = await Users.findOne({
      //   email: session.user.email,
      // });
      // session.user.id = currentUser._id;
      return session;
    },

    // async redirect(url, baseUrl) {
    //   return baseUrl;
    // }
  },
  // pages: {
  //   signIn: "/auth/signin",
  //   signUp: "/auth/signin",
  //   // error: "/auth/signin/error",
  //   newUser: "/dashboard",
  // },
  theme: {
    colorScheme: "dark",
  },
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
