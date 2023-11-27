import NextAuth from "next-auth";
import EmailProvider from "next-auth/providers/email";
import GoogleProvider from "next-auth/providers/google";
import { MongoDBAdapter } from "@auth/mongodb-adapter";
import clientPromise from "@/libs/mongodbAdapter";
import Users from "@/models/users.model";
import { connectToDB } from "@/libs/dbConnection";

export const authOptions = {
  adapter: MongoDBAdapter(clientPromise),
  providers: [
    EmailProvider({
      server: process.env.EMAIL_SERVER,
      from: process.env.EMAIL_FROM,
    }),
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
  ],
  callbacks: {
    async session({ session }) {
      if (session) {
        await connectToDB();
        const users = await Users.findOne({
          email: session.user.email,
        });
        session.user.id = users._id;
      }

      return session;
    },
  },
  pages: {
    signIn: "/auth/signin",
    newUser: "/user/dashboard",
    // error: "/auth/error",
  },
  theme: {
    colorScheme: "dark",
  },
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
