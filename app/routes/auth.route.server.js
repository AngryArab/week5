import {Router} from "express";
import { DisplayLoginPage, 
    DisplayRegisterPage, 
    ProcessLoginPage,
    ProcessLogoutPage,
    ProcessRegisterPage} from '../controllers/auth.controller.server.js';

const router = Router();

// displays login page
router.get('/login', DisplayLoginPage);
// processes login page
router.post('/login', ProcessLoginPage);


// shows registration page
router.get('/register', DisplayRegisterPage);
// display processed register page
router.post('/register', ProcessRegisterPage);

// proccess a logout
router.get('/logout', ProcessLogoutPage);

export default router; //exports the router from above