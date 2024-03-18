const mongoose = require("mongoose") 

exports.dbconnection = async() => {
    try{
        mongoose.connect("mongodb+srv://shrutiagrawalhatta4:shrutiagrawalhatta4@cluster0.eeqd8fk.mongodb.net/r12?retryWrites=true&w=majority&appName=Cluster0");
        console.log("connection Established!");
    } catch (error){
        console.log(error)
    }
}