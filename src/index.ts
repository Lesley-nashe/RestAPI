import express from 'express'
import http from 'http'
import bodyParser from 'body-parser'
import compression from 'compression'
import cors from 'cors'
import cookieParser from 'cookie-parser'
import mongoose from 'mongoose'

const app = express();

app.use(cors ({
    credentials: true
  }))

app.use(compression)
app.use(cookieParser())
app.use(bodyParser.json)
  
const server = http.createServer(app)

server.listen(8080, () => {
    console.log("Serverr running on http://localhost:8080")
})

const MONGO_URL = "mongodb+srv://Tadiwanashe:Tadiwanashe@cluster0.hdbbynj.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
mongoose.Promise = Promise;
mongoose.connect(MONGO_URL);
mongoose.connection.on('error', (error: Error) => console.log('error'));

console.log("App running")
