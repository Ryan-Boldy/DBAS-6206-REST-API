"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PostStaff = exports.DeleteStaff = exports.UpdateStaff = exports.GetStaff = void 0;
const client_dynamodb_1 = require("@aws-sdk/client-dynamodb");
const functions_1 = require("./functions");
const imports_1 = require("./imports");
const util_dynamodb_1 = require("@aws-sdk/util-dynamodb");
function GetStaff(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const result = yield (0, functions_1.Get)("Staff");
        res.status(200).json(result.Items);
    });
}
exports.GetStaff = GetStaff;
function UpdateStaff(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const data = yield req.body.json();
        const updateExpressionParts = [];
        const expressionAttributeValues = {};
        // Iterate over data properties and build the update expression
        Object.entries(data).forEach(([key, value]) => {
            if (value !== null && value !== undefined) {
                const expressionKey = `#${key}`;
                const expressionValue = `:${key}`;
                updateExpressionParts.push(`${expressionKey} = ${expressionValue}`);
                expressionAttributeValues[expressionKey] = key;
                expressionAttributeValues[expressionValue] = value;
            }
        });
        const updateCommand = new client_dynamodb_1.UpdateItemCommand({
            TableName: "MyMusicDepot",
            Key: {
                PartitionKey: { S: "Staff" },
                SortKey: { S: data.StaffID }
            },
            UpdateExpression: `SET ${updateExpressionParts.join(", ")}`,
            ExpressionAttributeNames: expressionAttributeValues,
            ExpressionAttributeValues: (0, util_dynamodb_1.marshall)(expressionAttributeValues)
        });
        const result = yield imports_1.client.send(updateCommand);
        res.status(200).json({ message: "OK" });
    });
}
exports.UpdateStaff = UpdateStaff;
function DeleteStaff(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const data = yield req.body.json();
        const pk = "Staff";
        const sk = data.SortKeyl;
        const result = yield (0, functions_1.Delete)(pk, sk);
        res.status(200).json({ message: "OK" });
    });
}
exports.DeleteStaff = DeleteStaff;
function PostStaff(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const data = yield req.body;
        console.log(data);
        console.log(data.StaffID);
        console.log(data.user);
        console.log(data.pass);
        console.log(data.firstName);
        console.log(data.approvedBy);
        // Assuming data.authorizations is an array, convert it to a Map
        const putCommand = new client_dynamodb_1.PutItemCommand({
            TableName: "MyMusicDepot",
            Item: {
                PartitionKey: { S: "Staff" },
                SortKey: { S: data.StaffID },
                user: { S: data.user },
                pass: { S: data.pass },
                approved: { BOOL: data.approved },
                firstName: { S: data.firstName },
                lastName: { S: data.lastName },
                approvedBy: { S: data.ApprovedBy }
            }
        });
        console.log(putCommand);
        const result = yield imports_1.client.send(putCommand);
        res.status(200).json({ message: "OK" });
    });
}
exports.PostStaff = PostStaff;
