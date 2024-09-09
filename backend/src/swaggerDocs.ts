const swaggerDefinition = {
    openapi: "3.0.0",
    info: {
        title: "API DevEstoque",
        version: "1.0.0",
        description: "Documentação da API de Dev Estoque",
    },
    servers: [
        {
            url: "http://localhost:3333",
            description: "Servidor local",
        },
    ],
    paths: {
        // Autenticação
        "/session": {
            post: {
                summary: "Autenticar um usuário",
                tags: ["Autenticação"],
                requestBody: {
                    description: "Credenciais de login",
                    required: true,
                    content: {
                        "application/json": {
                            schema: {
                                type: "object",
                                properties: {
                                    email: {
                                        type: "string",
                                        example: "user@example.com",
                                    },
                                    password: {
                                        type: "string",
                                        example: "senha123",
                                    },
                                },
                            },
                        },
                    },
                },
                responses: {
                    200: {
                        description: "Usuário autenticado",
                    },
                    401: {
                        description: "Credenciais inválidas",
                    },
                },
            },
        },
        // Categoria
        "/newCategory": {
            post: {
                summary: "Criar uma nova categoria",
                tags: ["Categoria"],
                security: [{ bearerAuth: [] }],
                requestBody: {
                    description: "Dados da nova categoria",
                    required: true,
                    content: {
                        "application/json": {
                            schema: {
                                type: "object",
                                properties: {
                                    nome: {
                                        type: "string",
                                        example: "Bebidas",
                                    },
                                },
                            },
                        },
                    },
                },
                responses: {
                    201: {
                        description: "Categoria criada com sucesso",
                    },
                    400: {
                        description: "Dados incorreto",
                    },
                    401: {
                        description: "Usuário não autenticado",
                    },
                },
            },
        },
        "/listCategory": {
            get: {
                summary: "Listar todas as categorias",
                tags: ["Categoria"],
                security: [{ bearerAuth: [] }],
                responses: {
                    200: {
                        description: "Lista de categorias",
                        content: {
                            "application/json": {
                                schema: {
                                    type: "array",
                                    items: {
                                        type: "object",
                                        properties: {
                                            id: { type: "integer" },
                                            nome: { type: "string" },
                                        },
                                    },
                                },
                            },
                        },
                    },
                    401: {
                        description: "Usuário não autenticado",
                    },
                },
            },
        },
        "/deleteCategory": {
            delete: {
                summary: "Deletar uma categoria",
                tags: ["Categoria"],
                security: [{ bearerAuth: [] }],
                requestBody: {
                    description: "ID da categoria a ser deletada",
                    required: true,
                    content: {
                        "application/json": {
                            schema: {
                                type: "object",
                                properties: {
                                    id: {
                                        type: "integer",
                                        example: 1,
                                    },
                                },
                            },
                        },
                    },
                },
                responses: {
                    200: {
                        description: "Categoria deletada com sucesso",
                    },
                    401: {
                        description: "Usuário não autenticado",
                    },
                },
            },
        },
        // Produto
        "/newProduct": {
            post: {
                summary: "Criar um novo produto",
                tags: ["Produto"],
                security: [{ bearerAuth: [] }],
                requestBody: {
                    description: "Dados do novo produto",
                    required: true,
                    content: {
                        "application/json": {
                            schema: {
                                type: "object",
                                properties: {
                                    nome: {
                                        type: "string",
                                        example: "Coca-Cola",
                                    },
                                    preco: {
                                        type: "number",
                                        example: 5.99,
                                    },
                                    categoriaId: {
                                        type: "integer",
                                        example: 1,
                                    },
                                },
                            },
                        },
                    },
                },
                responses: {
                    201: {
                        description: "Produto criado com sucesso",
                    },
                    401: {
                        description: "Usuário não autenticado",
                    },
                },
            },
        },
        "/listProducts": {
            get: {
                summary: "Listar todos os produtos",
                tags: ["Produto"],
                security: [{ bearerAuth: [] }],
                responses: {
                    200: {
                        description: "Lista de produtos",
                        content: {
                            "application/json": {
                                schema: {
                                    type: "array",
                                    items: {
                                        type: "object",
                                        properties: {
                                            id: { type: "integer" },
                                            nome: { type: "string" },
                                            preco: { type: "number" },
                                            categoriaId: { type: "integer" },
                                        },
                                    },
                                },
                            },
                        },
                    },
                    401: {
                        description: "Usuário não autenticado",
                    },
                },
            },
        },
        "/deleteProduct": {
            delete: {
                summary: "Deletar um produto",
                tags: ["Produto"],
                security: [{ bearerAuth: [] }],
                requestBody: {
                    description: "ID do produto a ser deletado",
                    required: true,
                    content: {
                        "application/json": {
                            schema: {
                                type: "object",
                                properties: {
                                    id: {
                                        type: "integer",
                                        example: 1,
                                    },
                                },
                            },
                        },
                    },
                },
                responses: {
                    200: {
                        description: "Produto deletado com sucesso",
                    },
                    401: {
                        description: "Usuário não autenticado",
                    },
                },
            },
        },
        "/updateProduct": {
            put: {
                summary: "Atualizar um produto",
                tags: ["Produto"],
                security: [{ bearerAuth: [] }],
                requestBody: {
                    description: "Dados do produto a ser atualizado",
                    required: true,
                    content: {
                        "application/json": {
                            schema: {
                                type: "object",
                                properties: {
                                    id: {
                                        type: "integer",
                                        example: 1,
                                    },
                                    nome: {
                                        type: "string",
                                        example: "Fanta",
                                    },
                                    preco: {
                                        type: "number",
                                        example: 4.99,
                                    },
                                    categoriaId: {
                                        type: "integer",
                                        example: 2,
                                    },
                                },
                            },
                        },
                    },
                },
                responses: {
                    200: {
                        description: "Produto atualizado com sucesso",
                    },
                    401: {
                        description: "Usuário não autenticado",
                    },
                },
            },
        },
        //PEDIDO
        "/listOrders": {
            get: {
                summary: "Listar todos os pedidos",
                tags: ["Pedido"],
                security: [{ bearerAuth: [] }],
                responses: {
                    200: {
                        description: "Lista de pedidos",
                        content: {
                            "application/json": {
                                schema: {
                                    type: "array",
                                    items: {
                                        type: "object",
                                        properties: {
                                            id: { type: "integer" },
                                            produtoId: { type: "integer" },
                                            quantidade: { type: "integer" },
                                            status: { type: "string" },
                                        },
                                    },
                                },
                            },
                        },
                    },
                    401: {
                        description: "Usuário não autenticado",
                    },
                },
            },
        },
        "/createOrder": {
            post: {
                summary: "Criar um novo pedido",
                tags: ["Pedido"],
                security: [{ bearerAuth: [] }],
                requestBody: {
                    description: "Dados do novo pedido",
                    required: true,
                    content: {
                        "application/json": {
                            schema: {
                                type: "object",
                                properties: {
                                    produtoId: {
                                        type: "integer",
                                        example: 1,
                                    },
                                    quantidade: {
                                        type: "integer",
                                        example: 2,
                                    },
                                    status: {
                                        type: "string",
                                        example: "Pendente",
                                    },
                                },
                            },
                        },
                    },
                },
                responses: {
                    201: {
                        description: "Pedido criado com sucesso",
                    },
                    401: {
                        description: "Usuário não autenticado",
                    },
                },
            },
        },
        "/updateOrder": {
            put: {
                summary: "Atualizar um pedido existente",
                tags: ["Pedido"],
                security: [{ bearerAuth: [] }],
                requestBody: {
                    description: "Dados para atualizar o pedido",
                    required: true,
                    content: {
                        "application/json": {
                            schema: {
                                type: "object",
                                properties: {
                                    id: {
                                        type: "integer",
                                        example: 1,
                                    },
                                    status: {
                                        type: "string",
                                        example: "Concluído",
                                    },
                                },
                            },
                        },
                    },
                },
                responses: {
                    200: {
                        description: "Pedido atualizado com sucesso",
                    },
                    401: {
                        description: "Usuário não autenticado",
                    },
                },
            },
        },
        "/deleteOrder": {
            delete: {
                summary: "Deletar um pedido existente",
                tags: ["Pedido"],
                security: [{ bearerAuth: [] }],
                requestBody: {
                    description: "ID do pedido a ser deletado",
                    required: true,
                    content: {
                        "application/json": {
                            schema: {
                                type: "object",
                                properties: {
                                    id: {
                                        type: "integer",
                                        example: 1,
                                    },
                                },
                            },
                        },
                    },
                },
                responses: {
                    200: {
                        description: "Pedido deletado com sucesso",
                    },
                    401: {
                        description: "Usuário não autenticado",
                    },
                },
            },
        },
    },
    components: {
        securitySchemes: {
            bearerAuth: {
                type: "http",
                scheme: "bearer",
                bearerFormat: "JWT",
            },
        },
    },
}

export default swaggerDefinition
