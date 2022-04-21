import { Channel } from "amqplib";
import IMailService from "../../Domain/Interfaces/IMailService";
import MessageBroker from "./MessageBroker";

export default class EmailService implements IMailService {
    message: string;
    subject: string;
    to: string;

    constructor(to : string, subject : string, message: string) {
        this.to = to;
        this.subject = subject;
        this.message = message;
    }

    public async send(messageBroker : MessageBroker): Promise<void> {
        const connection = await messageBroker.connection();
        const channel: Channel = await connection.createChannel();
        await channel.assertQueue('emailQueue');

        channel.sendToQueue('emailQueue', Buffer.from(this.to));
    }
}