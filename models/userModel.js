const { timeStamp } = require("console");
const mongoose = require("mongoose");

const userModel = new mongoose.Schema({
    username : {
        type : String,
        trim : true,   //left-rigth blank spcace will remove
        unique : true,
        required : [true, "Username is required"],
        minLength : [3, "Username must be at least 3 characters"]
    },
    email : {
        type : String,
        lowercase : true,
        required : [true, "Email is required"],
        match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'Please fill a valid email address']
    },
    password : {
        type : String,
        required : [true, "Username is required"],
        minLength : [3, "Username must be at least 3 characters"],
        maxLength : [15, "Username must be at most 15 characters"]
    }, 
}, { timestamps : true} 
//In Mongoose, the timestamps: true option is used to automatically add two fields 
//to the schema: createdAt and updatedAt. These fields are automatically managed by Mongoose.
// createdAt: This field is automatically set to the current date and time when a new document is created.
// updatedAt: This field is automatically updated to the current date and time whenever a document is updated or modified.
)



const user = mongoose.model("user", userModel);

module.exports = user;