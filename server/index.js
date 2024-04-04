import express from 'express'
import session from 'express-session'
import cors from 'cors'
import bodyParser from 'body-parser'
import dotenv from 'dotenv'
import { getStudent } from './admin/route.js'

dotenv.config()

const app = express()
const port = process.env.PORT || 5000
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(cors())

app.use(session({
    secret: process.env.SESSION_SECRET,
    resave: true,
    saveUninitialized: true
}))

app.get('/', (req, res) => {
    res.send('Welcome to the MCQ System!')
})

app.post('/student/login', (req, res) => {
    const { username, password } = req.body
    const  { result } = getStudent(username, password, res)

    if(result) {
        req.session.username = username
        res.json({ status: 200, message: 'Login successful', session: req.session })
    }
    else {
        res.json({ status: 404, message: 'Username or password is incorrect' })
    }
})

app.listen(port, () => {
    console.log(`Server running on port ${port}`)
})