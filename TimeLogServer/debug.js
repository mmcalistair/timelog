var console = require('console').Console;
var fs = require('fs');

var options = {
    flags: 'a',
    defaultEncoding: 'utf8'
};

var logfile = fs.createWriteStream('C:\\Users\\mmcal\\Documents\\Visual Studio 2015\\Projects\\TimeLogServer\\timelog.log', options);

var log_logfile = new console(logfile);
var log_stdout = new console(process.stdout);

function getLocalTime(){
    var timestamp = new Date(Date.now());
    return timestamp.getFullYear() + '-' + timestamp.getMonth() + '-' + timestamp.getDate() + ' ' + timestamp.getHours() + ':' + timestamp.getMinutes() + ':' + timestamp.getSeconds() + "." + timestamp.getMilliseconds() + '\t';
}


exports.info = function (msg){
    var timeStamp = new Date(Date.now());
    
    msg = getLocalTime() + 'INFO: \t' + msg;
    log_logfile.info(msg);
    log_stdout.info(msg);
}

exports.warn = function (msg) {
    var timeStamp = new Date(Date.now());
    
    msg = getLocalTime() + ' WARN: \t' + msg;
    log_logfile.info(msg);
    log_stdout.info(msg);
}

exports.error = function (msg) {
    var timeStamp = new Date(Date.now());
    
    msg = getLocalTime() + ' ERROR: \t' + msg;
    log_logfile.info(msg);
    log_stdout.info(msg);
}