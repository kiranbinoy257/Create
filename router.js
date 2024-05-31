






import { Router } from "express";

import * as handler from './requestHandler.js'
// import { home } from 'requestHandler.js'

const router=Router();

router.route('/add').post(handler.addContact)
router.route('/get').get(handler.getContacts)
// router.route('/').get(home)

export default router;