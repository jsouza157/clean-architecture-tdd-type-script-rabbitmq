import express from "express";
import bodyParser from "body-parser";
import router from "./src/Routes/routes";

export default class Server {
    app: any;

    constructor() {
        this.app = express();
        this.middleware();
    }

    private async middleware() {
        this.app.use(bodyParser.json());
        this.app.use(bodyParser.urlencoded({ extended: true }));
        this.app.use(router);
    }

    public listen(port = 3000) {
        this.app.listen(port, () => {
            console.log(`App listen in http://localhost:${port}`);
        })
    }
}

const server = new Server();
server.listen(3000);