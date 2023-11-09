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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const functions_1 = require("./functions");
const staff_1 = require("./staff");
const app = (0, express_1.default)();
const port = 3005;
app.use(express_1.default.json());
app.listen(port, () => {
    console.log("Server is running on port", port);
});
app.get('/init', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield (0, functions_1.Populate)(client);
        res.json({ message: 'OK' });
    }
    catch (error) {
        console.error('Error populating DynamoDB:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
}));
app.get('/staff', staff_1.GetStaff);
app.put('/staff', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const putParams = {};
    res.status(200).json({ message: "OK" });
}));
