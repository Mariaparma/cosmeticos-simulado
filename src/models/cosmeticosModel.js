const pool = require("../config/database.js");

const getCosmeticos = async () => {
    const result = await pool.query(
        `SELECT cosmeticos.*, marcas.name AS marca_name 
         FROM cosmeticos 
         LEFT JOIN marcas ON cosmeticos.marca_id = marcas.id`
    );
    return result.rows;
};

const getCosmeticoById = async (id) => {
    const result = await pool.query(
        `SELECT cosmeticos.*, marcas.name AS marca_name 
         FROM cosmeticos 
         LEFT JOIN marcas ON cosmeticos.marca_id = marcas.id 
         WHERE cosmeticos.id = $1`, [id]
    );
    return result.rows[0];
};

const createCosmetico = async (name, marca_id) => {
    const result = await pool.query(
        "INSERT INTO cosmeticos (name, marca_id) VALUES ($1, $2) RETURNING *",
        [name, marca_id]
    );
    return result.rows[0];
};

module.exports = { getCosmeticos, getCosmeticoById, createCosmetico };
