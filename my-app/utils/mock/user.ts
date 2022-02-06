import Mock from "mockjs";
import { User } from "../../type/user";
export const createUser = (): User => {
    return {
        id: Mock.Random.id(),
        nick: Mock.Random.cname(),
        avatar: Mock.Random.image("150x150", '#894FC4', '#FFF'),
    }
}