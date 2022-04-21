import UserRepository from "../../../../Infra/Repository/UserRepository";

export default class CreateUserUseCase {
    userRepository: UserRepository;

    constructor(userRepository : UserRepository) {
        this.userRepository = userRepository;
    }

    public async handle(name : string, lastName : string, email : string, password : string) {
        return await this.userRepository.create(name, lastName, email, password);
    }
}