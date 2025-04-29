const express = require("express");
const router = express.Router();
const marcaController = require("../controllers/marcaController.js");

/**
 * @swagger
 * tags:
 *   name: Marcas
 *   description: Gerenciamento de marcas
 */

/**
 * @swagger
 * /marcas:
 *   get:
 *     summary: Lista todas as marcas
 *     tags: [Marcas]
 *     responses:
 *       200:
 *         description: Lista de marcas
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Marca'
 */
router.get("/", marcaController.getAllMarcas);

/**
 * @swagger
 * /marcas/{id}:
 *   get:
 *     summary: Busca uma marca por ID
 *     tags: [Marcas]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID da marca
 *     responses:
 *       200:
 *         description: Marca encontrada
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Marca'
 *       404:
 *         description: Marca não encontrada
 */
router.get("/:id", marcaController.getMarca);

/**
 * @swagger
 * /marcas:
 *   post:
 *     summary: Cria uma nova marca
 *     tags: [Marcas]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/MarcaInput'
 *     responses:
 *       201:
 *         description: Marca criada com sucesso
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Marca'
 */
router.post("/", marcaController.createMarca);

/**
 * @swagger
 * /marcas/{id}:
 *   put:
 *     summary: Atualiza uma marca existente
 *     tags: [Marcas]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID da marca
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/MarcaInput'
 *     responses:
 *       200:
 *         description: Marca atualizada com sucesso
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Marca'
 *       404:
 *         description: Marca não encontrada
 */
router.put("/:id", marcaController.updateMarca);

/**
 * @swagger
 * /marcas/{id}:
 *   delete:
 *     summary: Deleta uma marca
 *     tags: [Marcas]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID da marca
 *     responses:
 *       200:
 *         description: Marca deletada com sucesso
 *       404:
 *         description: Marca não encontrada
 */
router.delete("/:id", marcaController.deleteMarca);

module.exports = router;