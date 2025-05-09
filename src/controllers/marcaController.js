const marcaModel = require("../models/marcaModel.js");

const getAllMarcas = async (req, res) => {
    try {
        const marcas = await marcaModel.getAllMarcas();
        res.json(marcas);
    } catch (error) {
        console.error("Erro ao buscar marca:", error);
        res.status(500).json({ message: "Erro ao buscar marca." });
    }
};

const getMarca = async (req, res) => {
    try {
        const marca = await marcaModel.getMarcaById(req.params.id);
        if (!marca) {
            return res.status(404).json({ message: "Marca não encontrada." });
        }
        res.json(marca);
    } catch (error) {
        console.error("Erro ao buscar marca:", error);
        res.status(500).json({ message: "Erro ao buscar marca." });
    }
};

const createMarca = async (req, res) => {
    try {
        const { nome, produto } = req.body;

       
        if (!nome || !produto) {
            return res.status(400).json({ message: "Os campos 'nome' e 'produto' são obrigatórios." });
        }

        const newHouse = await houseModel.createHouse(nome, produto); 
        res.status(201).json(newHouse);
    } catch (error) {
        console.error("Erro ao criar marca:", error);
        if (error.code === "23505") { 
            return res.status(400).json({ message: "Marca já cadastrada." });
        }
        res.status(500).json({ message: "Erro ao criar Marca." });
    }
};

const updateMarca = async (req, res) => {
    try {
        const { nome, produto } = req.body;

       
        if (!nome || !produto) {
            return res.status(400).json({ message: "Os campos 'nome' e 'produto' são obrigatórios." });
        }

        const updatedMaraca = await marcaModel.updateMarca(req.params.id, nome, produto);
        if (!updatedMarca) {
            return res.status(404).json({ message: "Marca não encontrada." });
        }
        res.json(updatedMarca);
    } catch (error) {
        console.error("Erro ao atualizar Marca:", error);
        res.status(500).json({ message: "Erro ao atualizar Marca." });
    }
};

const deleteMarca = async (req, res) => {
    try {
        const message = await marcaModel.deleteMarca(req.params.id);
        res.json(message);
    } catch (error) {
        console.error("Erro ao deletar Marca:", error);
        res.status(500).json({ message: "Erro ao deletar Marca." });
    }
};

module.exports = { getAllMarcas, getMarca, createMarca, updateMarca, deleteMarca };