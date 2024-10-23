"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const md5_1 = __importDefault(require("md5"));
const user_model_1 = __importDefault(require("../models/user.model"));
const generate_1 = require("../helper/generate");
const resolversUser = {
    Query: {
        getUser: (_, args, context) => __awaiter(void 0, void 0, void 0, function* () {
            const { id } = args;
            const user = context.user;
            console.log(user);
            if (!user) {
                return {
                    code: 400,
                    message: "Not found!"
                };
            }
            return {
                code: 200,
                message: "found",
                id: user.id,
                fullName: user.fullName,
                email: user.email,
                token: user.token
            };
        })
    },
    Mutation: {
        createUser: (_, args) => __awaiter(void 0, void 0, void 0, function* () {
            const { user } = args;
            const emailExist = yield user_model_1.default.findOne({ email: user.email, deleted: false });
            if (emailExist) {
                return {
                    code: 400,
                    message: "Email đã tồn tại!"
                };
            }
            else {
                user.password = (0, md5_1.default)(user.password);
                user.token = (0, generate_1.generate_token)(10);
                const newUser = new user_model_1.default(user);
                yield newUser.save();
                return {
                    code: 200,
                    id: newUser.id,
                    message: "Thành công",
                    fullName: newUser.fullName,
                    email: newUser.email,
                    token: newUser.token
                };
            }
        }),
        loginUser: (_, agrs) => __awaiter(void 0, void 0, void 0, function* () {
            const { email, password } = agrs.user;
            const user = yield user_model_1.default.findOne({ email: email, password: (0, md5_1.default)(password) });
            if (!user) {
                return {
                    code: 400,
                    message: "Tài khoản hoặc mật khẩu sai!"
                };
            }
            return {
                fullName: user.fullName,
                email: user.email,
                token: user.token,
                code: 200,
                message: "Đăng nhập thành công!"
            };
        })
    },
};
exports.default = resolversUser;
