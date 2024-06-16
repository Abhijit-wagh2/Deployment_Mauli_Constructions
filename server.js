import express from "express";
import colors from "colors";
import dotenv from 'dotenv';
import morgan from "morgan";
import connectDB from "./config/db.js";
import router from "./routes/authRoute.js";
import categoryRoute from "./routes/categoryRoute.js";
import productRoutes from "./routes/productRoutes.js";
import cors from "cors";
import { fileURLToPath } from "url";

import path from 'path';

dotenv.config();

//database config
connectDB();
const __filename=fileURLToPath(import.meta.url);
const __dirname=path.dirname(__filename);
const app = express();


//middleware
app.use(cors());
app.use(express.json())
app.use(morgan('dev'))
app.use(express.static(path.join(__dirname,"./client/build")))

//routes
app.use('/api/v1/auth',router);
app.use('/api/v1/category',categoryRoute);
app.use('/api/v1/product',productRoutes);

// app.use('*',function(req,res){
//     res.sendFile(path.join(__dirname,"./client/build/index.html"))
// })


app.get('/', (req, res) => {
    res.send({
        message: "<h1>hello world welcome to new ecommerce app</h1>",
    });
});

//port
const PORT = process.env.PORT || 8080 ;


//run listen
app.listen(PORT, () =>{
    console.log(`Server running on ${PORT}`.bgCyan.white);
})
