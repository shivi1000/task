import mongoose from 'mongoose'
 async function createConnection()
{
   await mongoose.connect('mongodb://localhost:27017/db');
}

 export = createConnection;