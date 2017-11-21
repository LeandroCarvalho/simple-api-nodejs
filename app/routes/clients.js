module.exports = function (app) {

    var api = app.api.clients;   
    app.route('/v1/clients')
    .get(api.list)
    .post(api.add);

    app.route('/v1/client/:id')
    .get(api.getById)
    .delete(api.removeById)
    .put(api.update);
}