import { PutItemCommand } from "@aws-sdk/client-dynamodb";
import { client } from "./imports";
import { Response, Request } from "express";


const tableName = "MyMusicDepot";

export async function PostBooking(req: Request, res: Response) {
    const data = await req.body;
    const pk = req.url;
    const putCommand = {
        TableName: tableName,
        Item: {
            PartitionKey: { S: pk },
            SortKey: { S: data.SortKey },
            bkTime: { S: data.bkTime },
            buthor: { S: data.Author },
            bkNotes: { S: data.bkNotes },
            bkRoom: {S: data.bkRoom},
            bkClass: {S: data.bkClass}
        },
    };
    console.log(putCommand);
    await client.send(new PutItemCommand(putCommand));
    res.status(200).json({ message: "OK"});
}