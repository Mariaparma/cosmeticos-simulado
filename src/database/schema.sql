
CREATE TABLE marca (
    id SERIAL PRIMARY KEY,
    nome VARCHAR(100) NOT NULL,
    produto VARCHAR(100) NOT NULL

);


CREATE TABLE cosmeticos (
    id SERIAL PRIMARY KEY,
    nome VARCHAR(100) NOT NULL,
    descricao TEXT,
    preco DECIMAL(10, 2) NOT NULL,
    marca_id INT NOT NULL,
    FOREIGN KEY (marca_id) REFERENCES marca(id) ON DELETE CASCADE
);