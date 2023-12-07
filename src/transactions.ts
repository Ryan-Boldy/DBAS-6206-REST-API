import { PutItemCommand } from "@aws-sdk/client-dynamodb";
import { client } from "./imports";
import { Response, Request } from "express";

const tabName = "MyMusicDepot";

export async function PostTransaction(req: Request, res: Response) {
    const data = await req.body;
    const pk = req.url;
    const putCommand = {
        TableName: tabName,
        Item: {
            PartitionKey: { S: pk },
            SortKey: { S: data.SortKey },
            trClient: { S: data.trClient },
            trInstructor: { S: data.trInstructor },
            Author: { S: data.Author },
            trStatus: { BOOL: data.trStatus },
            trAmount: { N: data.trAmount },
            trNotes: {S: data.trNotes}
        },
    };
    console.log(putCommand);
    await client.send(new PutItemCommand(putCommand));
    res.status(200).json({ message: "OK" });
}