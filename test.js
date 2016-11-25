var should = require('should');

var mongodb = require('mongodb');

var mc = mongodb.MongoClient;

describe('連線測試', () => {
	it('資料庫連線成功', (done) => {
		mc.connect('mongodb://vps.noob.tw:27017/database', (err, db) => {
			should.not.exist(err);
			done();
		});
	}).timeout(10000);
})

