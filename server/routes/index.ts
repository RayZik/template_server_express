import { Router } from 'express';
import userApi from './api/user';

const restApi: Router = Router();

restApi.use('/user', userApi);


export { restApi }