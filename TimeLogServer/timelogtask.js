var log = require('./debug.js');

exports.TimelogTask = function (task, project, client) {
    this.task = task;
    this.createdAt = new Date();
    this.project = project;
    this.client = client;
    this.user = 1;
    this.finishedAt = null;
    this.timeDiff = null;
};

exports.TimelogTask.prototype.setId = function (id) {
    log.info('set id: ' + id)
    this.id = id;
}

exports.TimelogTask.prototype.print = function () {
    log.info("ID: " + this.id + " Topic: " + this.topic + " Message: " + this.msgText + " Created: " + this.added.toISOString());
};

exports.TimelogTask.prototype.saveTask = function (connection) {
    var currItem = this;
    var clientId = this.getClientId();
    var projectId = this.getProjectId();

    //connection.query("Insert into messages set topic='" + this.topic + "', message='" + this.msgText + "', added='" + this.added.toISOString() + "';", function (err, rows, fields) {
    //    if (err) {
    //        log.info("Error while adding new message to db: " + err.message);
    //    } else {
    //        //console.log(rows.insertId);
    //        currItem.setId(rows.insertId);
    //    }
    //    //console.log('outer: ' + this.id);
    //})
}

exports.TimelogTask.prototype.add = function (value) {
    this.id = value;
    return this;
}

exports.TimelogTask.getClientId = function (){

}

exports.TimelogTask.getProjectId = function () {

}