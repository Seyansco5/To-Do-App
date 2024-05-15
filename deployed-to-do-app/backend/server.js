const express= require("express");
const mysql= require("mysql");
const cors= require("cors");

const app= express();
app.use(cors());
app.use(express.json());
const db = mysql.createConnection({
     host: "localhost",
     user: "root",
     password: "",
     database: "signup"
})
app.post('/signup', (req, res) => {
    const values=[
        req.body.firstname,
        req.body.lastname,
        req.body.email,
        req.body.password
    ]
    const sql= "INSERT INTO user_details(`firstname`,`lastname`,`email`,`password`) VALUES(?)"
    db.query(sql, [values], (err, data) => {
        if(err){
            return res.json(err)
        } else {
            return res.json(data)
        }
    })   
})
app.post('/todo', (req,res) => {
    const sql= "INSERT INTO todolist_table (`title`, `description`, `author`) VALUES (?)";
    const values= [
        req.body.title,
        req.body.description,
        req.body.author
     ]
    db.query(sql, [values], (err, data) => {
        if (err){
            console.log(err)
            return res.json(err)
        } else {
            return res.json(data);
        }
    })

})
app.post('/login', (req, res) => {
    const email = req.body.email.toString();
    const password = req.body.password.toString();
   const sql = 'SELECT * FROM user_details WHERE email = ? AND password= ?';
    db.query(sql, [email, password], (err, data) => {
        if(err) {
            console.log(err)
            return res.json("Error");
        }  else if(data) {
            if(data.length === 1)
                return res.json("login successful")
            else
                return res.json("invalid email or password")
        }
        })
     }) 
app.listen(8081, () => {
    console.log("listening");
})