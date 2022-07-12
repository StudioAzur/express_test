import express  from 'express';
import { UsersController } from '../controller/usersController';

const router = express.Router();
const controller = new UsersController();



router.get('', controller.displayUsers);


export default router;