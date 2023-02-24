import express from "express";
import bodyParser from 'body-parser';

import { MongooseUrl } from "./const.js";
import mongoose from "mongoose";
import cors from 'cors'

const app = express();

app.use(bodyParser.json());
app.use(cors());

app.use(bodyParser.urlencoded({ extended: true }));

app.use("/");

mongoose
.connect(MongooseUrl)
        .then( () => console.log("Data Base"))  
        .catch((err) => console.log( err.message));


app.listen(Port, () => console.log(`5000`));



