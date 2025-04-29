// filepath: c:\Users\Aluno DS\Documents\GitHub\cosmeticos-simulado\server.js

const express = require('express');
const app = express();
const marcaRoutes = require('./src/routes/marcaRoutes.js'); // Certifique-se de que o caminho está correto
const cosmeticosRoutes = require('./src/routes/comesticosRoutes.js');
const setupSwagger = require('./src/config/swagger.js');

app.use(express.json());

// Configuração do Swagger
setupSwagger(app);

// Rotas
app.use('/api/marcas', marcaRoutes); // Certifique-se de que esta linha está presente
app.use('/api/cosmeticos', cosmeticosRoutes);

// Porta do servidor
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`🚀 Servidor rodando em http://localhost:${PORT}`);
});