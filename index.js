require('dotenv').config();
const cors = require('cors');
const express = require('express');
const mongoose = require('mongoose');
var fs = require('fs');
const https = require("https");
const mongoString = process.env.DATABASE_URL;

mongoose.connect(mongoString);
const database = mongoose.connection;

database.on('error', (error) => {
    console.log(error)
})

database.once('connected', () => {
    console.log('Database Connected');
})
const app = express();
app.use(cors())
app.use(express.json());

const routes = require('./routes/routes');

app.use('/api', routes)


/*
https.createServer(
    {
          key: fs.readFileSync("/etc/letsencrypt/live/canchero.app/privkey.pem"),
          cert: fs.readFileSync("/etc/letsencrypt/live/canchero.app/fullchain.pem")
    }, app)
    .listen(3010, ()=>{
        console.log('server is runing at port 3010')
});
*/


 app.listen(3010, () => {
     console.log(`Server Started at ${3010}`)
 })