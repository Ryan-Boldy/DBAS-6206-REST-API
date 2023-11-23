import express, { query } from 'express';
import { Populate } from './functions';
import { PostStaff } from './staff';
import { PostClass} from './classes';
import { PostBooking } from './bookings';
import { PostClient } from './clients';
import { PostInstructor } from './instructors';
import { PostStudent} from './student';
import { PostTransaction } from './transactions';
import { SharedDelete, SharedGet, SharedUpdate } from './shared';

const app = express();
const port = 3005;

app.use(express.json());
app.listen(port, () => {
    console.log("Server is running on port", port);
});

//Initalize route
app.get('/init', Populate);
  
//Staff CRUD
app.get('/staff', SharedGet);
app.patch('/staff', SharedUpdate);
app.delete('/staff', SharedDelete);
app.post('/staff', PostStaff);

//Class CRUD
app.get('/class', SharedGet);
app.patch('/class', SharedUpdate);
app.delete('/class', SharedDelete);
app.post('/class', PostClass);

//Booking CRUD
app.get('/booking', SharedGet);
app.patch('/booking', SharedUpdate);
app.delete('/booking', SharedDelete);
app.post('/booking', PostBooking);

//Clients CRUD
app.get('/client', SharedGet);
app.patch('/client', SharedUpdate);
app.delete('/client', SharedDelete);
app.post('/client', PostClient);

//Instructors CRUD
app.get('/instructor', SharedGet);
app.patch('/instructor', SharedUpdate);
app.delete('/instructor', SharedDelete);
app.post('/instructor', PostInstructor);

//Students CRUD
app.get('/student', SharedGet);
app.patch('/student', SharedUpdate);
app.delete('/student', SharedDelete);
app.post('/student', PostStudent);

//Transactions CRUD
app.get('/transaction', SharedGet);
app.patch('/transaction', SharedUpdate);
app.delete('/transaction', SharedDelete);
app.post('/transaction', PostTransaction);
