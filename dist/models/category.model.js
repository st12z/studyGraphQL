"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const categorySchema = new mongoose_1.default.Schema({
    title: String,
    avatar: String,
    description: String,
    deletedAt: Date,
    deleted: {
        type: Boolean,
        deafult: false,
    },
}, {
    timestamps: true,
});
const Category = mongoose_1.default.model("Category", categorySchema, "categories");
exports.default = Category;
