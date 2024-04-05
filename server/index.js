// index.js
import express from 'express';
import session from 'express-session';
import cors from 'cors';
import bodyParser from 'body-parser';
import dotenv from 'dotenv';
import { v4 as uuidv4 } from 'uuid';
import { getRow } from './queries/getRow.js';

dotenv.config();

const app = express();
const port = process.env.PORT || 5000;
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

app.use(session({
    secret: process.env.SESSION_SECRET,
    resave: true,
    saveUninitialized: true,
    cookie: { maxAge: 1000 * 60 * 60 * 24 }, 
    httpOnly: true
}));

app.get('/', (req, res) => {
    res.json({ hello: 'Welcome to the MCQ System!' });
});

app.post('/student/login', async (req, res) => {
    const { username, password, type } = req.body;

    if (!username || !password) {
        return res.json({ status: 400, message: 'All fields are required' });
    }

    if(username.length < 3 || password.length < 3) {
        return res.json({ status: 400, message: 'All fields must be at least 3 characters' });
    }
    
    const result = await getRow(username, password, type);

    // Check the status returned by getRow and respond accordingly
    if (result.status === 200) {
        req.session.username = username; // Set session variables
        req.session.token = uuidv4();
        res.json({ 
            status: 200, 
            message: 'Login successful', 
            session: { token: req.session.token, username: req.session.username }, 
            data: result.data 
        });
    } else {
        res.json({ status: result.status, message: result.message });
    }
});

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
