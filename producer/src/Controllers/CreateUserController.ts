import { Request, Response } from "express";
import CreateUserUseCase from "../Domain/UseCases/User/Create/CreateUserUseCase";
import UserRepository from "../Infra/Repository/UserRepository";
import EmailService from "../Infra/Services/EmailService";
import MessageBroker from "../Infra/Services/MessageBroker";

export default class CreateUserController {
   public async handle(req: Request, res: Response) {
       try {
            const create = new CreateUserUseCase(new UserRepository);
            const user = await create.handle(req.body.name, req.body.last_name, req.body.email, req.body.password);
            const email = new EmailService(user.email, "Bem-vindo", "Teste de message broker");
            const messageBroker = new MessageBroker();
            await email.send(messageBroker);

            res.json(user);
       } catch(error : any) {
            res.json(error.message);
       }
   } 
}