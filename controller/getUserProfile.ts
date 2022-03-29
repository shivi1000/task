import md5 from 'md5';
import jwt from 'jsonwebtoken'
import User from '../models/user';
import express from 'express';

export default async function getuserprofile(req:any,res:any,next:any)
{
    
        let {name, password , err} = jwtverification(req.body.token);
        if(err)
        {
            console.log(err);
            res.send(err);
        }else{
            let pass = md5(String(password))
            const userr = await User.findOne({name, pass});
            if(userr){
                res.send(userr);
            }
            else{
                res.send("User not found");
            }
        }
    
}


//jwt verified function
function jwtverification(token: any) 
{
    let name, password, err;

    jwt. verify(token, "secret", (error: any, decodedToken: any) => {
        if(error){
            err = error;
        }
        else{
            name = decodedToken.name;
            password = decodedToken.password;

        }
    })  
    return {name, password, err};
}