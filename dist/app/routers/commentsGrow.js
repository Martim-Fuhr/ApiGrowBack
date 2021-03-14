"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _express = require('express');
var _CommentsGrowController = require('../controllers/CommentsGrowController'); var _CommentsGrowController2 = _interopRequireDefault(_CommentsGrowController);

const routes = new (0, _express.Router)();

routes.get('/commentsGrow', _CommentsGrowController2.default.index);
routes.get('/commentsGrow/:id/', _CommentsGrowController2.default.show);
routes.post('/commentsGrow', _CommentsGrowController2.default.store);
routes.put('/commentsGrow/:id/', _CommentsGrowController2.default.update);
routes.delete('/commentsGrow/:id/', _CommentsGrowController2.default.delete);

exports. default = routes;
