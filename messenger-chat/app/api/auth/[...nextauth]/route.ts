/** @format */

// auth/[...nextauth].js
import NextAuth from "next-auth";
import credentials from "next-auth/providers/credentials";
import google from "next-auth/providers/google";
import GitHubProvider from "next-auth/providers/github";
import axios from "axios";

const handler = NextAuth({
  providers: [
    credentials({
      // The name to display on the sign-in form (e.g., 'Sign in with...')
      name: "Credentials",
      credentials: {
        email: { label: "Username", type: "text" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials: any, req) {
        const { email, password } = credentials;
        const response = await axios.post("http://localhost:5000/api/getuser", {
          email,
        });

        console.log(response.data.user);
        if (response.data.user) {
          return response.data.user;
        } else {
          return null;
        }
      },
    }),
    google({
      clientId: process.env.GOOGLE_ID,
      clientSecret: process.env.GOOGLE_SECRET,
    }),
    GitHubProvider({
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET,
    }),
  ],

  session: {
    // Configure your session options here.
    strategy: "jwt",
    maxAge: 30 * 24 * 60 * 60, // 30 days
  },
  secret: process.env.JWT_SECRET,
  // Add other global options here as needed.
});

export { handler as GET, handler as POST };
