import { app } from './app';
require("dotenv").config();


// Tworzymy serwer
app.listen(process.env.PORT, () => {
    console.log(`Serwer jest połączony z portem ${process.env.PORT}`);
})
