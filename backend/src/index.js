import { ApolloServer } from "@apollo/server";
import { expressMiddleware } from "@apollo/server/express4";
import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import typeDefs from "./schemas/index.js";
import resolvers from "./resolvers/index.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 4000;

const server = new ApolloServer({
  typeDefs,
  resolvers,
});

await server.start();

// CORS Configuration
app.use(
  cors({
    origin: process.env.FRONTEND_URL,
    credentials: true,
  })
);

app.use(express.json());

app.use(
  "/graphql",
  expressMiddleware(server, {
    context: async ({ req }) => ({
      headers: req.headers,
    }),
  })
);

app.listen(PORT, () => {
  console.log(`🚀 Server ready at http://localhost:${PORT}/graphql`);
});
