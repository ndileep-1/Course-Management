"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.dbConnect = void 0;
var mongoose_1 = require("mongoose");
var dbConnect = function () {
    (0, mongoose_1.connect)('mongodb+srv://ndvkrishna9:TyFMOfMG2hkJAbVj@cluster0.odhuwov.mongodb.net/c_application_db?retryWrites=true&w=majority', {
    // useNewUrlParser: true,
    // iseUnifiedToplogy: true
    }).then(function () { return console.log("connect successfully"); }, function (error) { return console.log(error); });
};
exports.dbConnect = dbConnect;
