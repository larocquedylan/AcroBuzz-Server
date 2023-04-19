"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const path_1 = __importDefault(require("path"));
const consts_1 = require("./consts");
const Post_1 = require("./entities/Post");
const dotenv_1 = __importDefault(require("dotenv"));
const User_1 = require("./entities/User");
dotenv_1.default.config();
exports.default = {
    migrations: {
        path: path_1.default.join(__dirname, './migrations'),
        pattern: /^[\w-]+\d+\.[tj]s$/,
    },
    entities: [Post_1.Post, User_1.User],
    dbName: 'acrobuzz',
    clientUrl: process.env.DATABASE_URL,
    type: 'postgresql',
    debug: !consts_1.__prod__,
};
//# sourceMappingURL=mikro-orm.config.js.map