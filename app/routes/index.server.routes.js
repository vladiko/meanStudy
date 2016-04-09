module.exports = function (app) {
    var index = require('../controllers/index.server.controller');
    app.get('/', index.render);
};
//# sourceMappingURL=index.server.routes.js.map