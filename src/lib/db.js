import mysql from 'mysql2/promise';
import fs from 'fs';
import path from 'path';

const pool = mysql.createPool({
  user: process.env.username,
  password: process.env.password,
  host: process.env.host,
  port: process.env.port,
  database: process.env.database,
  waitForConnections: true,
  connectionLimit: 10,
  connectTimeout: 10000,
  queueLimit: 0,
  ssl: {
    ca: fs.readFileSync(path.resolve('certs/ca-certificate.crt')),
  },
});

export default pool;
