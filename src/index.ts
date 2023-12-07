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
import { init } from './init';
import cors from 'cors';
import { PostRoom } from './rooms';

init();


const app = express();

const corsOptions = {
    origin: 'http://localhost:5173',
    optionsSuccessStatus: 200,
}

app.use(cors(corsOptions));


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
app.get('/bookings', SharedGet);
app.patch('/bookings', SharedUpdate);
app.delete('/bookings', SharedDelete);
app.post('/bookings', PostBooking);

//Clients CRUD
app.get('/clients', SharedGet);
app.patch('/clients', SharedUpdate);
app.delete('/clients', SharedDelete);
app.post('/clients', PostClient);

//Instructors CRUD
app.get('/instructors', SharedGet);
app.patch('/instructors', SharedUpdate);
app.delete('/instructors', SharedDelete);
app.post('/instructors', PostInstructor);

//Students CRUD
app.get('/students', SharedGet);
app.patch('/students', SharedUpdate);
app.delete('/students', SharedDelete);
app.post('/students', PostStudent);

//Transactions CRUD
app.get('/transactions', SharedGet);
app.patch('/transactions', SharedUpdate);
app.delete('/transactions', SharedDelete);
app.post('/transactions', PostTransaction);

app.get('/rooms', SharedGet);
app.post('/rooms', PostRoom)