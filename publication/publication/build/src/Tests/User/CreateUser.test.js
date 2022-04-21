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
const EmailService_1 = __importDefault(require("../../Infra/Services/EmailService"));
const MessageBroker_1 = __importDefault(require("../../Infra/Services/MessageBroker"));
const CreateUserUseCase_1 = __importDefault(require("../../Domain/UseCases/User/Create/CreateUserUseCase"));
const UserRepository_1 = __importDefault(require("../../Infra/Repository/UserRepository"));
test("Should create a new user", function () {
    return __awaiter(this, void 0, void 0, function* () {
        const create = new CreateUserUseCase_1.default(new UserRepository_1.default);
        const user = yield create.handle("Jefferson", "Souza", "jeff@gmail.com", "123");
        const email = new EmailService_1.default(user.email, "Bem-vindo", "Teste de message broker");
        const messageBroker = new MessageBroker_1.default();
        yield email.send(messageBroker);
        expect(user.name).toBe("Jefferson");
    });
});
