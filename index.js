import express from "express"
import cors from 'cors'

const app = express()
const PORT = process.env.PORT || 3000
app
    .use(cors())
    .use(express.json())
    .use(express.urlencoded({extended: true}))
    .post('/login', (req, res) => {
        console.log(req.body)
        res.send(req.body)
    })
    .listen(PORT, () => {
        console.log("Server has started at http://localhost:3000")
    })

