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
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
require("reflect-metadata");
const apollo_server_express_1 = require("apollo-server-express");
const Express = require("express");
const type_graphql_1 = require("type-graphql");
let HelloResolver = class HelloResolver {
    hello() {
        return __awaiter(this, void 0, void 0, function* () {
            return "Hello world";
        });
    }
};
__decorate([
    type_graphql_1.Query(() => String, { name: 'helloWorld' }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], HelloResolver.prototype, "hello", null);
HelloResolver = __decorate([
    type_graphql_1.Resolver()
], HelloResolver);
let patt = class patt {
    hell() {
        return __awaiter(this, void 0, void 0, function* () {
            return "Ulan";
        });
    }
};
__decorate([
    type_graphql_1.Query(() => String, { name: 'pizda' }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], patt.prototype, "hell", null);
patt = __decorate([
    type_graphql_1.Resolver()
], patt);
const main = () => __awaiter(void 0, void 0, void 0, function* () {
    const schema = yield type_graphql_1.buildSchema({
        resolvers: [HelloResolver, patt]
    });
    const apolloServer = new apollo_server_express_1.ApolloServer({ schema });
    const app = Express();
    apolloServer.applyMiddleware({ app });
    app.listen(4000);
});
main();
//# sourceMappingURL=index.js.map