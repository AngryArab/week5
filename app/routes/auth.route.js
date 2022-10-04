import router, { Router } from 'express';

const router = Router();

router.get('/login', DisplayLoginPage);
//display regis page

router.get('/register', DisplayRegisterPage);

router.get('/login', ProcessedLoginPage);

router.get('/login', DisplayRegisteredPage);

router.get('/logout', ProcessLogOutPage);
