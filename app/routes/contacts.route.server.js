import { Router } from "express";

import {  DisplayContactsList,
    DisplayContactEditPage, 
    ProcessContactDelete, 
    ProcessContactsEditPage
    } from "../controllers/contacts.controller.server.js";

    import { AuthGaurd } from "../utils/index.js";

const router = Router();


router.get('/contact-list', AuthGaurd, DisplayContactsList);
router.get('/contact-edit', AuthGaurd,DisplayContactEditPage);
router.post('/contact-edit/:id', AuthGaurd,ProcessContactsEditPage);
router.post('/contact-delete/:id',AuthGaurd, ProcessContactDelete);

export default router;