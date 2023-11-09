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
exports.Populate = exports.Query = void 0;
const client_dynamodb_1 = require("@aws-sdk/client-dynamodb");
const util_dynamodb_1 = require("@aws-sdk/util-dynamodb");
function Query(client, pk) {
    return __awaiter(this, void 0, void 0, function* () {
        const queryParams = {
            TableName: 'MyMusicDepot',
            KeyConditionExpression: "PartitionKey = :pk",
            ExpressionAttributeValues: (0, util_dynamodb_1.marshall)({
                ":pk": pk
            }),
        };
        return yield client.send(new client_dynamodb_1.QueryCommand(queryParams));
    });
}
exports.Query = Query;
function Populate(client) {
    return __awaiter(this, void 0, void 0, function* () {
        function Execute(putParams) {
            return __awaiter(this, void 0, void 0, function* () {
                const promises = [];
                for (const param of putParams) {
                    console.log(new client_dynamodb_1.PutItemCommand(param).input.Item);
                    promises.push(client.send(new client_dynamodb_1.PutItemCommand(param)));
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
