const connection = require("./connection");

let orm = {
    selectAll:function(tableName, cb){
        connection.query("SELECT * FROM " + tableName + ";", function(err, result){
            if (err) throw err;
            console.log(result);
            cb(result);
        });
    },
    insert:function(tableName, userInput, cb){
        let query = connection.query("INSERT INTO " + tableName + " SET ?", 
        userInput, function(err, result){
            if (err) throw err;
            console.log(query.sql);
            console.log(result)
            cb(result)
        });
    },
    update:function(tableName, userInput, condition, cb){
        let query = connection.query("UPDATE " + tableName + " SET ? WHERE ?",
        [userInput, condition], function(err, result){
            if (err) throw err;
            console.log(query.sql);
            cb(result)
        });
    },
    delete:function(tableName, condition, cb){
        let query = connection.query('DELETE FROM ' + tableName + ' WHERE ?',
        [condition], (err,result) => {
            if (err) throw err;
            console.log(query.sql);
            cb(result)
        })
    }
};

module.exports = orm;