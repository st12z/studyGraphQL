"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.generate_Otp = exports.generate_token = void 0;
const generate_token = (length) => {
    var a = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890".split("");
    var b = [];
    for (var i = 0; i < length; i++) {
        var j = (Math.random() * (a.length - 1)).toFixed(0);
        b[i] = a[j];
    }
    return b.join("");
};
exports.generate_token = generate_token;
const generate_Otp = (length) => {
    const s = "0123456789";
    let result = "";
    for (var i = 0; i < length; i++) {
        result += s[(Math.random() * (s.length - 1)).toFixed(0)];
    }
    return result;
};
exports.generate_Otp = generate_Otp;
