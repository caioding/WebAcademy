CREATE TABLE Clientes (
  id INT AUTO_INCREMENT PRIMARY KEY,
  nome VARCHAR(100),
  cpf VARCHAR(14),
  celular VARCHAR(15),
  email VARCHAR(100),
  data_nascimento DATE
);

CREATE TABLE Enderecos (
  id INT AUTO_INCREMENT PRIMARY KEY,
  cliente_id INT,
  endereco VARCHAR(200),
  FOREIGN KEY (cliente_id) REFERENCES Clientes(id)
);

CREATE TABLE Categorias (
  id INT AUTO_INCREMENT PRIMARY KEY,
  nome VARCHAR(50)
);

CREATE TABLE Subcategorias (
  id INT AUTO_INCREMENT PRIMARY KEY,
  categoria_id INT,
  nome VARCHAR(50),
  FOREIGN KEY (categoria_id) REFERENCES Categorias(id)
);

CREATE TABLE Produtos (
  id INT AUTO_INCREMENT PRIMARY KEY,
  subcategoria_id INT,
  modelo VARCHAR(50),
  fabricante VARCHAR(50),
  preco DECIMAL(10,2),
  quantidade INT,
  FOREIGN KEY (subcategoria_id) REFERENCES Subcategorias(id)
);

CREATE TABLE NumerosSerie (
  id INT AUTO_INCREMENT PRIMARY KEY,
  produto_id INT,
  numero_serie VARCHAR(50),
  FOREIGN KEY (produto_id) REFERENCES Produtos(id)
);

CREATE TABLE Compras (
  id INT AUTO_INCREMENT PRIMARY KEY,
  cliente_id INT,
  ts DATETIME,
  desconto DECIMAL(10,2),
  forma_pagamento VARCHAR(50),
  total DECIMAL(10,2),
  endereco_envio_id INT,
  FOREIGN KEY (cliente_id) REFERENCES Clientes(id),
  FOREIGN KEY (endereco_envio_id) REFERENCES Enderecos(id)
);

CREATE TABLE ItensCompra (
  id INT AUTO_INCREMENT PRIMARY KEY,
  compra_id INT,
  produto_id INT,
  quantidade INT,
  FOREIGN KEY (compra_id) REFERENCES Compras(id),
  FOREIGN KEY (produto_id) REFERENCES Produtos(id)
);