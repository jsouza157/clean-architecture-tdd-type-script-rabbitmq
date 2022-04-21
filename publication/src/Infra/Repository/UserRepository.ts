import UserEntity from "../../Domain/Entities/UserEntity";
import IUserRepository from "../../Domain/Interfaces/IUserRepository";

export default class UserRepository implements IUserRepository{
    async create(name: string, lastName: string, email: string, password: string): Promise<UserEntity> {
        return await new UserEntity(name, lastName, email, password);
    }
}