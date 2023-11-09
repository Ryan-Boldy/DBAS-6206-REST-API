import { DynamoDBClient } from "@aws-sdk/client-dynamodb";

export const client = new DynamoDBClient({
    region: "us-west-2", 
    endpoint: "http://localhost:8000", 
    credentials: {
        accessKeyId: "123", 
        secretAccessKey: "123"
    }
});