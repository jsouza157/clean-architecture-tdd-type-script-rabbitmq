"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const MessageBroker_1 = __importDefault(require("../../Infra/Services/MessageBroker"));
class EmailService {
    send() {
        return __awaiter(this, void 0, void 0, function* () {
            const consumer = (channel) => (msg) => {
                if (msg) {
                    // Display the received message
                    console.log(msg.content.toString());
                    // Acknowledge the message
                    channel.ack(msg);
                }
            };
            const messageBroker = new MessageBroker_1.default();
            const connection = yield messageBroker.connection();
            const channel = yield connection.createChannel();
            yield channel.assertQueue('emailQueue');
            channel.consume('emailQueue', consumer(channel));
        });
    }
}
exports.default = EmailService;
