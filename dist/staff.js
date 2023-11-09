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
exports.PutStaff = exports.GetStaff = void 0;
const functions_1 = require("./functions");
const imports_1 = require("./imports");
function GetStaff(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const result = yield (0, functions_1.Query)(imports_1.client, "Staff");
            res.json(result.Items);
        }
        catch (error) {
            console.error('Error querying DynamoDB:', error);
            res.status(500).json({ error: 'Internal Server Error' });
        }
    });
}
exports.GetStaff = GetStaff;
function PutStaff(req, res, client) {
    return __awaiter(this, void 0, void 0, function* () {
    });
}
exports.PutStaff = PutStaff;
