var connection = require("../config/connection.js")

var orm = {
    selectAll : function(table, cb){
        var queryString = "SELECT * FROM " + table + ";";
        connection.query(queryString, function(err, result){
            if(err) throw err;
            console.log(result);
            cb(result);
        })

    },
    insertOne : function(table, col1, col2, val1, val2, cb){

        var queryString = "INSERT INTO ?? ( ??, ??) VALUES ( ?, ?)";
        connection.query(queryString,[table, col1, col2, val1, val2], function(err, result){
            if(err) throw err;
            console.log(result);
            cb(result);
        })
    },
    updateOne : function(table, updateCol, updateValue, conditionCol, conditionVal, cb){
        var queryString = "UPDATE ?? SET  ?? = ?  WHERE ??= ?";
        connection.query(queryString,[table, updateCol, updateValue, conditionCol, conditionVal], function(err, result){
            console.log(queryString);
            if(err) throw err;
            console.log(result);
            cb(result);
        })
    }

}

module.exports = orm;