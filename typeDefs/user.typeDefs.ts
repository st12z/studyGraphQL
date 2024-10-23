import { gql } from "apollo-server-express";
const typeDefsUser = gql`
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
export default typeDefsUser;