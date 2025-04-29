const express = require("express");
const swaggerUi = require("swagger-ui-express");
const swaggerJsDoc = require("swagger-jsdoc");

const app = express();

// Configuração do Swagger
const swaggerOptions = {
    swaggerDefinition: {
        openapi: "3.0.0",
        info: {
            title: "API de Cosméticos",
            version: "1.0.0",
            description: "Documentação da API de Cosméticos",
        },
        servers: [
            {
                url: "http://localhost:3000",
            },
        ],
    },
    apis: ["./src/routes/*.js"], // Caminho para os arquivos de rotas com documentação Swagger
};

const swaggerDocs = swaggerJsDoc(swaggerOptions);

// Middleware do Swagger
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocs));

// Outras configurações do servidor
app.use(express.json());

// Rotas
const cosmeticosRoutes = require("./src/routes/comesticosRoutes.js");
app.use("/cosmeticos", cosmeticosRoutes);

// Iniciar o servidor
app.listen(3000, () => {
    console.log("Servidor rodando na porta 3000. Acesse /api-docs para a documentação.");
});