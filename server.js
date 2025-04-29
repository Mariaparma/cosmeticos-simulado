const express = require('express');
const app = express();
const marcaRoutes = require('./src/routes/marcaRoutes.js'); 
const cosmeticosRoutes = require('./src/routes/comesticosRoutes.js');
const setupSwagger = require('./src/config/swagger.js');


app.use(express.json());


setupSwagger(app);


app.use('/api/marcas', marcaRoutes); 
app.use('/api/cosmeticos', cosmeticosRoutes);


app.use((req, res, next) => {
    res.status(404).json({ message: "Rota não encontrada." });
});


app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({ message: "Erro interno do servidor." });
});


const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`🚀 Servidor rodando em http://localhost:${PORT}`);
});