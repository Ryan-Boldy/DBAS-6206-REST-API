import { PutItemCommand } from "@aws-sdk/client-dynamodb";
import { client } from "./imports";
import { Response, Request } from "express";


const tabName = "MyMusicDepot";

export async function PostStaff(req: Request, res: Response) {
    const data = req.body;
    const pk = req.url;
    console.log(data, pk);
    const putCommand = {
        TableName: tabName,
        Item: {
            "PartitionKey": { S: pk },
            "SortKey": { S: data.SortKey },
            "Author": { S: data.Author },
            "staffUser": { S: data.staffUser },
            "staffPass": { S: data.staffPass },
            "staffApproved": { BOOL: data.staffApproved },
            "staffFirstName": { S: data.staffFirstName },
            "staffLastName": { S: data.staffLastName },
        },
    };
    console.log(putCommand);
    await client.send(new PutItemCommand(putCommand));
    res.status(200).json({ message: "OK" });
}