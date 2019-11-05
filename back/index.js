require('dotenv').config()
const express = require('express')
var cors = require('cors')
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());

var corsOptions = {
    origin: process.env.ORIGIN_CROSS_DOMAIN,
    optionsSuccessStatus: 200
  }

const mongoose = require("mongoose");
const Schema = mongoose.Schema;
(async () => {
    //string conexion
    mongoose.connect(process.env.   STRING_CONEXION, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    });
})();

const userSchemaJSON = {
    email: String,
    password: String,
};

const user_schems = new Schema(userSchemaJSON);
const User = mongoose.model('User', user_schems);

app.post('/users', cors(corsOptions), async (req, res, next) => {
    try {
        const { body } = req;
        const user = await User.create(body);
        res.status(201).json(user);
    } catch (e) {
        console.log(e);
        next(e);
    }
});

app.get('/users', cors(corsOptions), async (req, res) => {
    try {
        const user = await User.find();
        res.status(201).json(user);
    } catch (e) {
        console.log(e);
        next(e);
    }
});

app.listen(8080, () => {
    console.log('conecting to the 8080');
});