var express = require("express");
var burger = require("../models/burger.js");

var router = express.Router();

router.get("/", function(req, res){
    burger.selectAll(function(data){
        var hbsObject = {
            burger : data
        }
        console.log(hbsObject);
        res.render("index", hbsObject);
    });
});

router.post("/burger", function(req, res){
    console.log(req.body);
    burger.insertOne("burger_name", "devoured", req.body.burger_name, req.body.devoured, function(result){
        res.json({id: result.id})
    });
});

router.put("/burger/:id", function(req, res){
    burger.updateOne("devoured", req.body.devoured, "id", req.params.id, function(result){
            res.send("Burger is updated")
        })
})
module.exports = router;