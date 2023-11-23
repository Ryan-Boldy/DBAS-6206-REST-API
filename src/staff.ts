import { PutItemCommand } from "@aws-sdk/client-dynamodb";
import { client } from "./imports";
import { Response, Request } from "express";


const tabName = "MyMusicDepot";

export async function PostStaff(req: Request, res: Response) {
    const data = await req.body;
    const pk = req.url;
    const putCommand = {
        TableName: tabName,
        Item: {
            PartitionKey: { S: pk },
            SortKey: { S: data.SortKey },
            staffUser: { S: data.staffUser },
            staffPass: { S: data.staffPass },
            staffApproved: { BOOL: data.staffApproved },
            staffFirstName: { S: data.staffFirstName },
            staffLastName: { S: data.staffLastName },
            staffApprovedBy: { S: data.staffApprovedBy }
        },
    };
    await client.send(new PutItemCommand(putCommand));
    res.status(200).json({ message: "OK" });
}