import { DeleteItemCommand, PutItemCommand, QueryCommand, ReturnValue, UpdateItemCommand } from "@aws-sdk/client-dynamodb";
import { marshall } from "@aws-sdk/util-dynamodb";
import { client } from "./imports";
import { Request, Response } from "express";

export async function Get(pk: string) {
    const queryParams = {
        TableName: 'MyMusicDepot',
        KeyConditionExpression: "PartitionKey = :pk",
        ExpressionAttributeValues: marshall({
            ":pk": pk
        }),
    }
    return await client.send(new QueryCommand(queryParams));
}

export async function Delete( pk: string, sk: string) {
    const delParams = {
      TableName: 'MyMusicDepot',
      Key: {
        PartitionKey: {S: pk},
        SortKey: {S: sk},
      }  
    }
    return await client.send(new DeleteItemCommand(delParams));
}


export async function Update(data: any, pk:string) {
    const updateExpressionParts:string[] = [];
    const expressionAttributeValues: Record<string, any> = {};

    // Iterate over data properties and build the update expression
    Object.entries(data).forEach(([key, value]) => {
        if (value !== null && value !== undefined && key !== "SortKey") {
            const expressionKey = `${key}`;
            const expressionValue = `:${key}`; 
            
            updateExpressionParts.push(`${expressionKey} = ${expressionValue}`);
            //expressionAttributeValues[expressionKey] = key;
            expressionAttributeValues[expressionValue] = value;
        }
    });
    console.log(data);
    console.log(expressionAttributeValues);
    console.log(updateExpressionParts.join(", "));
    const updateCommand = {
        TableName: "MyMusicDepot",
        Key: {
            PartitionKey: {S: pk},
            SortKey: {S: data.SortKey}
        },
        UpdateExpression: `SET ${updateExpressionParts.join(", ")}`,
        ExpressionAttributeValues: marshall(expressionAttributeValues),
        ReturnValues: "ALL_NEW" as ReturnValue,
    };

    console.log(updateCommand);
    return await client.send(new UpdateItemCommand(updateCommand));

}

export async function Populate(req:Request, res:Response) {
    async function Execute(putParams: any[]) {
        const promises = [];
        for(const param of putParams) {
            console.log(new PutItemCommand(param).input.Item);
            promises.push(client.send(new PutItemCommand(param)));
        }
        return Promise.all(promises);
    }

    async function Staff() {
        const putParams = [];
        const put1 = {
            TableName: "MyMusicDepot",
            Item: marshall({
                PartitionKey: "Staff",
                SortKey: "59d81b4b-5375-4130-acfd-452dd1dc0a78",
                user: "boldyr",
                pass: "password",
                approved: true,
                authorzations: [],
                firstName: "Ryan",
                lastName: "Boldy",
                approvedBy: "RCON",
            })
        }
        const put2 = {
            TableName: "MyMusicDepot",
            Item: marshall({
                PartitionKey: "Staff",
                SortKey: "70f2cb67-d46f-4f65-b7f9-7f59eec626f5",
                user: "ameliae",
                pass: "password",
                approved: true,
                authorzations: [],
                firstName: "Amelia",
                lastName: "Eric-markovic",
                approvedBy: "RCON"
            })
 
        }
        putParams.push(put1);
        putParams.push(put2);
        return Execute(putParams);
    }
     
    async function Student() {
        const putParams = [];
        const put1 = {}
        putParams.push(put1);
        return Execute(putParams);
    }
    
    async function Instructors() {
        const putParams = [];
        putParams.push({
            
        });
        return Execute(putParams);
    }
    
    async function Clients() {
        const putParams = [];
        putParams.push({
            
        });
        return Execute(putParams);
    }
    
    async function Classes() {
        const putParams = [];
        putParams.push({
            
        });
        return Execute(putParams);
    }
    
    async function Bookings() {
        const putParams = [];
        putParams.push({
            
        });
        return Execute(putParams);
    }
    
    async function Transactions() {
        const putParams = [];
        putParams.push({
            
        });
        return Execute(putParams);
    }

    await Promise.all([Staff(), Student(), Instructors(), Clients(), Classes(), Bookings(), Transactions()]);
    return await Promise.all([Staff()]);
}

