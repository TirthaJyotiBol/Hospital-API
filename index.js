import Express from "express";
import connect from "./mongoose.config.js";
import doctorRouter from "./doctor/doctor.routes.js";
import setJWT from "./middlewares/jwt.verify.middleware.js";
import patientRouter from "./patient/patient.routers.js";
import reportRouter from "./report/report.routes.js";
import dotenv from 'dotenv';

dotenv.config();

const server = Express();

server.use(Express.json());

// for form submission
server.use(Express.urlencoded({extended:true}));

server.use('/doctor',doctorRouter);
server.use('/patient',[setJWT],patientRouter);
server.use('/report',[setJWT],reportRouter);

server.listen(8200,async (err)=>{
    if(err){
        console.log(err);
    }
    else{
        await connect();
        await console.log('Listening to port: '+8200);
    }
})