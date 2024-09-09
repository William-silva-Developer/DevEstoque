import { Request, Response } from "express"

import { AuthUserService } from "../../services/auth/authUserService"

type ParamsBody = {
    email: string
    password: string
}

class ControllerAuthUser {
    async handle(req: Request, res: Response) {
        const { email, password } = req.body as ParamsBody
        const authUserService = new AuthUserService()

        let auth = await authUserService.execute({
            email,
            password,
        })

        res.status(200).json(auth)
    }
}

export { ControllerAuthUser }
