import client, {Connection} from 'amqplib';
require('dotenv').config();

export default class MessageBroker {
    public async connection() : Promise<Connection> {
        const connection: Connection = await client.connect(
            `amqp://${process.env.MQ_USER}:${process.env.MQ_PASSWORD}@${process.env.MQ_SERVER}:${process.env.MQ_PORT}`
        );

        return connection;
    }
}