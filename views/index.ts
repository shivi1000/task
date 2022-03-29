import express from "express"
import router from '../routers/routes'
import createConnection from "../models/connection";
createConnection()
const app = express();
app.use(express.json())

app.use(router)


app.listen(8000,()=>{
     console.log("HELLO! You are listning at the port 8000");
})

