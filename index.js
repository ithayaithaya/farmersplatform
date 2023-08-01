const mysql = require('mysql2');
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
app.use(bodyParser.json());
app.use(cors({ origin: '*' }));

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'root',
  database: 'farmer'
});

connection.connect(function (err) {
  if (err) {
    console.error('Error connecting to MySQL database: ' + err.stack);
    return;
  }
  console.log('Connected to MySQL database');
});

app.post('/register', function (req, res) {
  const name = req.body.name;
  const email = req.body.email;
  const password = req.body.password;
  const confirmPassword = req.body.confirmPassword;

  const sql = 'INSERT INTO user (name,email,password,confirmPassword) VALUES (?,?,?,?)';
  connection.query(sql, [name, email, password, confirmPassword], function (err, result) {
    if (err) {
      console.error('Error inserting data into MySQL database: ' + err.stack);
      return res.status(500).send('Internal Server Error');
    }
    console.log('Data inserted successfully!');
    res.status(200).send('Thanks for submitting the form, ' + name + '!');
  });
});




app.post('/login', function (req, res) {
  const email = req.body.email;
  const password = req.body.password;

  const sql = 'SELECT * FROM user WHERE email = ? AND password = ?';
  connection.query(sql, [email, password], function (err, results) {
    if (err) {
      console.error('Error querying data from MySQL database: ' + err.stack);
      return res.status(500).send('Internal Server Error');
    }

    if (results.length === 0) {
      // No user with the provided email and password was found
      return res.status(401).send('Invalid email or password');
    }

    // User with the provided email and password was found
    const user = results[0];
    res.status(200).send({ id: user.id, name: user.name, email: user.email });
  });
});



app.listen(3000, function () {
  console.log('Server listening on port 3000');
});


