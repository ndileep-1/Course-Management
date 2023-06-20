"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var dotenv_1 = require("dotenv");
dotenv_1.default.config();
var express_1 = require("express");
var cors_1 = require("cors");
var course_router_1 = require("./routers/course.router");
var user_router_1 = require("./routers/user.router");
var database_config_1 = require("./configs/database.config");
var admin_router_1 = require("./routers/admin.router");
(0, database_config_1.dbConnect)();
var app = (0, express_1.default)();
app.use(express_1.default.json());
app.use((0, cors_1.default)({
    credentials: true,
    origin: ["http://localhost:4200"]
}));
app.use("/api/courses", course_router_1.default);
app.use("/api/users", user_router_1.default);
app.use("/api/admin", admin_router_1.default);
var port = 5000;
app.listen(port, function () {
    console.log("website served on http://localhost:" + port);
});
