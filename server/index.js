const express = require('express');
const app = express();
const bodyparser = require("body-parser");
const cors = require('cors');
const mysql = require('mysql2')

const db = mysql.createPool({
    host: "localhost",
    user: "root",
    password: "tiger",
    database: "crud_contact"
});


app.use(cors());
app.use(express.json());
app.use(bodyparser.urlencoded({ extended: true }));


app.get("/api/get", (req, res) => {
    const sqlGet = "SELECT * FROM contact_db";
    db.query(sqlGet, (err, result) => {
        res.send(result);
    })
})


app.get("/", (req, res) => {
    const sqlInsert = "INSERT INTO contact_db(name,email,contact) VALUES('keyur','abc@gmail.com',1234567)";
    db.query(sqlInsert, (err, result) => {
        console.log("error", err);
        console.log("result", result);
        res.send("Hello World");
    })

})

app.listen(5000, () => {
    console.log("Server running on 5000");
})