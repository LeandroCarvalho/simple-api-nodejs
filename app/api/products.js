var mongoose = require('mongoose');
var model = mongoose.model('Product');
var api = {};

api.list = function (req, res) {

    model.find({})
        .then((products) => {
            res.json(products);
        })
        .catch((err) => {
            res.sendStatus(500).json(err);
        });

 };

api.getById = function (req, res) {

    model
        .findById(req.params.id)
        .then((product) => {
            if (!product) throw Error('product not found');
            res.json(product);
        })
        .catch((err) => {
            res.sendStatus(404).json(err);
        });
}

api.removeById = function (req, res) {
    model
        .remove({_id: req.params.id})
        .then((product) => {
         res.sendStatus(204);
        }).catch((err) => {
         res.sendStatus(500).json(err);
        });
}

api.add = function (req, res) {
    var product = req.body;
    model
        .create(product)
        .then((product) => {
            res.sendStatus(200);

        }).catch((err) => {
            sendStatus(500).json(err);
        })
}

api.update = function (req, res) {

        model
        .findByIdAndUpdate({_id: req.params.id}, req.body)
        .then((product) => {
            res.sendStatus(200);

        }).catch((err) => {
            sendStatus(500).json(err);
        });
}


module.exports = api;