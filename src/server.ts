import dotenv from 'dotenv'
dotenv.config();
import express from 'express'
import './database'

const app = express()
const PORT = process.env.APP_PORT;
app.listen(PORT, () => {
  console.log(' 💻 Started: ' + PORT)
})
