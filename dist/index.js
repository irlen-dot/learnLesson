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
Object.defineProperty(exports, "__esModule", { value: true });
require("reflect-metadata");
const apollo_server_express_1 = require("apollo-server-express");
const Express = require("express");
const type_graphql_1 = require("type-graphql");
const typeorm_1 = require("typeorm");
const Register_1 = require("./modules/user/Register");
const main = () => __awaiter(void 0, void 0, void 0, function* () {
    yield typeorm_1.createConnection();
    console.log(" \x1b[1m CONNECTION CREATED \x1b[0m");
    const schema = yield type_graphql_1.buildSchema({
        resolvers: [Register_1.RegisterResolver]
    });
    const apolloServer = new apollo_server_express_1.ApolloServer({ schema, playground: true });
    const app = Express();
    console.log('ADDING MIDDLEWARE');
    apolloServer.applyMiddleware({ app });
    app.listen(4000, () => {
        console.log("SERVER Started at 4000");
    });
});
main();
//# sourceMappingURL=index.js.map