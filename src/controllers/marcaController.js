// filepath: c:\Users\Aluno DS\Documents\GitHub\cosmeticos-simulado\src\controllers\marcaController.js

const getAllMarcas = (req, res) => {
    res.json([{ id: 1, nome: "Marca A", produto: "Shampoo" }]);
};

const getMarca = (req, res) => {
    const id = req.params.id;
    res.json({ id, nome: "Marca A", produto: "Shampoo" });
};

const createMarca = (req, res) => {
    const { nome, produto } = req.body;
    res.status(201).json({ id: 1, nome, produto });
};

const updateMarca = (req, res) => {
    const id = req.params.id;
    const { nome, produto } = req.body;
    res.json({ id, nome, produto });
};

const deleteMarca = (req, res) => {
    const id = req.params.id;
    res.json({ message: `Marca com ID ${id} deletada com sucesso.` });
};

module.exports = {
    getAllMarcas,
    getMarca,
    createMarca,
    updateMarca,
    deleteMarca,
};