import * as express from 'express';


class AppSer {

    public app: express.Application;


    constructor() {
        this.app = express();
        this.config();
    }


    config(): void {
        this.app.get('/', (req, res) => {
            res.send('Express Application!');
        });
    }
}


export default new AppSer().app;
