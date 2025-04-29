const cosmeticosModel = require("../models/cosmeticosModel.js");

const getAllCosmeticos = async (req, res) => {
    try {
        const cosmeticos = await cosmeticosModel.getAllCosmeticos();
        res.json(cosmeticos);
    } catch (error) {
        console.error("Erro ao buscar cosméticos:", error);
        res.status(500).json({ message: "Erro ao buscar cosméticos." });
    }
};

const getCosmetico = async (req, res) => {
    try {
        const cosmetico = await cosmeticosModel.getCosmeticoById(req.params.id);
        if (!cosmetico) {
            return res.status(404).json({ message: "Cosmético não encontrado." });
        }
        res.json(cosmetico);
    } catch (error) {
        console.error("Erro ao buscar cosmético:", error);
        res.status(500).json({ message: "Erro ao buscar cosmético." });
    }
};

const createCosmetico = async (req, res) => {
    try {
        const { nome, descricao, preco, marca_id } = req.body;

        if (!nome || !preco || !marca_id) {
            return res.status(400).json({ message: "Os campos 'nome', 'preco' e 'marca_id' são obrigatórios." });
        }

        const newCosmetico = await cosmeticosModel.createCosmetico(nome, descricao, preco, marca_id);
        res.status(201).json(newCosmetico);
    } catch (error) {
        console.error("Erro ao criar cosmético:", error);
        res.status(500).json({ message: "Erro ao criar cosmético." });
    }
};

const updateCosmetico = async (req, res) => {
    try {
        const { nome, descricao, preco, marca_id } = req.body;

        if (!nome || !preco || !marca_id) {
            return res.status(400).json({ message: "Os campos 'nome', 'preco' e 'marca_id' são obrigatórios." });
        }

        const updatedCosmetico = await cosmeticosModel.updateCosmetico(req.params.id, nome, descricao, preco, marca_id);
        if (!updatedCosmetico) {
            return res.status(404).json({ message: "Cosmético não encontrado." });
        }
        res.json(updatedCosmetico);
    } catch (error) {
        console.error("Erro ao atualizar cosmético:", error);
        res.status(500).json({ message: "Erro ao atualizar cosmético." });
    }
};

const deleteCosmetico = async (req, res) => {
    try {
        const message = await cosmeticosModel.deleteCosmetico(req.params.id);
        res.json(message);
    } catch (error) {
        console.error("Erro ao deletar cosmético:", error);
        res.status(500).json({ message: "Erro ao deletar cosmético." });
    }
};

module.exports = { getAllCosmeticos, getCosmetico, createCosmetico, updateCosmetico, deleteCosmetico };