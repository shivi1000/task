import {Router} from 'express'
import  signup from '../controller/signup';
import login from '../controller/login';
import getuserprofile from '../controller/getUserProfile';
import updateprofile from '../controller/updateProfile';
import deleteprofile from '../controller/deleteProfile';
const router = Router();

router.post("/signup",signup);
router.post("/login", login);
router.post("/getuserprofile", getuserprofile);
router.put("/updateprofile",updateprofile)
router.post("/deleteprofile",deleteprofile)

export = router;