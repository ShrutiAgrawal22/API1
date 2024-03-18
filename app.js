require("dotenv").config({path: "./.env"});

const express = require("express");

const app = express();

//routes 
const userRouter = require("./routes/userRoute");

//body pasrser (use to see data of post route)
app.use(express.json());
app.use(express.urlencoded({extended : true}));   

//db connection 
const conn = require("./models/dbconfig");
conn.dbconnection();

app.use("/api/user", userRouter);

//the routes which are not exits, for them this will run and show a message which
//contain -> success - false and 
//           route that you are trying to access.
app.all("*", (req, res, next) => {
    res.status(404).json({success : false, message : `${req.url} route not found`});
})

app.listen(process.env.PORT, () => {
    console.log(`The server is running on port ${process.env.PORT}`);
});