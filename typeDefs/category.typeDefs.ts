import { gql } from "apollo-server-express";
const typeDefsCategory = gql`
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
export default typeDefsCategory;