import mongoose from "mongoose"; //ORM FOR MONGO DB
import cors from "cors";
import dotenv from "dotenv";
import express from "express"; // use to create server
import {
  CreateEmployee,
  DeleteEmployee,
  GetEmployees,
  UpdateEmployee,
} from "./controllers/Employee.js";

//to access environment variable
dotenv.config();
const app = express(); //express type variable
app.use(express.json()); //data in json format
app.use(cors());

//creating APIs
app.post("/employee", CreateEmployee);
app.put("/employee", UpdateEmployee);
app.delete("/employee", DeleteEmployee);
app.get("/employee", GetEmployees);

//url will be http://localhost:8081/employee

mongoose
  .connect(process.env.DB_URL)
  .then(() => {
    console.log("database connected");
    //to create express type server, to access environment variable
    app.listen(process.env.PORT, () => {
      console.log("Server Running at Port : " + process.env.PORT);
    });
  })
  .catch((error) => {
    console.log("ERROR CONNECTING DATABASE: " + error);
    console.log("database connection error");
  });
