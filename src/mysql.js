var mysql      = require('mysql');
// ��й�ȣ�� ������ ���Ϸ� �и��ؼ� ���������� ���Խ�Ű�� �ʾƾ� �մϴ�. 
var connection = mysql.createConnection({
  host     : '211.59.238.56',
  user     : 'root',
  password : 'ctit%$&&56',
  database : 'misod'
});
  
connection.connect();
  
connection.query('SELECT * FROM topic', function (error, results, fields) {
    if (error) {
        console.log(error);
    }
    console.log(results);
});
  
connection.end();