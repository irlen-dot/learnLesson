import "reflect-metadata";
import { ApolloServer } from "apollo-server-express";
import * as Express from "express";
import { buildSchema } from 'type-graphql';
import { createConnection } from "typeorm";
import { RegisterResolver } from "./modules/user/Register";



const main = async () => {
    await createConnection();
    console.log(" \x1b[1m CONNECTION CREATED \x1b[0m")

    const schema = await buildSchema({

        resolvers: [RegisterResolver]//схема это код, который опрокидывает все на сервер.
    });



    const apolloServer = new ApolloServer({ schema, playground: true },);

    const app = Express()
    console.log('ADDING MIDDLEWARE');
    apolloServer.applyMiddleware({ app });

    app.listen(4000, ()=>{
        console.log("SERVER Started at 4000")
    })

};

main();

/*но ты можешь все опрокидывать вручную:
const server = new ApolloServer({
    typedefs,
    ...,
    ....,
    .....,
})
*/






