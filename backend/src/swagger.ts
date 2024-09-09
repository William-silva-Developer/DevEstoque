import swaggerJSDoc from "swagger-jsdoc"
import swaggerUi from "swagger-ui-express"
import { Express } from "express"
import swaggerDefinition from "./swaggerDocs"

/* COMANDOS USADOS NA INSTALAÇÃO
yarn add swagger-ui-express swagger-jsdoc
yarn add -D @types/swagger-ui-express


*/

const options = {
    swaggerDefinition,
    apis: [],
}

const swaggerSpec = swaggerJSDoc(options)

// Função para usar o Swagger no app Express
export function setupSwagger(app: Express) {
    app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec))
}
