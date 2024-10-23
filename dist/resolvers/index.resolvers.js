"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.resolvers = void 0;
const article_resolver_1 = __importDefault(require("./article.resolver"));
const category_resolver_1 = __importDefault(require("./category.resolver"));
const user_resolver_1 = __importDefault(require("./user.resolver"));
exports.resolvers = [article_resolver_1.default, category_resolver_1.default, user_resolver_1.default];
