import Category from "../models/category.model";
import Article from "../models/article.model";
import md5 from "md5";
import User from "../models/user.model";
import { generate_token } from "../helper/generate";
const resolversUser = {
  Query:{
    getUser:async(_,args,context)=>{
      const {id}=args;
      const user=context.user;
      console.log(user);
      if(!user){
        return{
          code:400,
          message:"Not found!"
        }
      }
      return{
        code:200,
        message:"found",
        id:user.id,
        fullName:user.fullName,
        email:user.email,
        token:user.token
      }
    }
  },
  Mutation: {
    createUser:async(_,args)=>{
      const {user}=args;
      const emailExist=await User.findOne({email:user.email,deleted:false});
      if(emailExist){
        return{
          code:400,
          message:"Email đã tồn tại!"
        }
      }
      else{
        user.password=md5(user.password);
        user.token=generate_token(10);
        const newUser=new User(user);
        await newUser.save();
        return{
          code:200,
          id:newUser.id,
          message:"Thành công",
          fullName:newUser.fullName,
          email:newUser.email,
          token:newUser.token
        }
      }
    },
    loginUser:async(_,agrs)=>{
      const  {email,password}=agrs.user;
      const user =await User.findOne({email:email,password:md5(password)});
      if(!user){
        return{
          code:400,
          message:"Tài khoản hoặc mật khẩu sai!"
        }
      }
      return{
        fullName:user.fullName,
        email:user.email,
        token:user.token,
        code:200,
        message:"Đăng nhập thành công!"
      }
    }
  },
};
export default resolversUser;
