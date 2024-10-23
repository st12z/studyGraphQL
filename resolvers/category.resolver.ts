import Category from "../models/category.model";


const resolversCategory = {
  Query: {
    getListCategory: async () => {
      const categories = await Category.find({ deleted: false });
      return categories;
    },
    getCategory: async (_, args) => {
      const { id } = args;
      const category = await Category.findOne({ _id: id }, { deleted: false });
      return category;
    },
  },
};
export default resolversCategory;
