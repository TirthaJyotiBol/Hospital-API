import DoctorRepository from "./doctor.repository.js";
import jwt from 'jsonwebtoken';

let docRepo = new DoctorRepository();

export default class DoctorController{

    // register a doctor on the basis of username and password
    static async registerDoctor(req,res){
        let username = req.body.username;
        let password = req.body.password;
        let isRegistered =  await docRepo.registerDoctor(username,password);
        if(isRegistered==false){
            res.json({
                "message":"Doctor already registered"
            });
        }
        else {
            res.json({
                "message":"Doctor registered Successfully"
            });
        }
    }

    // login a doctor
    static async login(req,res){
        let username = req.body.username;
        let password = req.body.password;
        let doctor = await docRepo.findDoctorByUsername(username);
        if(doctor){
            let login = await docRepo.loginDoctor(username,password);
            if(login){
                try{
                    let token = jwt.sign(
                       {doctorid:login._id},process.env.jwt_secret_key,{expiresIn:'1h'}
                    );
                    return res.json({
                        'message':'user logged in successfully',
                        'token':token
                    })
                 }
                 catch(err){
                    return res.render('login',{userNotFound:"user not found,please register"});
                 }
            }
            else{
                return res.json({'message':'Password Doesnot Match, please check your password'});
            }
        }
        else{
            return res.json({'message':"User Not Registered"});
        }
    }

}