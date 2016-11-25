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

	// fs.readFile('./data.json', (err, str) => {
	// 	if(err){
	// 		console.log('ERRRORROROROROROOROROROR');
	// 	}else{
	// 		var data = JSON.parse(str);
	// 		console.log(data);
	// 		// collection.insert(data, (err, result) => {
	// 		// 	if(!err){
	// 		// 		console.log(result);
	// 		// 	}else{
	// 		// 		console.log(err);
	// 		// 	}
	// 		// 	db.close();
	// 		// });
	// 	}
	// });

	collection.insert(data, (err, result) => {
		if(err){
			console.log(err);
		}else{
			console.log(result);
		}
		db.close();
	});

	// collection.find({
	// 	$or: [
	// 		{District: '旗津區'},
	// 		{District: '大寮區'}
	// 	]
	// }).toArray((err, result) => {
	// 	if(!err){
	// 		console.log(result);
	// 	}else{
	// 		console.log(err);
	// 	}
	// 	db.close();
	// });

	// collection.find({District: '旗津區'}, (err, result) => {
	// 	if(!err){
	// 		console.log(result);
	// 	}else{
	// 		console.log(err);
	// 	}
	// 	db.close();
	// });
})