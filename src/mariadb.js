const mariadb = require('mariadb');

const pool = mariadb.createPool({ 
    host: '211.59.238.56',
    port: '3306' ,
    user: 'misod',
    password: 'misod!!',
    database: 'misod',
    connectionLimit: 5 });

pool.getConnection()
    .then(conn => {

        conn.query("SELECT * from user_info")
            .then(rows => { // rows: [ {val: 1}, meta: ... ]
                return console.log(rows);
            })
            .then(res => { // res: { affectedRows: 1, insertId: 1, warningStatus: 0 }
                conn.release(); // release to pool
            })
            .catch(err => {
                conn.release(); // release to pool
            })

    }).catch(err => {
        console.log("error!!");
        console.log(err.message);
        //not connected
    });