import { PutItemCommand } from "@aws-sdk/client-dynamodb";
import { client } from "./imports";
import { Response, Request } from "express";


const tabName = "MyMusicDepot";

export async function PostClient(req: Request, res: Response) {
    const data = await req.body;
    const pk = req.url;
    const putCommand = {
        TableName: tabName,
        Item: {
            PartitionKey: { S: pk },
            SortKey: { S: data.SortKey },
            clTransactions: { L: data.clTransactions },
            clStudents: { L: data.clStudents },
            clFirstName: { S: data.clFirstName },
            clLastName: { S: data.clLastName },
            clAuthor: { S: data.clAuthor },
            clNotes: { S: data.clNotes },
            clBalance: {N: data.clBalance}
        },
    };
    await client.send(new PutItemCommand(putCommand));
    res.status(200).json({ message: "OK" });
}