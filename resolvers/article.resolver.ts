import Category from "../models/category.model";
import Article from "../models/article.model";
const resolversArticle = {
  Query: {
    getListArticle: async () => {
      const articles = await Article.find({ deleted: false });
      return articles;
    },
    getArticle: async (_, args) => {
      const { id } = args;
      const article = await Article.findOne({ _id: id, deleted: false });
      return article;
    }
  },
  Article:{
    category:async(article)=>{
      const categoryId=article.categoryId;
      const category=await Category.findOne({_id:categoryId})
      return category;
    }
  },
  Mutation: {
    createArticle: async (_, args) => {
      const { article } = args;
      const record = new Article(article);
      await record.save();
      return record;
    },
    deleteArticle: async (_, args) => {
      const { id } = args;
      await Article.updateOne(
        { _id: id },
        {
          deleted: true,
          deletedAt: Date.now(),
        }
      );
      return "Đã xóa thành công";
    },
    updateArticle: async (_, args) => {
      const { id, article } = args;
      await Article.updateOne({ _id: id }, article);
      return article;
    },
  },
};
export default resolversArticle;
