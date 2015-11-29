var fs = require('fs');
var log = require('./debug.js');
var path = require('path');
var mysql = require('mysql')


var dbConfigOptions = null;
var connection = null;

exports.initDbConnection = function (){
    parseConfig();
}

function parseConfig(){
    log.info('Current path: ' + process.cwd());
    fs.readFile(path.join(process.cwd(), 'dbconf.json'), function (err, data) {
        if (!err) {
            dbConfigOptions = JSON.parse(data.toString().replace('\n', ''));
            connection = mysql.createConnection(dbConfigOptions);
        }
    });
}