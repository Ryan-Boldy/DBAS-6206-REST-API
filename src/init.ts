import { PutItemCommand } from "@aws-sdk/client-dynamodb";
import data from "../data/input.json";
import { marshall } from "@aws-sdk/util-dynamodb";
import { client } from "./imports";


async function put(input: any) {
    const putParams = {
        TableName: "MyMusicDepot",
        Item: marshall(input),
    };
    const res = await client.send(new PutItemCommand(putParams));
    console.log(res);
    return res;
}

export async function init() {
    const promises = [];
    const parsed: any = data;
    const array: any[] = parsed['data:'];
    console.log(array);
    for(const item of array) {
        promises.push(put(item));
    }
    await Promise.all(promises);
    console.log("Data initialized.");
}