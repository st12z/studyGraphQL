"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const apollo_server_express_1 = require("apollo-server-express");
const typeDefsUser = (0, apollo_server_express_1.gql) `
    type User{
      id:ID,
      fullName:String,
      email:String,
      token:String,
      code:Int,
      message:String,
    }
    input UserInput{
      fullName:String,
      email:String,
      password:String,
    }
    input loginUser{
      email:String,
      password:String
    }
    type Query{
      getUser:User,
    }
    type Mutation{
      createUser(user:UserInput):User,
      loginUser(user:loginUser):User
    }
  `;
exports.default = typeDefsUser;
