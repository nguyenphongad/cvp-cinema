const express = require('express');
const dotenv = require('dotenv').config();
const cors = require('cors');
const { default: mongoose } = require('mongoose');
const cookieParser = require('cookie-parser')


const app = express();

//connect database (mongodb)
mongoose.connect(process.env.MONGO_URL)
    .then(() => { console.log("connect database mongodb success") })
    .catch((err) => { console.log('connect database mongodb fail, error :' + err) })


app.use(express.json());
app.use(cookieParser());
app.use(express.urlencoded({ extended: false }));


app.use(cors({
    origin: true,
    credentials: true
}));
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    next();
});

const getRouter = require('./routers/authRouters');
app.use('/', getRouter);


const port = 7000;
app.listen(port, () => { console.log('server is running on port ' + port) });