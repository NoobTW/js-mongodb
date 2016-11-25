var mongodb = require('mongodb');

var mongodbServer = new mongodb.Server('vps.noob.tw', 27017, { auto_reconnect: true, poolSize: 10 });
var db = new mongodb.Db('test', mongodbServer);

db.open((err, client) => {
	
});