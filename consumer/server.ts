import express from "express";
import EmailService from "./src/Domain/Services/EmailService";

export default class Server {
    app: any;

    constructor() {
        this.app = express();
    }

    public listen(port = 3000) {
        this.app.listen(port, () => {
            console.log(`App listen in http://localhost:${port}`);
        });

        const email = new EmailService();
        email.send();
    }
}

const server = new Server();
server.listen(8000);