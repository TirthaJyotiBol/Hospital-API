import PatientRepository from "./patient.repository.js";
import Jwt from "jsonwebtoken";

let patientRepo = new PatientRepository();

export default class PatientController{

    static async registerPatient(req,res){
        let phone = req.body.phone;
        let name = req.body.name;
        let registerPatient = await patientRepo.register(name,phone);

        // if patient is not registered then register the patient and send the message of confirmation
        if(registerPatient == true){
            return res.json({
                'message':`Patient ${name} is registered`
            });
        }
        // check if the patient is already registered and if registered then Send message that patient is already registered
        else{
            let registerPatient_message = `Patient with phone ${phone}, is already regstered`;
            let response = {
                message: registerPatient_message,
                patient: registerPatient
            }
            return res.json(response);
        }
    }


    static async createReport(req,res){
        let token = req.headers.authorization;
        let decodedToken = Jwt.decode(token);

        let patient_id = req.params.patientid;
        let status = req.body.status;
        let doctor_id = decodedToken.doctorid;
        let time = new Date().toISOString();
        if(!status){
            res.json({
                'status':false,
                'message':'Status is required'
            })
        }

        let patientReport = await patientRepo.generateReport(patient_id,doctor_id,status,time);
        res.json(patientReport);
    }

}