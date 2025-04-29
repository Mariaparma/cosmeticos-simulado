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

INSERT INTO marca (nome, produto) VALUES 
('Marca A', 'Shampoo'),
('Marca B', 'Condicionador'),
('Marca C', 'Creme Hidratante');

INSERT INTO cosmeticos (nome, descricao, preco, marca_id) VALUES 
('Shampoo Anticaspa', 'Shampoo para controle de caspa', 19.90, 1),
('Condicionador Nutritivo', 'Condicionador para cabelos secos', 25.50, 2),
('Creme Hidratante Facial', 'Creme para hidratação profunda da pele', 35.00, 3),
('Shampoo Fortificante', 'Shampoo para fortalecimento capilar', 22.00, 1),
('Condicionador Reparador', 'Condicionador para reparação de danos', 27.90, 2);