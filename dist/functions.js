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
exports.Populate = exports.Update = exports.Delete = exports.Get = void 0;
const client_dynamodb_1 = require("@aws-sdk/client-dynamodb");
const util_dynamodb_1 = require("@aws-sdk/util-dynamodb");
const imports_1 = require("./imports");
function Get(pk) {
    return __awaiter(this, void 0, void 0, function* () {
        const queryParams = {
            TableName: 'MyMusicDepot',
            KeyConditionExpression: "PartitionKey = :pk",
            ExpressionAttributeValues: (0, util_dynamodb_1.marshall)({
                ":pk": pk
            }),
        };
        return yield imports_1.client.send(new client_dynamodb_1.QueryCommand(queryParams));
    });
}
exports.Get = Get;
function Delete(pk, sk) {
    return __awaiter(this, void 0, void 0, function* () {
        const delParams = {
            TableName: 'MyMusicDepot',
            Key: {
                PartitionKey: { S: pk },
                SortKey: { S: sk },
            }
        };
        return yield imports_1.client.send(new client_dynamodb_1.DeleteItemCommand(delParams));
    });
}
exports.Delete = Delete;
function Update(data, pk) {
    return __awaiter(this, void 0, void 0, function* () {
        const updateExpressionParts = [];
        const expressionAttributeValues = {};
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
                PartitionKey: { S: pk },
                SortKey: { S: data.SortKey }
            },
            UpdateExpression: `SET ${updateExpressionParts.join(", ")}`,
            ExpressionAttributeValues: (0, util_dynamodb_1.marshall)(expressionAttributeValues),
            ReturnValues: "ALL_NEW",
        };
        console.log(updateCommand);
        return yield imports_1.client.send(new client_dynamodb_1.UpdateItemCommand(updateCommand));
    });
}
exports.Update = Update;
function Populate(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        function Execute(putParams) {
            return __awaiter(this, void 0, void 0, function* () {
                const promises = [];
                for (const param of putParams) {
                    console.log(new client_dynamodb_1.PutItemCommand(param).input.Item);
                    promises.push(imports_1.client.send(new client_dynamodb_1.PutItemCommand(param)));
                }
                return Promise.all(promises);
            });
        }
        function Staff() {
            return __awaiter(this, void 0, void 0, function* () {
                const putParams = [];
                const put1 = {
                    TableName: "MyMusicDepot",
                    Item: (0, util_dynamodb_1.marshall)({
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
                };
                const put2 = {
                    TableName: "MyMusicDepot",
                    Item: (0, util_dynamodb_1.marshall)({
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
                };
                putParams.push(put1);
                putParams.push(put2);
                return Execute(putParams);
            });
        }
        function Student() {
            return __awaiter(this, void 0, void 0, function* () {
                const putParams = [];
                const put1 = {};
                putParams.push(put1);
                return Execute(putParams);
            });
        }
        function Instructors() {
            return __awaiter(this, void 0, void 0, function* () {
                const putParams = [];
                putParams.push({});
                return Execute(putParams);
            });
        }
        function Clients() {
            return __awaiter(this, void 0, void 0, function* () {
                const putParams = [];
                putParams.push({});
                return Execute(putParams);
            });
        }
        function Classes() {
            return __awaiter(this, void 0, void 0, function* () {
                const putParams = [];
                putParams.push({});
                return Execute(putParams);
            });
        }
        function Bookings() {
            return __awaiter(this, void 0, void 0, function* () {
                const putParams = [];
                putParams.push({});
                return Execute(putParams);
            });
        }
        function Transactions() {
            return __awaiter(this, void 0, void 0, function* () {
                const putParams = [];
                putParams.push({});
                return Execute(putParams);
            });
        }
        yield Promise.all([Staff(), Student(), Instructors(), Clients(), Classes(), Bookings(), Transactions()]);
        return yield Promise.all([Staff()]);
    });
}
exports.Populate = Populate;
