var api = {};

api.list = function (red, res) {
    var categories = [
        { _id: 1, nome: 'electronics' },
        { _id: 2, nome: 'sports' },
        { _id: 3, nome: 'entertainment' }
    ];
    res.json(categories);
};

module.exports = api;