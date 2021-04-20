import express from "express"

const app = express();

const porta_api = 3333

app.listen(porta_api, () => console.log('Rodando na porta:' + porta_api))
