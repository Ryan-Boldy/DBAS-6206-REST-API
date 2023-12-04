import { DynamoDBClient, PutItemCommand, UpdateItemCommand } from "@aws-sdk/client-dynamodb";
import { Delete, Get, Update } from "./functions";
import { Response, Request } from "express";

export async function SharedGet(req:Request, res:Response) {
    const pk = req.url;
    const result = await Get(pk);
    console.log(pk);
    res.status(200).json(result.Items);
}

export async function SharedDelete(req:Request, res:Response) {
    const data = await req.body;
    const pk = req.url;
    console.log(data);
    const sk = data.SortKey;
    await Delete(pk, sk);
    res.status(200).json({message: "OK"});
}

export async function SharedUpdate(req:Request, res:Response) {
    const data = await req.body;
    const pk = req.url;
    const result = await Update(data, pk);
    res.status(200).json({message: "OK", item: result.Attributes});
}