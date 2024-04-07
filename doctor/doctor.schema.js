import mongoose from "mongoose";

let doctorSchema = mongoose.Schema({
    "username":{
        require:true,
        type:String
    },
    "password":{
        require:true,
        type:String
    },
    "patientArray":[
        {
            type: mongoose.Types.ObjectId,
            ref:'patients'
        }
    ]    
});


let doctorModel = mongoose.model('dotors',doctorSchema);
export default doctorModel;