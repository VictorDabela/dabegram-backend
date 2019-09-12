const express = require("express");
const mongoose = require("mongoose");

const app = express();

mongoose.connect('mongodb+srv://Omnistack:Omnistack@cluster0-jctst.mongodb.net/test?retryWrites=true&w=majority', {
   useNewUrlParser: true,
})

app.use(require('./routes.js'));

app.listen(3333);