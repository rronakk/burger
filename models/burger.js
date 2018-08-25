var orm = require("../config/orm.js")

var burger = {
    selectAll: function(cb){
        orm.selectAll("burgers", function(res){
            cb(res);
        });
    },
    insertOne: function(col1, col2, val1 , val2, cb){
        orm.updateOne("burgers", col1, col2, val1, val2, function(res){
            cb(res);
        });
    },

}

module.exports = burger;