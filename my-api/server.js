const express = require('express');
const mysql = require('mysql');
const cors = require('cors');
require('dotenv').config();

const app = express();
app.use(cors());
app.use(express.json()); // 允許 JSON 請求

// 設定 MySQL 連線
const db = mysql.createConnection({
    host: process.env.DB_HOST || 'localhost',
    user: process.env.DB_USER || 'root',
    password: process.env.DB_PASS || '124201196',
    database: process.env.DB_NAME || 'sql_oreins'
});

db.connect(err => {
    if (err) {
        console.error('MySQL 連線失敗:', err);
    } else {
        console.log('MySQL 連線成功');
    }
});

// API 端點：獲取所有數據
app.get('/api/data', (req, res) => {
    db.query('SELECT * FROM your_table', (err, results) => {
        if (err) {
            return res.status(500).json({ error: err.message });
        }
        res.json(results);
    });
});

// 啟動伺服器
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`API 伺服器運行於 http://localhost:${PORT}`);
});
