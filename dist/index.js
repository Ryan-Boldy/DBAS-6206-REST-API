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
const app = (0, express_1.default)();
const port = 3005;
app.use(express_1.default.json());
app.listen(port, () => {
    console.log("Server is running on port", port);
});
//Initalize route
app.get('/init', functions_1.Populate);
//Staff CRUD
app.get('/staff', staff_1.GetStaff);
app.post('/staff', staff_1.PostStaff);
app.delete('/staff', staff_1.DeleteStaff);
//Class CRUD
app.get('/class', classes_1.GetClass);
app.put('/class', classes_1.PutClass);
app.post('/class', classes_1.PostClass);
app.patch('/class', classes_1.PatchClass);
app.delete('/class', classes_1.DeleteClass);
//Booking CRUD
app.get('/booking', bookings_1.GetBooking);
app.put('/booking', bookings_1.PutBooking);
app.post('/booking', bookings_1.PostBooking);
app.patch('/booking', bookings_1.PatchBooking);
app.delete('/booking', bookings_1.DeleteBooking);
//Clients CRUD
app.get('/client', clients_1.GetClient);
app.put('/client', clients_1.PutClient);
app.post('/client', clients_1.PostClient);
app.patch('/client', clients_1.PatchClient);
app.delete('/client', clients_1.DeleteClient);
//Instructors CRUD
app.get('/instructor', instructors_1.GetInstructor);
app.put('/instructor', instructors_1.PutInstructor);
app.post('/instructor', instructors_1.PostInstructor);
app.patch('/instructor', instructors_1.PatchInstructor);
app.delete('/instructor', instructors_1.DeleteInstructor);
//Students CRUD
app.get('/student', student_1.GetStudent);
app.put('/student', student_1.PutStudent);
app.post('/student', student_1.PostStudent);
app.patch('/student', student_1.PatchStudent);
app.delete('/student', student_1.DeleteStudent);
//Transactions CRUD
app.get('/transaction', transactions_1.GetTransaction);
app.put('/transaction', transactions_1.PutTransaction);
app.post('/transaction', transactions_1.PostTransaction);
app.patch('/transaction', transactions_1.PatchTransaction);
app.delete('/transaction', transactions_1.DeleteTransaction);
