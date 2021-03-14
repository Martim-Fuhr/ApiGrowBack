import { Router } from 'express';
import CommentsMeController from '../controllers/CommentsMeController';

const routes = new Router();

routes.get('/comments', CommentsMeController.index);
routes.get('/comments/:id/', CommentsMeController.show);
routes.post('/comments', CommentsMeController.store);
routes.put('/comments/:id/', CommentsMeController.update);
routes.delete('/comments/:id/', CommentsMeController.delete);

export default routes;
