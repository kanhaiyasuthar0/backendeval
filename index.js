const express = require("express");
const app = express();
const mongoose = require("mongoose")

const connect = () => {
  return mongoose.connect("mongodb://localhost:27017/banking");
};
const User = mongoose.Schema({
  firstName:{ type : String , required : true},
  middleName: { type : String , required : false},
  lastName: { type : String , required : true},
  age: { type : String , required : true},
  email: { type : String , required : true},
  address: { type : String , required : true},
  gender: { type: String, default: "Female " },
  type: { type: String, default: "customer" },
  createdAt: { type : String , required : true},
  updatedAt: { type : String , required : true},
});
const BranchDetail = mongoose.Schema({
  name: { type : String , required : true},
  address:{ type : String , required : true},
  IFSC: { required: true, type: String },
  MICR: { required: true, type: Number },
  createdAt: { type : String , required : true},
  updatedAt: { type : String , required : true},
});
const MasterAccount = mongoose.Schema({
  balance: { type : String , required : true},
  createdAt: { type : String , required : true},
  updatedAt: { type : String , required : true},
});
const SavingsAccount = mongoose.Schema({
    account_number: {required:true, unique : true, type: Number },
    balance: { type : String , required : true},
    interestRate :{ type : String , required : true},
    createdAt: { type : String , required : true},
    updatedAt :{ type : String , required : true}, })
const FixedAccount = mongoose.Schema({
    account_number: { type: Number ,  required : true, unique: true},
balance: { type : String , required : true},
interestRate: { type : String , required : true},
startDate:{ type : String , required : true},
maturityDate: { type : String , required : true},
createdAt: { type : String , required : true},
updatedAt: { type : String , required : true},
})


const UserModel = mongoose.model("user", User);
app.get("/users", async (req, res) => {
    console.log("Hello");
    res.send()

});
const start = async () => {
  await connect();
  app.listen(9009, () => {
    console.log("Listening on port 9009");
  });
};
start();
