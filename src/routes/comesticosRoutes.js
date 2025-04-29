const express = require("express");
const router = express.Router();
const cosmeticosController = require("../controllers/cosmeticosController.js");

/**
 * @swagger
 * tags:
 *   name: Cosmeticos
 *   description: Gerenciamento de cosméticos
 */

/**
 * @swagger
 * /cosmeticos:
 *   get:
 *     summary: Lista todos os cosméticos
 *     tags: [Cosmeticos]
 *     responses:
 *       200:
 *         description: Lista de cosméticos
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Cosmetico'
 */
router.get("/", cosmeticosController.getAllCosmeticos);

/**
 * @swagger
 * /cosmeticos/{id}:
 *   get:
 *     summary: Busca um cosmético por ID
 *     tags: [Cosmeticos]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID do cosmético
 *     responses:
 *       200:
 *         description: Cosmético encontrado
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Cosmetico'
 *       404:
 *         description: Cosmético não encontrado
 */
router.get("/:id", cosmeticosController.getCosmetico);

/**
 * @swagger
 * /cosmeticos:
 *   post:
 *     summary: Cria um novo cosmético
 *     tags: [Cosmeticos]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/CosmeticoInput'
 *     responses:
 *       201:
 *         description: Cosmético criado com sucesso
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Cosmetico'
 */
router.post("/", cosmeticosController.createCosmetico);

/**
 * @swagger
 * /cosmeticos/{id}:
 *   put:
 *     summary: Atualiza um cosmético existente
 *     tags: [Cosmeticos]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID do cosmético
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/CosmeticoInput'
 *     responses:
 *       200:
 *         description: Cosmético atualizado com sucesso
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Cosmetico'
 *       404:
 *         description: Cosmético não encontrado
 */
router.put("/:id", cosmeticosController.updateCosmetico);

/**
 * @swagger
 * /cosmeticos/{id}:
 *   delete:
 *     summary: Deleta um cosmético
 *     tags: [Cosmeticos]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID do cosmético
 *     responses:
 *       200:
 *         description: Cosmético deletado com sucesso
 *       404:
 *         description: Cosmético não encontrado
 */
router.delete("/:id", cosmeticosController.deleteCosmetico);

module.exports = router;