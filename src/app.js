const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

require('dotenv').config();

const app = express();

const routes = require('./routes/index');

mongoose.connect(process.env.MONGO_URI, {
    useUnifiedTopology: true,
    useNewUrlParser: true
}, console.log('connected to database'));

app.use(express.json());
app.use(cors());
app.use(routes);

app.listen(3000, () => {
    console.log('server running')
})