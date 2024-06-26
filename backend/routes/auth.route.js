import express from 'express';
import {  signup,login ,logout  } from '../controller/auth.controller.js';

const router=express.Router();


router.post('/api/auth/signup' , signup);

router.get('/api/auth/login' , login );

router.get('/api/auth/logout' , logout);

export default router