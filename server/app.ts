import * as express from 'express';
import * as bp from 'body-parser';
import * as mongoose from 'mongoose';
import * as cors from 'cors';
import { join, extname, resolve } from "path";

import { restApi } from './routes';

/**
 * Сервер приложения
 */
class AppSer {
    public app: express.Application;

    constructor() {
        this.app = express();
        this.config();
        this.routes();
    }

    routes(): void {
        this.app.use('/api', restApi);
    }

    config(): void {
        //use
        this.app.use(bp.urlencoded({ extended: true }));
        this.app.use(bp.json());
        this.app.use(cors());

        this.app.use('/scripts', express.static(__dirname + '/../../node_modules'));
        this.app.use(express.static(join(__dirname, '/../../client/dist')));

        this.app.use((req: express.Request, res: express.Response, next) => {
            let err = new Error('Not Found');
            next(err);
        });

        this.app.use((err: any, req: express.Request, res: express.Response, next: express.NextFunction) => {
            res.status(err.status || 500);
            res.json({
                error: {},
                message: err.message
            });
        });

    }
}


export default new AppSer().app;
