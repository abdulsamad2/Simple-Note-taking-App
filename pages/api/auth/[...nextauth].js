import {connectToDatabase} from "@/helpers/db";
import {verifyPassword} from "@/helpers/hashPassword";
import NextAuth from "next-auth/next";
import CredentialsProvider from "next-auth/providers/credentials";

export default NextAuth({
  session: {
    jwt: true
  },
  providers: [
    CredentialsProvider({
      async authorize(credentials) {
        if (credentials.email !== "test@test.com" && password !== "123") {
          return nul;
        }
        //   const client = await connectToDatabase();
        //   const usersCollection = client.db().collection("users");
        //   const user = await usersCollection.findOne({email: credentials.email});

        //   if (!user) {
        //     throw new Error("can't find this user");
        //   }
        //   const isValid = await verifyPassword(credentials.password, user.password);

        //   if (isValid) {
        //     console.log("getting undefined somewhere here");
        //     return {email: user.email};
        //   }
        //   throw new Error("can't match passowrd");
        // }
        return {id: "123"};
      }
    })
  ]
});
