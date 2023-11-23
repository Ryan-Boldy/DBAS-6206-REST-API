import { PutItemCommand } from "@aws-sdk/client-dynamodb";
import { client } from "./imports";
import { Response, Request } from "express";

const tabName = "MyMusicDepot";

export async function PostStudent(req: Request, res: Response) {
    const data = await req.body;
    const pk = req.url;
    const putCommand = {
        TableName: tabName,
        Item: {
            PartitionKey: { S: pk },
            SortKey: { S: data.SortKey },
            stFirstName: { S: data.stFirstName },
            stLastName: { S: data.stLastName },
            stClasses: { L: data.stClasses },
            stClient: { S: data.stClient },
            stAuthor: { S: data.stAuthor },
            stNotes: { S: data.stNotes }
        },
    };
    await client.send(new PutItemCommand(putCommand));
    res.status(200).json({ message: "OK" });
}