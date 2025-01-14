import mongoose from "mongoose";
const { Schema } = mongoose; // object destructuring
//creating structure
const EmployeeSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    address: {
      type: String,
      required: true,
    },
    salary: {
      type: Number,
      required: true,
    },
  },
  { timestamps: true }
);
//creating model
const EmployeeModel = mongoose.model("employee", EmployeeSchema);
//to access outside write this
export default EmployeeModel;
