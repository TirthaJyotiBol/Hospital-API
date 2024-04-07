import mongoose from "mongoose";

let patientSchema = mongoose.Schema({
    "name":{type:String,require:true},
    "phone":{type:String,require:true},
});

let patientModel = mongoose.model('patients',patientSchema);
export default patientModel;