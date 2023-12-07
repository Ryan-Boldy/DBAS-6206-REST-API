import { PutItemCommand } from "@aws-sdk/client-dynamodb";
import { client } from "./imports";
import { Response, Request } from "express";
import { marshall } from "@aws-sdk/util-dynamodb";


const tabName = "MyMusicDepot";

export async function PostClient(req: Request, res: Response) {
    const data = await req.body;
    const pk = req.url;
    const putCommand = {
        TableName: tabName,
        Item: marshall({
            PartitionKey: pk,
            SortKey: data.SortKey,
            clStudents: data.clStudents,
            clFirstName: data.clFirstName,
            clLastName: data.clLastName,
            Author:  data.Author,
            clNotes: data.clNotes,
            clBalance: data.clBalance
        }),
    };
    console.log(putCommand);
    await client.send(new PutItemCommand(putCommand));
    res.status(200).json({ message: "OK" });
}