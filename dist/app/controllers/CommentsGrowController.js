"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _CommentsGrow = require('../models/CommentsGrow'); var _CommentsGrow2 = _interopRequireDefault(_CommentsGrow);

class CommentsGrowController {
  async index(request, response) {
    return response.json(await _CommentsGrow2.default.findAll());
  }

  async show(request, response) {
    const { id } = request.params;
    return response.json(await _CommentsGrow2.default.findOne({ where: { id } }));
  }

  async store(request, response) {
    const { name, email, comment } = request.body;
    return response.json(await _CommentsGrow2.default.create({ name, email, comment }));
  }

  async update(request, response) {
    const { id } = request.params;
    const { name, email, comment } = request.body;
    return response.json(
      await _CommentsGrow2.default.create(
        { name, email, comment },
        {
          where: { id },
          returning: true,
        }
      )
    );
  }

  async delete(request, response) {
    const { id } = request.params;
    await _CommentsGrow2.default.destroy({ where: { id } });
    response.sendStatus(202);
  }
}

exports. default = new CommentsGrowController();
