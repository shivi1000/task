import  createConnection  from "./connection";
import {Schema ,model} from 'mongoose';


interface User{
    name:String,
    password:String,
    phn:Number,
    email:String
}


const schema= new Schema ({


    name:{
        type:String,
        required:true,
    },
    password:{
        type:String,
        required:true,
    },
    phn:{
        type:Number,
        required:true
    },
    email:{
        type:String,
        //default: "shivani.sharma1@appinventiv.com",
        required: true
    },
    token:{
        type:String
    }

});
const Userr = model<User>('User', schema);

export default Userr