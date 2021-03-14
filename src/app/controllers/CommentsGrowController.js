import CommentsGrow from '../models/CommentsGrow';

class CommentsGrowController {
  async index(request, response) {
    return response.json(await CommentsGrow.findAll());
  }

  async show(request, response) {
    const { id } = request.params;
    return response.json(await CommentsGrow.findOne({ where: { id } }));
  }

  async store(request, response) {
    const { name, email, comment } = request.body;
    return response.json(await CommentsGrow.create({ name, email, comment }));
  }

  async update(request, response) {
    const { id } = request.params;
    const { name, email, comment } = request.body;
    return response.json(
      await CommentsGrow.create(
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
    await CommentsGrow.destroy({ where: { id } });
    response.sendStatus(202);
  }
}

export default new CommentsGrowController();
