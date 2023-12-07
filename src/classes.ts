import { PutItemCommand } from "@aws-sdk/client-dynamodb";
import { client } from "./imports";
import { Response, Request } from "express";
import { marshall } from "@aws-sdk/util-dynamodb";


const tabName = "MyMusicDepot";

export async function PostClass(req: Request, res: Response) {
    const data = await req.body;
    const pk = req.url;
    console.log(data);
    const putCommand = {
        TableName: tabName,
        Item: marshall({
            PartitionKey: pk,
            SortKey: data.SortKey,
            classInstructor: data.classInstructor,
            Author: data.Author ,
            classNotes: data.classNotes ,
        }),
    };
    console.log(putCommand);
    await client.send(new PutItemCommand(putCommand));
    res.status(200).json({ message: "OK" });
}