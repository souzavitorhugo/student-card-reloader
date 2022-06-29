-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Banco de dados: `projetotopicos`
--

-- --------------------------------------------------------

--
-- Estrutura da tabela `escolas`
--

CREATE TABLE `escolas`(
	`id` int NOT NULL PRIMARY KEY auto_increment,
  `nome` varchar(100) NOT NULL,
  `local` varchar(50) NOT NULL,
  `cnpj` varchar(20) NOT NULL,
  `qtdeAlunos` int NOT NULL,
	`createdAt` datetime,
	`updatedAt` datetime
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Estrutura da tabela `alunos`
--

CREATE TABLE `alunos` (
  `id` int(10) NOT NULL PRIMARY KEY AUTO_INCREMENT,
  `nome` varchar(100) NOT NULL,
  `email` varchar(100) NOT NULL,
  `EscolaId` int NOT NULL,
  `createdAt` datetime,
  `updatedAt` datetime,
  FOREIGN KEY (`EscolaId`) REFERENCES escolas(`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Estrutura da tabela `cartaos`
--

CREATE TABLE `cartaos`(
	`id` int NOT NULL PRIMARY KEY auto_increment,
  `numero` int NOT NULL,
  `senha` varchar(50) NOT NULL,
  `validade` date NOT NULL,
  `credito` float NOT NULL, 
	`createdAt` datetime,
	`updatedAt` datetime
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Estrutura da tabela `usuarios`
--
CREATE TABLE `usuarios` (
  `id` int(10) NOT NULL PRIMARY KEY AUTO_INCREMENT,
  `nome` varchar(100) NOT NULL,
  `sobrenome` varchar(100) NOT NULL,
  `email` varchar(100) NOT NULL,
  `senha` varchar(100) NOT NULL,
  `cpf` varchar(20) NOT NULL,
  `telefone` varchar(50) NOT NULL,
  `tipo` int NOT NULL,
  `CartaoId` int,
  `AlunoId` int,
  `createdAt` datetime,
  `updatedAt` datetime,
  FOREIGN KEY (`CartaoId`) REFERENCES cartaos(`id`),
  FOREIGN KEY (`AlunoId`) REFERENCES alunos(`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Extraindo dados da tabela `usuarios`
--

INSERT INTO `usuarios` (nome, sobrenome, email, senha, cpf, telefone, tipo) 
	VALUES ("Gustavo", "Mazzuco", "gustavo@teste.com","123456","000.000.000-00","48999999999",0);