"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const EmailService_1 = __importDefault(require("./src/Domain/Services/EmailService"));
class Server {
    constructor() {
        this.app = (0, express_1.default)();
    }
    listen(port = 3000) {
        this.app.listen(port, () => {
            console.log(`App listen in http://localhost:${port}`);
        });
        const email = new EmailService_1.default();
        email.send();
    }
}
exports.default = Server;
const server = new Server();
server.listen(8000);
