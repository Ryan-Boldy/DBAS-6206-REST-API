import { PutItemCommand } from "@aws-sdk/client-dynamodb";
import { client } from "./imports";
import { Response, Request } from "express";


const tabName = "MyMusicDepot";

export async function PostInstructor(req: Request, res: Response) {
    const data = await req.body;
    const pk = req.url;
    const putCommand = {
        TableName: tabName,
        Item: {
            PartitionKey: { S: pk },
            SortKey: { S: data.SortKey },
            inClasses: { L: data.inClasses },
            inFirstName: { S: data.inFirstName },
            inLastName: { S: data.inLastName },
            inTransactions: { L: data.inTransactions },
            inAuthor: { S: data.inAuthor },
            inNotes: { S: data.inNotes }
        },
    };

    await client.send(new PutItemCommand(putCommand));
    res.status(200).json({ message: "OK" });
}