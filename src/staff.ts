import { DynamoDBClient } from "@aws-sdk/client-dynamodb";
import { Put, Query, Update } from "./functions";
import { client } from "./imports";
import { Response, Request } from "express";
import { unmarshall } from "@aws-sdk/util-dynamodb";

export async function GetStaff(req:Request, res:Response) {
    const result = await Query("Staff");
    res.json(result.Items);
}

export async function PutStaff(req:Request, res:Response) {
    const result = await Put(req.body.json());
    res.status(200).json({message: "OK", item: unmarshall(result)});
}

export async function PatchStaff(req:Request, res:Response) {
    const result = await Patch(req.body.json());
    res.status(200).json({message: "OK", item: unmarshall(result)});
}

export async function DeleteStaff(req:Request, res:Response) {
    const result = await Delete(req.body.json());
    res.status(200).json({message: "OK", item: unmarshall(result)});
}

export async function PostStaff(req:Request, res:Response) {
    const result = await Post(req.body.json());
    res.status(200).json({message: "OK", item: unmarshall(result)});
}