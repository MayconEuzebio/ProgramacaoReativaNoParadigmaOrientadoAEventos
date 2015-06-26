/**
 * Created by estacao01 on 29/04/15.
 */

module.exports = function(app) {
    var controller = app.controllers.contato;
    app.get('/contatos', controller.listaContatos);
    app.get('/contatos/:id', controller.obtemContato);
};