"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const functions_1 = require("./functions");
const staff_1 = require("./staff");
const classes_1 = require("./classes");
const bookings_1 = require("./bookings");
const clients_1 = require("./clients");
const instructors_1 = require("./instructors");
const student_1 = require("./student");
const transactions_1 = require("./transactions");
const shared_1 = require("./shared");
const app = (0, express_1.default)();
const port = 3005;
app.use(express_1.default.json());
app.listen(port, () => {
    console.log("Server is running on port", port);
});
//Initalize route
app.get('/init', functions_1.Populate);
//Staff CRUD
app.get('/staff', shared_1.SharedGet);
app.patch('/staff', shared_1.SharedUpdate);
app.delete('/staff', shared_1.SharedDelete);
app.post('/staff', staff_1.PostStaff);
//Class CRUD
app.get('/class', shared_1.SharedGet);
app.patch('/class', shared_1.SharedUpdate);
app.delete('/class', shared_1.SharedDelete);
app.post('/class', classes_1.PostClass);
//Booking CRUD
app.get('/booking', shared_1.SharedGet);
app.patch('/booking', shared_1.SharedUpdate);
app.delete('/booking', shared_1.SharedDelete);
app.post('/booking', bookings_1.PostBooking);
//Clients CRUD
app.get('/client', shared_1.SharedGet);
app.patch('/client', shared_1.SharedUpdate);
app.delete('/client', shared_1.SharedDelete);
app.post('/client', clients_1.PostClient);
//Instructors CRUD
app.get('/instructor', shared_1.SharedGet);
app.patch('/instructor', shared_1.SharedUpdate);
app.delete('/instructor', shared_1.SharedDelete);
app.post('/instructor', instructors_1.PostInstructor);
//Students CRUD
app.get('/student', shared_1.SharedGet);
app.patch('/student', shared_1.SharedUpdate);
app.delete('/student', shared_1.SharedDelete);
app.post('/student', student_1.PostStudent);
//Transactions CRUD
app.get('/transaction', shared_1.SharedGet);
app.patch('/transaction', shared_1.SharedUpdate);
app.delete('/transaction', shared_1.SharedDelete);
app.post('/transaction', transactions_1.PostTransaction);
