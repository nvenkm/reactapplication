import mongoose from "mongoose";
//creating structure
const EmployeeSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true,
    },
    address:{
        type:String,
        required:true,
    },
    salary:{
        type:Number,
        required:true,
    },
},{timestamps:true});
//creating model
const EmployeeModel=mongoose.model("employee",EmployeeSchema);
//to access outside write this
export default EmployeeModel;