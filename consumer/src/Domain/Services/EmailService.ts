import client, {Connection, Channel, ConsumeMessage} from 'amqplib'
import MessageBroker from "../../Infra/Services/MessageBroker";

export default class EmailService {
    async send() {
        const consumer = (channel: Channel) => (msg: ConsumeMessage | null): void => {
            if (msg) {
              // Display the received message
              console.log(msg.content.toString())
              // Acknowledge the message
              channel.ack(msg)
            }
        }

        const messageBroker = new MessageBroker();
        const connection : Connection = await messageBroker.connection();
        const channel: Channel = await connection.createChannel();
        await channel.assertQueue('emailQueue');

        channel.consume('emailQueue', consumer(channel));
    }
}