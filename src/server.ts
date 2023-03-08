import express, { Request, Response } from "express";
import bodyParser from "body-parser";
import cors from "cors";
import dotenv from 'dotenv'
dotenv.config()

var corsOptions = {
    origin: 'http://example.com',
    optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
  }

const app: express.Application = express()
const port = process.env.PORT

app.use(bodyParser.json())
app.use(cors(corsOptions))

app.get()