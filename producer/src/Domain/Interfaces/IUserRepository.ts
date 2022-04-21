import UserEntity from "../Entities/UserEntity";

export default interface IUserRepository {
    create(name: string, lastName: string, email: string, password: string) : Promise<UserEntity>
}