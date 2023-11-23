import { PutItemCommand } from "@aws-sdk/client-dynamodb";
import { client } from "./imports";
import { Response, Request } from "express";


const tabName = "MyMusicDepot";

export async function PostClass(req: Request, res: Response) {
    const data = await req.body;
    const pk = req.url;
    const putCommand = {
        TableName: tabName,
        Item: {
            PartitionKey: { S: pk },
            SortKey: { S: data.SortKey },
            classStudents: { L: data.classStudents },
            classInstructor: { S: data.classInstructor },
            classAuthor: { S: data.classAuthor },
            classNotes: { S: data.classNotes },
        },
    };
    await client.send(new PutItemCommand(putCommand));
    res.status(200).json({ message: "OK" });
}