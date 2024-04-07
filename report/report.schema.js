import mongoose from "mongoose";

let ReportSchema = mongoose.Schema({
    "doctorid":{
        type:mongoose.Types.ObjectId,
        ref:'doctors'
    },
    "patientid":{
        type:mongoose.Types.ObjectId,
        ref:'patients'
    },
    "status":{
        type:"String",
        require:true
    },
    "createdAt":{
        type:"String",
    }
});

let ReportModel = mongoose.model('reports',ReportSchema);
export default ReportModel;