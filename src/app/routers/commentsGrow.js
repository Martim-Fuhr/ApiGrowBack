import { Router } from 'express';
import CommentsGrowController from '../controllers/CommentsGrowController';

const routes = new Router();

routes.get('/commentsGrow', CommentsGrowController.index);
routes.get('/commentsGrow/:id/', CommentsGrowController.show);
routes.post('/commentsGrow', CommentsGrowController.store);
routes.put('/commentsGrow/:id/', CommentsGrowController.update);
routes.delete('/commentsGrow/:id/', CommentsGrowController.delete);

export default routes;
