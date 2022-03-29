import md5 from 'md5';
import jwt from 'jsonwebtoken'
import User from '../models/user';
import express from 'express';
async function signup(req:any, res:any, next:any)
{
    const user = await checkexist(req.body.email);
    // console.log(user);
    if(!user){
        create(req.body);
        console.log(await jwtcreation(req.body.name, req.body.password));
        res.status(200).json({
            msg:"signup successfully"
        })
        res.end()
    }else{
        res.send("User already exists");
    }
    
}
//check exist function
async function checkexist(email:any){
const user = await User.findOne({email:email})
return user;
}

async function encryption(pass:any){

    return md5(pass);
} 



async function create(user : any) {
    const data =  new User({
        name:user.name,
        password:await encryption(user.password),
        phn:user.phn,
        email:user.email
})       
await data.save()
}


async function jwtcreation(name: any, password: any) 
{
    const token= await jwt.sign({
        name:name,
        password:password,
    },'secret',{
        expiresIn:"5h"
    }
    );
    return token;
}

    
export default signup;


