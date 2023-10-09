/** @format */

// auth/[...nextauth].js
import NextAuth from "next-auth";
import credentials from "next-auth/providers/credentials";
import google from "next-auth/providers/google";
import GitHubProvider from "next-auth/providers/github";

const handler = NextAuth({
  providers: [
    credentials({
      // The name to display on the sign-in form (e.g., 'Sign in with...')
      name: "Credentials",
      credentials: {
        username: { label: "Username", type: "text" },
        password: { label: "Password", type: "password" },
      },
      authorize: async (credentials: any) => {
        // Add your custom authentication logic here.
        // For example, check the credentials against a database.
        const { username, password } = credentials;
        const user = { id: 1, name: "Example User" };
        if (user) {
          return Promise.resolve(user);
        } else {
          return Promise.resolve(null);
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
