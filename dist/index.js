"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@mikro-orm/core");
const Posts = __importStar(require("./entities/Post"));
const mikro_orm_config_1 = __importDefault(require("./mikro-orm.config"));
const express_1 = __importDefault(require("express"));
const server_1 = require("@apollo/server");
const type_graphql_1 = require("type-graphql");
const hello_1 = require("./resolvers/hello");
const cors_1 = __importDefault(require("cors"));
const body_parser_1 = __importDefault(require("body-parser"));
const express4_1 = require("@apollo/server/express4");
const post_1 = require("./resolvers/post");
require("reflect-metadata");
const main = async () => {
    const orm = await core_1.MikroORM.init(mikro_orm_config_1.default);
    console.log('Connected to the PostgreSQL database');
    await orm.getMigrator().up();
    await core_1.RequestContext.createAsync(orm.em, async () => {
        const post = orm.em.create(Posts.Post, {
            title: 'my first post',
            createdAt: '',
            updatedAt: '',
        });
        const app = (0, express_1.default)();
        app.get('/', (_, res) => {
            res.send('hello');
        });
        const apolloServer = new server_1.ApolloServer({
            schema: await (0, type_graphql_1.buildSchema)({
                resolvers: [hello_1.HelloResolver, post_1.PostResolver],
                validate: false,
            }),
        });
        await apolloServer.start();
        app.use((0, cors_1.default)(), body_parser_1.default.json(), (0, express4_1.expressMiddleware)(apolloServer, {
            context: async () => ({ em: orm.em }),
        }));
        app.listen(8080, () => {
            console.log('Server started on localhost:8080');
        });
    });
};
main().catch((err) => {
    console.error(err);
});
//# sourceMappingURL=index.js.map