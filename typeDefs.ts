import { gql } from "apollo-server-express";
const typeDefs = gql`
    type Article{
      id:ID,
      title:String,
      avatar:String,
      description:String,
    }
    type Category{
      id:ID,
      title:String,
      description:String,
      avatar:String
    }
    type Query {
      hello: String,
      getListArticle:[Article],
      getArticle(id:ID):Article,
      getListCategory:[Category],
      getCategory(id:ID):Category
    }
    input ArticleInput{
      title:String,
      avatar:String,
      description:String,
    }
    type Mutation{
      createArticle(article:ArticleInput):Article,
      deleteArticle(id:ID):String,
      updateArticle(id:ID,article:ArticleInput):Article
    }
  `;
export default typeDefs;