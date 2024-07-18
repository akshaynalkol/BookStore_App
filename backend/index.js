const express = require('express');
const dotenv = require('dotenv');
const con = require('./config');
const cors = require('cors');

const app = express();
app.use(express.json());
app.use(cors());

dotenv.config();
// console.log(process.env);
const port = process.env.PORT || 5002;

// GET BOOK
app.get('/book', (req, res) => {
    con.query('SELECT * FROM book', (err, result) => {
        if (err) {
            res.json(err);
        }
        else {
            res.json(result);
        }
    })
});

// SignUp User
app.post('/user/signup', (req, res) => {
    const data = req.body;
    con.query('INSERT INTO user SET ?', data, (err, result) => {
        if (err) {
            res.status(400).json({ message: 'User Already Exist' });
        }
        else {
            res.status(200).json({ message: 'User Created Successfully', user: { id: result.insertId, ...data } });
        }
    })
});

// Login User
app.post('/user/login', (req, res) => {
    const { email, password } = req.body;
    con.query('SELECT * FROM user WHERE email=? AND password=?', [email,password], (err, result) => {
        if (err || result.length === 0) {
            res.status(400).json({ message: 'Invalid Username & Password' });
        }
        else {
            res.status(200).json({
                message: 'Login Successfully', user: result[0]
            });
        }
    })
});


app.listen(port, (err) => {
    if (!err) console.log('Server Running...');
});