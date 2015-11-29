
var mysql = require('mysql');
var timelog = require('./timelogtask.js');
var http = require('http');
var log = require('./debug.js');
var dispatch = require('./dispatch.js');
var dbCon = require('./dbconnection.js');

dbCon.initDbConnection();

var serv = http.createServer(dispatch.dispatch);
serv.listen(8080, function () { log.info('created server'); });

//var connection = mysql.createConnection( );//dbconf

var messageList = [];

//exports.con = connection;

//for (var counter = 0; counter < 10; counter++) {
//    messageList.push(new timelog.TimelogTask("Topic_" + (Math.round(Math.random() * 100)).toString(), "Message" + (Math.round(Math.random() * 100)).toString()));
//}

//messageList.forEach(function (item, index, array) {
//    item.saveToDB(connection);
//});

//log.info("DONE!");

//setTimeout(function () {
//    messageList.forEach(function (item, index, array) {
//        item.print();
//    })
//}, 1000);