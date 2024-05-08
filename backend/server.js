import express from 'express'
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import router from './routers/user.router.js';
import cors from 'cors';


dotenv.config();
const app = express();
app.use(express.json())
app.use(cors());

mongoose.connect(process.env.MONGODBURI).then(()=>{
    console.log('connected sucessfully');
    app.listen(4000,(error)=>{
        if(error) console.log(error);

        console.log('server started');
    })
})
.catch((error)=>{
    console.log('error occured ',error);
})


app.use(router)
