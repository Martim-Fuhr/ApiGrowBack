import CommentsMe from '../models/CommentsMe';

class CommentsMeController {
  async index(request, response) {
    return response.json(await CommentsMe.findAll());
  }

  async show(request, response) {
    const { id } = request.params;
    return response.json(await CommentsMe.findOne({ where: { id } }));
  }

  async store(request, response) {
    const { name, comment } = request.body;
    return response.json(await CommentsMe.create({ name, comment }));
  }

  async update(request, response) {
    const { id } = request.params;
    const { name, comment } = request.body;
    return response.json(
      await CommentsMe.create(
        { name, comment },
        {
          where: { id },
          returning: true,
        }
      )
    );
  }

  async delete(request, response) {
    const { id } = request.params;
    await CommentsMe.destroy({ where: { id } });
    response.sendStatus(202);
  }
}

export default new CommentsMeController();
