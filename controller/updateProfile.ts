import md5 from 'md5';
import jwt from 'jsonwebtoken'
import User from '../models/user';
import express from 'express';

export default async function updateprofile(req: any, res: any, next: any) {
   
    let { name , password, err } = jwtverification(req.body.token);
    console.log(jwtverification(req.body.token))
    if (err) {
        res.send(err);
    } else {
        let pass = md5(String(password))
        
        const userr = await User.findOneAndUpdate({name,password:pass}  ,req.body, { upsert: true })
        md5(req.body.password)
    if (userr) {
        
        res.send(" successfully updated");
    }
    else {
        res.send("User not found");
    }
}
}

//jwt verified function
function jwtverification(token: any) {
    let name, password, err;

    jwt.verify(token, "secret", (error: any, decodedToken: any) => {
        if (error) {
            err = error;
        }
        else {
            name = decodedToken.name;
            password = decodedToken.password;

        }
    })
    return { name, password, err };
}

function id(id: any, body: any) {
   throw new Error('Function not implemented.')};