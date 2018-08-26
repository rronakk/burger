var orm = require("../config/orm.js")

var burger = {
    selectAll: function(cb){
        orm.selectAll("burgers", function(res){
            cb(res);
        });
    },
    insertOne: function(col1, col2, val1 , val2, cb){
        orm.insertOne("burgers", col1, col2, val1, val2, function(res){
            cb(res);
        });
    },
    updateOne : function(updateCol, updateValue, conditionCol, conditionVal, cb){
        orm.updateOne("burgers", updateCol, updateValue, conditionCol, conditionVal, function(res){
            cb(res);
        });
    }

}

module.exports = burger;