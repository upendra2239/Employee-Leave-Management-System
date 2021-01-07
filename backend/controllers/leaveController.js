const express = require('express');
var router = express.Router();
var ObjectId = require('mongoose').Types.ObjectId;

var { Leave } = require('../models/leave');

// => localhost:3000/leaves/
router.get('/', (req, res) => {
    Leave.find((err, docs) => {
        if (!err) { res.send(docs); }
        else { console.log('Error in Retriving Leaves :' + JSON.stringify(err, undefined, 2)); }
    });
});

router.get('/:id', (req, res) => {
    if (!ObjectId.isValid(req.params.id))
        return res.status(400).send(`No record with given id : ${req.params.id}`);

    Leave.findById(req.params.id, (err, doc) => {
        if (!err) { res.send(doc); }
        else { console.log('Error in Retriving Leave :' + JSON.stringify(err, undefined, 2)); }
    });
});

router.post('/', (req, res) => {
    var lev = new Leave({
        name: req.body.name,
        position: req.body.position,
        office: req.body.office,
        days: req.body.days,
        reason: req.body.reason

    });
    lev.save((err, doc) => {
        if (!err) { res.send(doc); }
        else { console.log('Error in Leave Save :' + JSON.stringify(err, undefined, 2)); }
    });
});

router.put('/:id', (req, res) => {
    if (!ObjectId.isValid(req.params.id))
        return res.status(400).send(`No record with given id : ${req.params.id}`);

    var lev = {
        name: req.body.name,
        position: req.body.position,
        office: req.body.office,
        days: req.body.days,
        reason:req.boby.reason
    };
    Leave.findByIdAndUpdate(req.params.id, { $set: lev }, { new: true }, (err, doc) => {
        if (!err) { res.send(doc); }
        else { console.log('Error in Leave Update :' + JSON.stringify(err, undefined, 2)); }
    });
});

router.delete('/:id', (req, res) => {
    if (!ObjectId.isValid(req.params.id))
        return res.status(400).send(`No record with given id : ${req.params.id}`);

    Leave.findByIdAndRemove(req.params.id, (err, doc) => {
        if (!err) { res.send(doc); }
        else { console.log('Error in Leave Delete :' + JSON.stringify(err, undefined, 2)); }
    });
});

module.exports = router;