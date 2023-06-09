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
exports.VoteType = void 0;
const type_graphql_1 = require("type-graphql");
const post_1 = require("./post");
const user_1 = require("./user");
let VoteType = class VoteType {
};
__decorate([
    (0, type_graphql_1.Field)(() => type_graphql_1.Int),
    __metadata("design:type", Number)
], VoteType.prototype, "id", void 0);
__decorate([
    (0, type_graphql_1.Field)(() => type_graphql_1.Int),
    __metadata("design:type", Number)
], VoteType.prototype, "voteValue", void 0);
__decorate([
    (0, type_graphql_1.Field)(() => type_graphql_1.Int),
    __metadata("design:type", Number)
], VoteType.prototype, "postId", void 0);
__decorate([
    (0, type_graphql_1.Field)(() => post_1.PostType),
    __metadata("design:type", post_1.PostType)
], VoteType.prototype, "post", void 0);
__decorate([
    (0, type_graphql_1.Field)(() => type_graphql_1.Int),
    __metadata("design:type", Number)
], VoteType.prototype, "userId", void 0);
__decorate([
    (0, type_graphql_1.Field)(() => user_1.UserType),
    __metadata("design:type", user_1.UserType)
], VoteType.prototype, "user", void 0);
VoteType = __decorate([
    (0, type_graphql_1.ObjectType)()
], VoteType);
exports.VoteType = VoteType;
//# sourceMappingURL=vote.js.map