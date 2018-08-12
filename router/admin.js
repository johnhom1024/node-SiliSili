import express from 'express';
import Admin from '../controller/admin/admin';
const router = express.Router()

router.get('/', Admin.login);

export default router;