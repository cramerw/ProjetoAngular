const express = require('express');
const fetch = require('node-fetch');
const app = express();
const PORT = 3000;

app.get('/api/posicao', async (req, res) => {
  try {
    const response = await fetch('https://api.appselsyn.com.br/keek/rest/v1/integracao/posicao?apikey=eyJucyI6InRlc3RlIiwic2MiOjE1MjY2Njk2NTJ9');
    
    if (!response.ok) {
      const text = await response.text();
      return res.status(response.status).send(text);
    }

    const data = await response.json();
    res.json(data);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

app.listen(PORT, () => {
  console.log(`Proxy rodando em http://localhost:${PORT}`);
});
