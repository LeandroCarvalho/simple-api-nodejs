var mongoose = require('mongoose');
var model = mongoose.model('Client');
var api = {};

api.list = function (req, res) {

    model.find({})
        .then((clients) => {
            res.json(clients);
        })
        .catch((err) => {
            res.sendStatus(500).json(err);
        });

 };

api.getById = function (req, res) {

    model
        .findById(req.params.id)
        .then((client) => {
            if (!client) throw Error('client not found');
            res.json(client);
        })
        .catch((err) => {
            res.sendStatus(404).json(err);
        });
}

api.removeById = function (req, res) {
    model
        .remove({_id: req.params.id})
        .then((client) => {
         res.sendStatus(204);
        }).catch((err) => {
         res.sendStatus(500).json(err);
        });
}

api.add = function (req, res) {
    var client = req.body;
    model
        .create(client)
        .then((client) => {
            res.sendStatus(200);

        }).catch((err) => {
            sendStatus(500).json(err);
        })
}

api.update = function (req, res) {

        model
        .findByIdAndUpdate({_id: req.params.id}, req.body)
        .then((client) => {
            res.sendStatus(200);

        }).catch((err) => {
            sendStatus(500).json(err);
        });
}


module.exports = api;