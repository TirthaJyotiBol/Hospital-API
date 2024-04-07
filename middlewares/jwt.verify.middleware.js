import Jwt from "jsonwebtoken";

let setJWT = (req,res,next)=>{
    let authToken =req.headers.authorization; 

    try{
        Jwt.verify(authToken,process.env.jwt_secret_key);
        next();
    }
    catch(err){
        res.json({
            'message':'user not logged in, please log in to continue'
        })
    }

}

export default setJWT;