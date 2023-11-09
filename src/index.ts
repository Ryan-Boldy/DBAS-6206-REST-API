import { marshall } from '@aws-sdk/util-dynamodb';
import express, { query } from 'express';
import { Populate, Query } from './functions';
import { DeleteStaff, GetStaff, PatchStaff, PostStaff, PutStaff } from './staff';
import { client } from './imports';
import { DeleteClass, GetClass, PatchClass, PostClass, PutClass } from './classes';
import { DeleteBooking, GetBooking, PatchBooking, PostBooking, PutBooking } from './bookings';
import { GetClient, PutClient, PostClient, PatchClient, DeleteClient } from './clients';
import { GetInstructor, PutInstructor, PostInstructor, PatchInstructor, DeleteInstructor } from './instructors';
import { GetStudent, PutStudent, PostStudent, PatchStudent, DeleteStudent } from './student';
import { GetTransaction, PutTransaction, PostTransaction, PatchTransaction, DeleteTransaction } from './transactions';

const app = express();
const port = 3005;

app.use(express.json());
app.listen(port, () => {
    console.log("Server is running on port", port);
});

//Initalize route
app.get('/init', Populate);
  
//Staff CRUD
app.get('/staff', GetStaff);
app.put('/staff', PutStaff);
app.post('/staff', PostStaff);
app.patch('/staff', PatchStaff);
app.delete('/staff', DeleteStaff);

//Class CRUD
app.get('/class', GetClass);
app.put('/class', PutClass);
app.post('/class', PostClass);
app.patch('/class', PatchClass);
app.delete('/class', DeleteClass);

//Booking CRUD
app.get('/booking', GetBooking);
app.put('/booking', PutBooking);
app.post('/booking', PostBooking);
app.patch('/booking', PatchBooking);
app.delete('/booking', DeleteBooking);

//Clients CRUD
app.get('/client', GetClient);
app.put('/client', PutClient);
app.post('/client', PostClient);
app.patch('/client', PatchClient);
app.delete('/client', DeleteClient);

//Instructors CRUD
app.get('/instructor', GetInstructor);
app.put('/instructor', PutInstructor);
app.post('/instructor', PostInstructor);
app.patch('/instructor', PatchInstructor);
app.delete('/instructor', DeleteInstructor);

//Students CRUD
app.get('/student', GetStudent);
app.put('/student', PutStudent);
app.post('/student', PostStudent);
app.patch('/student', PatchStudent);
app.delete('/student', DeleteStudent);

//Transactions CRUD
app.get('/transaction', GetTransaction);
app.put('/transaction', PutTransaction);
app.post('/transaction', PostTransaction);
app.patch('/transaction', PatchTransaction);
app.delete('/transaction', DeleteTransaction);