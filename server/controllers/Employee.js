import EmployeeModel from "../models/Employee.js";

export const CreateEmployee = async (req, res) => {
  try {
    console.log("lelo body:", req.body);

    //Validations

    //Name validation (Not more than 30 letters, can't be empty)

    //Address validation (Not more than 100 letters, can't be empty)

    //Salary validation
    if (req.body.salary < 0) {
      res.json({ message: "Salary cannot be negative" });
      return;
    }

    const newEmployee = {
      name: req.body.name,
      address: req.body.address,
      salary: req.body.salary,
    };

    //declaring variable
    const empData = await EmployeeModel.create(newEmployee);

    if (empData) res.status(201).send({ message: "Employee Created !!!" });
    else res.status(404).send({ message: "Unable to create employee !!!" });
  } catch (error) {
    console.log("fail to submit data !!!");
  }
};

export const UpdateEmployee = async (req, res) => {
  try {
    //declaring variable
    const empData = await EmployeeModel.findByIdAndUpdate(
      { _id: req.body._id },
      {
        //passing, it will come from view
        name: req.body.name,
        address: req.body.address,
        salary: req.body.salary,
      }
    );
    if (empData) res.status(200).send({ message: "Employee Updated !!!" });
    else res.status(404).send({ message: "Unable to Update employee !!!" });
  } catch (error) {
    console.log("fail to submit data !!!");
  }
};

export const DeleteEmployee = async (req, res) => {
  try {
    //declaring variable
    const empData = await EmployeeModel.deleteOne({ _id: req.body.id });
    if (empData) res.status(200).send({ message: "Employee Deleted !!!" });
    else res.status(404).send({ message: "Unable to delete employee !!!" });
  } catch (error) {
    console.log("fail to submit data !!!");
  }
};
//for display
export const GetEmployees = async (req, res) => {
  try {
    //declaring variable
    const empData = await EmployeeModel.find();
    res.status(200).send({ empData });
  } catch (error) {
    console.log("fail to submit data !!!");
  }
};
