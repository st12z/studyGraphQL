import express, { Request, Response, Express } from "express";
import dotenv from "dotenv";
import * as database from "./config/database";
import { ApolloServer, gql } from "apollo-server-express";
import { typeDefs } from "./typeDefs/index.typeDefs";
import { resolvers } from "./resolvers/index.resolvers";
import { requireAuth } from "./middleware/auth.middleware";

const startServer = async () => {
  database.connect();
  dotenv.config();
  const port: string = process.env.PORT;
  const app: Express = express();
  //GraphQL
  app.use("/graphql",requireAuth);
  const apolloServer = new ApolloServer({
    typeDefs:typeDefs,
    resolvers:resolvers,
    introspection:true,
    context:({req})=>{
      return {...req}
    }
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