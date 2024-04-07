import mongoose from "mongoose";
import doctorModel from "./doctor.schema.js";

export default class DoctorRepository{

    async findDoctorById(id){
        try{
            const doctor = await doctorModel.findOne({_id:id});
            if(doctor){
                return{
                    status:true,
                    doctor:doctor
                }
            }
            else{
                return {
                    status:false,
                    'message':"Doctor not found"
                }
            }
        }
        catch(err){
            return {
                status:false,
                'message':"Doctor not found"
            }
        }
    }

    async findDoctorByUsername(username){
        try {
            const existingDoctor = await doctorModel.findOne({ username });
            return existingDoctor;
        } catch (error) {
            console.error("Error registering doctor:", error);
            return false;
        }
    }

    async loginDoctor(username,password){
        try {
            const existingDoctor = await doctorModel.findOne({ username,password });
            return existingDoctor;
        } catch (error) {
            console.error("Error registering doctor:", error);
            return false;
        }
    }

    async registerDoctor(username, password) {
        try {
            const existingDoctor = await doctorModel.findOne({ username });
            if (existingDoctor) {
                return false;
            }
            await doctorModel.create({ username, password });
            return true;
        } catch (error) {
            console.error("Error registering doctor:", error);
            return false;
        }
    }
}