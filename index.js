import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import authRoutes from "./routes/auth.js"
import listRoutes from "./routes/routeList.js"
dotenv.config();
const app = express();
app.use(express.json());
app.use(cors());

/*Routes*/

app.use("/auth",authRoutes);
app.use("/list",listRoutes)




/* Database Connection */

const PORT = process.env.PORT || 8089;

const Connect =()=>{
    return mongoose.connect(process.env.MONGO_URL,{
        useNewUrlParser: true,
        useUnifiedTopology:true
    })
}

app.listen(PORT, async ()=>{

    try {
        await Connect();
        console.log(`listing on port ${PORT}`)
    } catch (error) {
        console.log(error);
    }
})
