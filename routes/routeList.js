import express from "express"

import { createList,getLists } from "../Controller/controllerlist.js";

const router = express.Router();
router.post('/create', createList);
router.get('/get', getLists);

export default router;