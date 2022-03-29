import md5 from 'md5';
import jwt from 'jsonwebtoken'
import User from '../models/user';
import express from 'express';

export default async function deleteprofile(req: any, res: any, next: any) {
   
    let { name, password, err } = jwtverification(req.headers.authorization);
    if (err) {
        res.send(err);
    } else {
        let pass = md5(String(password))
        
        const userr = await User.findOneAndDelete({name,password: pass})
        console.log(req.body)
    if (userr) {
        
        res.send(" successfully deleted");
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
    throw new Error('Function not implemented.');
}
