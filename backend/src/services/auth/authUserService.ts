import prismaClient from "../../Prisma"
import { sign } from "jsonwebtoken"
import { compare } from "bcryptjs"

interface IParamsLogin {
    email: string
    password: string
}

class AuthUserService {
    async execute({ email, password }: IParamsLogin) {
        const user = await prismaClient.users.findFirst({
            where: {
                email: email,
            },
        })
        if (!user) {
            throw new Error("Usuário/senha são inválidos")
        }

        let passwordNotExist = await compare(password, user.password)

        if (!passwordNotExist) throw new Error("Usuário/senha são inválidos")

        const token = sign(
            { name: user.name, email: user.email },
            process.env.JWT_SECRET_KEY,
            { subject: user.id, expiresIn: "30d" }
        )
        return { id: user.id, email: user.email, name: user.name, token: token }
    }
}
export { AuthUserService }
