const express = require("express");
const router = express.Router();
const apiKeyMiddleware = require("../config/apiKey.js")
const reportController = require("./../controllers/reportController");

router.use(apiKeyMiddleware);
//Rota para gerar CSV
router.get("/report/csv", reportController.exportWizardCSV);
//Rota para gerar PDF
router.get("/report/pdf", reportController.exportWizardPDF);


module.exports = router;