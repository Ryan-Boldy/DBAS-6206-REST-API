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
exports.PostClient = void 0;
const client_dynamodb_1 = require("@aws-sdk/client-dynamodb");
const imports_1 = require("./imports");
const tabName = "MyMusicDepot";
function PostClient(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const data = yield req.body;
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
                clBalance: { N: data.clBalance }
            },
        };
        yield imports_1.client.send(new client_dynamodb_1.PutItemCommand(putCommand));
        res.status(200).json({ message: "OK" });
    });
}
exports.PostClient = PostClient;
