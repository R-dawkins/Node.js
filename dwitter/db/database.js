import mysql from 'mysql2';

const pool = mysql.createPool({
  host: 'localhost',
  port: '3306',
  user: 'root',
  password: '1234',
  database: 'hrdb2019'
});
// 안에 여러 값이 들어가기 때문에 json형태로 

export const db = pool.promise();