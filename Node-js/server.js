const express = require('express')
const mysql = require('mysql')
const cors = require('cors')

const app = express()
app.use(cors());

app.use(express.json());
const db = mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'Yuvaraj@123',
    database:'nodejs_db'
})

app.post('/signup', (req, res)=>{
    const sql = "insert into signup('name','email','password') values (?)"
    const values = [
        req.body.name,
        req.body.email,
        req.body.passowrd
    ]
    db.query(sql, [values], (err, data) =>{
        if(err)
            return res.json(err);
        return res.json(data);
    })
})

app.listen(8081, ()=>{
    console.log("Listening...");
})