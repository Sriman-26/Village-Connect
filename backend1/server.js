const express=require("express");
const mongoose=require("mongoose");
const cors=require("cors");
const bcrypt=require("bcryptjs");
const jwt=require("jsonwebtoken");
//initilaize the app
const app=express();
//Middleware
app.use(express.json());
app.use(cors());
//connection to mongodb
