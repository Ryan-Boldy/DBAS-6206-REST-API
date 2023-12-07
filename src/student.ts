import { PutItemCommand } from "@aws-sdk/client-dynamodb";
import { client } from "./imports";
import { Response, Request } from "express";
import { marshall } from "@aws-sdk/util-dynamodb";

const tabName = "MyMusicDepot";

export async function PostStudent(req: Request, res: Response) {
    const data = await req.body;
    const pk = req.url;
    const putCommand = {
        TableName: tabName,
        Item: marshall({
            PartitionKey: pk,
            SortKey: data.SortKey,
            stFirstName: data.stFirstName,
            stLastName: data.stLastName,
            stClasses: data.stClasses,
            stClient: data.stClient,
            Author: data.Author,
            stNotes: data.stNotes
        }),
    };
    console.log(putCommand);
    await client.send(new PutItemCommand(putCommand));
    res.status(200).json({ message: "OK" });
}