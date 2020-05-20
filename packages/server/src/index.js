import { ApolloServer, gql } from "apollo-server-express";
import express from "express";
import mongoose from "mongoose";
import { resolvers } from "./resolvers";
import { typeDefs } from "./typeDefs";

const startServer = async () => {
  const app = express();

  const server = new ApolloServer({
    typeDefs,
    resolvers
  });

  server.applyMiddleware({ app });

  await mongoose.connect("mongodb://eks-testing-mongo-user001.cloud.zingbox.com:27017/xiar", {
    useNewUrlParser: true
  });

  app.listen({ port: 4000 }, () =>
    console.log(`🚀 Server ready at http://localhost:4000${server.graphqlPath}`)
  );
};

startServer();
