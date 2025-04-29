const express = require("express");
const router = express.Router();
const marcaController = require("../controllers/marcaController.js");


router.get("/", marcaController.getAllMarcas);
router.get("/:id", marcaController.getMarca);
router.post("/", marcaController.createMarca);
router.put("/:id", marcaController.updateMarca);
router.delete("/:id", marcaController.deleteMarca);

module.exports = router;