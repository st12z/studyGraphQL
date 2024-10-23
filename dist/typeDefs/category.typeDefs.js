"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const apollo_server_express_1 = require("apollo-server-express");
const typeDefsCategory = (0, apollo_server_express_1.gql) `
    type Category{
      id:ID,
      title:String,
      description:String,
      avatar:String
    }
    type CategoryInput{
      title:String,
      description:String,
      avatar:String
    }
    type Query {
      getListCategory:[Category],
      getCategory(id:ID):Category
    }
  `;
exports.default = typeDefsCategory;
