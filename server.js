require('dotenv').config()
const express = require('express');
const app = express();
const mongoose = require('mongoose');




// Connect to mongoDB database
mongoose.connect(process.env.DATABASE_URL, { useNewUrlParser: true , useUnifiedTopology: true })

const db = mongoose.connection
db.on('error', (error)=> console.error(error))
db.once('open', ()=> console.log('Connected to Database')) 

app.use(express.json())

const usersRoute = require('./routes/users')
app.use('/users', usersRoute)

const PORT = process.env.PORT || 3000
app.listen(PORT, () => console.log(`Server started on ${PORT}...`))