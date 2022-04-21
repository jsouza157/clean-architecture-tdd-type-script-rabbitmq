import MessageBroker from "../../Infra/Services/MessageBroker";

export default interface IMailService {
    to: string;
    subject: string;
    message : string;

    send(messageBroker : MessageBroker) : Promise<void>
}