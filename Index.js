const express = require("express");
const axios = require("axios");
const app = express();

// URL da API
const API_URL = "https://economia.awesomeapi.com.br/last/USD-BRL,EUR-BRL,BTC-BRL";

app.listen(3000, () => {
  console.log("Server running on port 3000");
});

// Rota para buscar as taxas de câmbio
app.get("/", async (req, res) => {
  try {
    const response = await axios.get(API_URL);
    res.json({
      mensagem: "Taxas de Câmbio Atualizadas",
      dados: response.data
    });
  } catch (error) {
    res.status(500).json({ erro: "Erro ao buscar dados da API" });
  }
});
