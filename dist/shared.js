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
exports.SharedUpdate = exports.SharedDelete = exports.SharedGet = void 0;
const functions_1 = require("./functions");
function SharedGet(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const pk = req.url;
        const result = yield (0, functions_1.Get)(pk);
        res.status(200).json(result.Items);
    });
}
exports.SharedGet = SharedGet;
function SharedDelete(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const data = yield req.body;
        const pk = req.url;
        console.log(data);
        const sk = data.SortKey;
        yield (0, functions_1.Delete)(pk, sk);
        res.status(200).json({ message: "OK" });
    });
}
exports.SharedDelete = SharedDelete;
function SharedUpdate(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const data = yield req.body;
        const pk = req.url;
        const result = yield (0, functions_1.Update)(data, pk);
        res.status(200).json({ message: "OK", item: result.Attributes });
    });
}
exports.SharedUpdate = SharedUpdate;
