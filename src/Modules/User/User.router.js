import {Router} from 'express';
import * as userController from './controller/User.controller.js';
import { auth } from '../../Middleware/auth.middleware.js';
import { asyncHandler } from '../../Services/errorHandling.js';
import fileUpload, { fileValidation } from '../../Services/multer.js';
const router =Router();

router.patch('/profilePic',auth,fileUpload('user/profile',fileValidation.image).single('image'),userController.profilePic)
router.patch('/coverpic',auth,fileUpload('user/profile/cover',fileValidation.image).array('image',5),userController.coverPic)


export default router;