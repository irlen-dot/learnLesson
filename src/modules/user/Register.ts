import { Resolver, Query, Mutation, Arg } from "type-graphql";
import * as bcrypt from 'bcryptjs';
import { User } from "src/entity/User";


@Resolver()
export class RegisterResolver {

    @Query(() => String, {name: 'helloWorld', nullable: true /*---- может ли он вернуть нулевое значение */})
    async hello() :Promise<string>{
        return "Hello world";
    }

    @Mutation(() => User)
    async register(
        @Arg('firstName') firstName: string, //actual variable
        @Arg('lastName') lastName: string,
        @Arg('email') email: string,
        @Arg('password') password: string

    ):Promise<User> { 
        const hashedPassword = await bcrypt.hash(password, 12);//salt is how hard the password will be

        const user = await User.create({
            firstName,
            lastName,
            email,
            password: hashedPassword
        }).save()

        return user ;
    }
}
