import Express from "express";
import DoctorController from "./doctor.controller.js";

let doctorRouter = Express.Router();

doctorRouter.post('/register',(req,res)=>{
    DoctorController.registerDoctor(req,res);
});

doctorRouter.post('/login',(req,res)=>{
    DoctorController.login(req,res);
});


export default doctorRouter;