import express from 'express';
import { studentControler } from './student.controler';

const router = express.Router();

// will call controler
router.post('/create-student', studentControler.createStudent);
router.get('/', studentControler.getAllStudent);
router.get('/:studentId', studentControler.getStudent);

export const studentRoutes = router;
