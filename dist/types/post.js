"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PostType = void 0;
const type_graphql_1 = require("type-graphql");
const user_1 = require("./user");
const vote_1 = require("./vote");
let PostType = class PostType {
};
__decorate([
    (0, type_graphql_1.Field)(() => type_graphql_1.Int),
    __metadata("design:type", Number)
], PostType.prototype, "id", void 0);
__decorate([
    (0, type_graphql_1.Field)(),
    __metadata("design:type", Date)
], PostType.prototype, "createdAt", void 0);
__decorate([
    (0, type_graphql_1.Field)(),
    __metadata("design:type", Date)
], PostType.prototype, "updatedAt", void 0);
__decorate([
    (0, type_graphql_1.Field)(),
    __metadata("design:type", String)
], PostType.prototype, "title", void 0);
__decorate([
    (0, type_graphql_1.Field)(),
    __metadata("design:type", String)
], PostType.prototype, "text", void 0);
__decorate([
    (0, type_graphql_1.Field)(() => type_graphql_1.Int),
    __metadata("design:type", Number)
], PostType.prototype, "totalPoints", void 0);
__decorate([
    (0, type_graphql_1.Field)(() => user_1.UserType, { nullable: true }),
    __metadata("design:type", user_1.UserType)
], PostType.prototype, "author", void 0);
__decorate([
    (0, type_graphql_1.Field)(() => [vote_1.VoteType], { nullable: true }),
    __metadata("design:type", Array)
], PostType.prototype, "votes", void 0);
PostType = __decorate([
    (0, type_graphql_1.ObjectType)()
], PostType);
exports.PostType = PostType;
//# sourceMappingURL=post.js.map