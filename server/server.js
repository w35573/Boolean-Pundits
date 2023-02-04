require("dotenv").config({ path: "./config.env" });
var cors = require('cors');
const express = require('express');
const mongoose = require('mongoose');
const app = express();

app.use(express.json());
app.use(cors());

const port = process.env.PORT || 5000;

app.get("/", (req, res, next) => {
    res.send("API IS LIVE!");
});

app.get('/test', (req, res, next) => {
    res.status(200).json({
        error: "false",
        data: "test"
    });
});

// listen for requests
app.listen(port, () => {
    console.log('Listening on port', process.env.PORT)
});

// connect to db
mongoose.set("strictQuery", false);
mongoose.connect(process.env.MONGO_URI)
    .then(() => {
        console.log('Connected to mongoDB')
    })
    .catch((error) => {
        console.log(error)
    })