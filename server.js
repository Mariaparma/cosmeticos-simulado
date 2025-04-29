const express = require('express');
const app = express();
const marcaRoutes = require('./src/routes/marcaRoutes.js'); 
const cosmeticosRoutes = require('./src/routes/comesticosRoutes.js');
const setupSwagger = require('./src/config/swagger.js');

// Middleware para interpretar JSON
app.use(express.json());

// Configuração do Swagger
setupSwagger(app);

// Rotas
app.use('/api/marcas', marcaRoutes); 
app.use('/api/cosmeticos', cosmeticosRoutes);

// Middleware para tratar rotas não encontradas
app.use((req, res, next) => {
    res.status(404).json({ message: "Rota não encontrada." });
});

// Middleware para tratar erros gerais
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({ message: "Erro interno do servidor." });
});

// Porta do servidor
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`🚀 Servidor rodando em http://localhost:${PORT}`);
});