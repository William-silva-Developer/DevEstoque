import express, { Response, Request, NextFunction } from "express"
import "express-async-errors"
import cors from "cors"
import { router } from "./routes"
import { setupSwagger } from "./swagger"

const app = express()
app.use(express.json())
app.use(cors())
app.use("/api/", router)

setupSwagger(app)
app.use((error: Error, req: Request, res: Response, next: NextFunction) => {
    if (error instanceof Error) {
        return res.status(400).json({ error: error.message })
    }

    return res
        .json(500)
        .json({ error: "Error", message: "Internal Server Error" })
})
app.listen(3333, () => {
    console.log("Server is running on http://localhost:3333/api/")
    console.log("Acesso a documentação: http://localhost:3333/api-docs")
})
