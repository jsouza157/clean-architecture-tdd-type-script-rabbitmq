import EmailService from "../../Infra/Services/EmailService";
import MessageBroker from "../../Infra/Services/MessageBroker";
import CreateUserUseCase from "../../Domain/UseCases/User/Create/CreateUserUseCase";
import UserRepository from "../../Infra/Repository/UserRepository";

test("Should create a new user", async function () {
    const create = new CreateUserUseCase(new UserRepository);
    const user = await create.handle("Jefferson", "Souza", "jeff@gmail.com", "123");
    const email = new EmailService(user.email, "Bem-vindo", "Teste de message broker");
    const messageBroker = new MessageBroker();
    await email.send(messageBroker);

    expect(user.name).toBe("Jefferson");
});