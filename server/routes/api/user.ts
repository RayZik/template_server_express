import { Router, Request, Response, NextFunction } from 'express';

import { User } from '../../models'


/**
 * User api
 */
class userApi {

  public router: Router;

  constructor() {
    this.router = Router();
    this.routes();
  }


  getUsers(req: Request, res: Response, next: NextFunction) {
    User.find()
      .then((data) => {
        res.status(200).json({
          status: res.statusCode,
          data: data
        });
      })
      .catch((err) => {
        res.json({
          status: res.statusCode,
          error: err
        });
      });
  }


  routes() {
    this.router.get('/', this.getUsers);
  }
}


export default new userApi().router;