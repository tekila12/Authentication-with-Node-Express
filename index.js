const express = require('express')
const mongoose = require('mongoose')
const dotenv = require('dotenv')
const cookieParser = require('cookie-parser')
const cors = require('cors')
dotenv.config()
const app = express()

const PORT = process.env.PORT || 4000;


app.use(express.json());
app.use(cookieParser());
app.use(cors({
  origin:["htpp://localhost:3000"]
}));
mongoose.connect(process.env.MDB_CONNECT, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

mongoose.connection.on('connected', () => {
  console.log('connected to database');
});



app.listen(PORT,()=>{
    console.log(`Server started at ${PORT}`)
})


app.use("/auth", require("./routers/userRouter"));
app.use("/customer", require("./routers/customerRouter"));
