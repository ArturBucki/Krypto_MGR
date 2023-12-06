import { connected } from 'process';
import { app } from './app';
import connectDB from './utils/db';
require("dotenv").config();


// Tworzymy serwer
app.listen(process.env.PORT, () => {
    console.log(`Serwer jest połączony z portem ${process.env.PORT}`);
    connectDB();
})
