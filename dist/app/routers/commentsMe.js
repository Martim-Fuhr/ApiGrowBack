"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _express = require('express');
var _CommentsMeController = require('../controllers/CommentsMeController'); var _CommentsMeController2 = _interopRequireDefault(_CommentsMeController);

const routes = new (0, _express.Router)();

routes.get('/comments', _CommentsMeController2.default.index);
routes.get('/comments/:id/', _CommentsMeController2.default.show);
routes.post('/comments', _CommentsMeController2.default.store);
routes.put('/comments/:id/', _CommentsMeController2.default.update);
routes.delete('/comments/:id/', _CommentsMeController2.default.delete);

exports. default = routes;
