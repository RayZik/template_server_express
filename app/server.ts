import * as express from 'express';


class Server {

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


export default new Server().app;
