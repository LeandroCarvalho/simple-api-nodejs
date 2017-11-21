module.exports = function (app) {
    
        var api = app.api.products;   
        app.route('/v1/products')
        .get(api.list)
        .post(api.add);
    
        app.route('/v1/product/:id')
        .get(api.getById)
        .delete(api.removeById)
        .put(api.update);
    }