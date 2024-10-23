import express, { Request, Response, Express } from "express";
import dotenv from "dotenv";
import * as database from "./config/database";
import Article from "./models/article.model";
import { ApolloServer, gql } from "apollo-server-express";
import typeDefs from "./typeDefs";
import resolvers from "./resolvers";
const startServer = async () => {
  database.connect();
  dotenv.config();
  const port: string = process.env.PORT;
  const app: Express = express();
  //GraphQL
  const apolloServer = new ApolloServer({
    typeDefs,
    resolvers,
  });
  await apolloServer.start();
  apolloServer.applyMiddleware({
    app: app,
    path: "/graphql",
  });

  app.listen(port, () => {
    console.log(`App listening on port ${port}`);
  });
};
startServer();