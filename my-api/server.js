const express = require('express');
const mysql = require('mysql2');
const cors = require('cors');

const app = express();
app.use(cors());

const db = mysql.createConnection({
    host: '3306',
    user: 'root',
    password: 'z124201196',
    database: 'sql_oreins'
});

db.connect(err => {
    if (err) {
        console.error('MySQL 連線錯誤:', err);
        return;
    }
    console.log('MySQL 連線成功');
});

app.get('/api/data', (req, res) => {
    db.query('SELECT * FROM your_table', (err, results) => {
        if (err) {
            res.status(500).send(err);
        } else {
            res.json(results);
        }
    });
});

app.listen(3000, () => console.log('API 運行在 http://localhost:3000'));
