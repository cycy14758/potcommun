const express = require('express')
const connectdb = require('./Config/Connect')
const app = express()
const port = 5000
require("dotenv").config({path:"./Config/.env"})
connectdb()
const cors = require("cors");

const corsOptions = {
   origin: '*',
   credentials: true,
   optionSuccessStatus: 200,
}

app.use("/uploads",express.static(__dirname+"/uploads"))
app.use(cors(corsOptions))
app.use(express.json())

//routes
app.use("/api/pot",require("./Routes/potRoute"))
app.use("/api/user",require("./Routes/userRoute"))


app.listen(port, (err) => err ? console.log(err) : console.log(`app listening on port ${port}!`))