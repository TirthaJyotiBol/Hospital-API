import Express from "express";
import PatientController from "./patient.controller.js";
let patientRouter = Express.Router();

// patient can be registered only for doctor registered
patientRouter.post('/register',(req,res)=>{
    PatientController.registerPatient(req,res);
});

// create report for the patient
patientRouter.post('/:patientid/create_report',(req,res)=>{
    PatientController.createReport(req,res);
})


export default patientRouter;