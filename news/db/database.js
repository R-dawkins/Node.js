import mysql from 'mysql2';

const dbInfo = {
  host: 'localhost',
  port: '3306',
  user: 'root',
  password: '1234',
  database: 'hrdb2019'
};
// 커넥트 오류가 난다면 dbInfo에서 오류가 있을 확률이 높다.

const db = {
  init : function () {
    return mysql.createConnection(dbInfo);
  },
  connect: function(conn) {
    conn.connect(function(err){
      if(err) console.error('mysql 연결 에러 : ' + err)
      else console.log('mysql 연결 성공');
    });
  }
};






export default db;