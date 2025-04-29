const pool = require("../config/database.js");

const getMarcas = async () => {
    const result = await pool.query("SELECT * FROM marcas");
    return result.rows;
};

const getMarcaById = async (id) => {
    const result = await pool.query("SELECT * FROM marcas WHERE id = $1", [id]);
    return result.rows[0];
};


const createMarca = async (name, produto) => {
    const result = await pool.query(
        "INSERT INTO marcas (name, produto) VALUES ($1, $2) RETURNING *",
        [name, produto]
    );
    return result.rows[0];
};

const updateMarca = async (id, name, produto) => {
    const result = await pool.query(
        "UPDATE marcas SET name = $1, produto = $2 WHERE id = $3 RETURNING *",
        [name, produto, id]
    );
    return result.rows[0];
};

const deleteMarca = async (id) => {
    const result = await pool.query("DELETE FROM marcas WHERE id = $1 RETURNING *", [id]);

    if (result.rowCount === 0) {
        return { error: "Marca não encontrada." };
    }

    return { message: "Marca deletada com sucesso." };
};


module.exports = { getMarcas, getMarcaById, createMarca, updateMarca, deleteMarca };