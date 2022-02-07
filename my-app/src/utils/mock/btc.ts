import Mock from "mockjs";
import { BTC } from "../../type/article";
export const createBTC = (): BTC => {
    return {
        comment: Mock.Random.integer(0, 100000),
        like: Mock.Random.integer(0, 100000),
        share: Mock.Random.integer(0, 100000)
    }
}