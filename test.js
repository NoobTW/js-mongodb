var fs = require('fs');
var mongodb = require('mongodb');

var mc = mongodb.MongoClient;

mc.connect('mongodb://vps.noob.tw:27017/database', (err, db) => {
	console.log('connected');

	var collection = db.collection('collection');

	var data = {
		name: 'g8man',
		sex: 'M',
		age: 'old'
	};

	// collection.insert(data, (err, result) => {
	// 	if(err){
	// 		console.log(err);
	// 	}else{
	// 		console.log(result);
	// 	}
	// 	db.close();
	// });

	collection.find({name: 'g8man'}).toArray((err, result) => {
		if(!err){
			console.log(result.name);
		}else{
			console.log(err);
		}
		db.close();
	})
})