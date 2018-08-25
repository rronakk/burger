var express = require("express");
var burger = require("../models/burger.js");

var router = express.Router();

router.get("/", function(req, res){
    burger.selectAll(function(data){
        res.json(data);
    });
});

router.post("/burger", function(req, res){
    console.log(req.body);
    burger.insertOne("burger_name", "devoured", req.body.burger_name, req.body.devoured, function(result){
        res.json({id: result.id})
    });
});
module.exports = router;