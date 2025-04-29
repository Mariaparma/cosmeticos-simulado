const express = require('express');
const app = express();
const marcaRoutes = require('./src/routes/marcaRoutes.js');
const cosmeticosRoutes = require('./src/routes/comesticosRoutes.js');   
const setupSwagger = require('./src/config/swagger.js');

app.use(express.json());
setupSwagger(app); 

app.use('/api/marcas', marcaRoutes);
app.use('/api/cosmeticos', cosmeticosRoutes);



const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`🚀 Servidor rodando em http://localhost:${PORT}`);
});
