import patientModel from "./patient.schema.js";
import ReportModel from "../report/report.schema.js";

export default class PatientRepository{

    // find a patient on the basis of phone number
    // chek if the patient is already being registered
    async findByPhone(phone){
        let patient = await patientModel.findOne({phone});
        return patient;
    }

    // register a patient if doctor is logged in
    async register(name,phone){
        // check if the patient is already registered or not
        let patient = await this.findByPhone(phone);
        if(patient){
            //if patient is already registered then return the patient
            return patient;
        }
        else{
            // if patient is not registered the register the patient
            await patientModel.create({name,phone});
            return true;
        }
    }

    async generateReport(patientid,doctorid,status,time){
        try{
            let report = await ReportModel.create({
                doctorid,
                patientid,
                status,
                "createdAt":time
            });
            return {
                'status':true,
                'report':report
            }
        }
        catch(err){
            return {
                'message':err,
                'status':false
            }
        }
    }

}