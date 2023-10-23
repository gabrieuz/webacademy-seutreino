const swaggerJsdoc = require("swagger-jsdoc");

const options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "API Seu Treino",
      version: "1.0.0",
      description: "API Documentation Example",
    },
  },
  apis: ["./src/controllers/*/*.js"], // Caminho para seus arquivos de rota
};

const swaggerSpec = swaggerJsdoc(options);

module.exports = swaggerSpec;