const express = require("express");
const axios = require("axios");

const app = express();
const PORT = 3000;

// Dados fictícios de bolsas
const bolsas = [
  {
    id: 1,
    nome: "Bolsa de Estudos na França",
    valor: 1000,
    requisitos: "Mestrado, Fluência em Francês",
  },
  {
    id: 2,
    nome: "Bolsa de Estudos na Alemanha",
    valor: 1500,
    requisitos: "Graduação, Fluência em Inglês",
  },
  {
    id: 3,
    nome: "Bolsa de Estudos na Espanha",
    valor: 1200,
    requisitos: "Mestrado, Experiência em Pesquisa",
  },
];

// Middleware para permitir JSON
app.use(express.json());

// Rota para buscar bolsas com base em filtros
app.get("/bolsas", (req, res) => {
  const { valor, requisitos } = req.query;
  let resultado = bolsas;

  // Filtrando por valor
  if (valor) {
    resultado = resultado.filter((bolsa) => bolsa.valor <= valor);
  }

  // Filtrando por requisitos
  if (requisitos) {
    resultado = resultado.filter((bolsa) =>
      bolsa.requisitos.toLowerCase().includes(requisitos.toLowerCase())
    );
  }

  res.json(resultado);
});

app.listen(PORT, () => {
  console.log(`API rodando na porta ${PORT}`);
});
