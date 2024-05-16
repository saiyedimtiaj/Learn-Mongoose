import { Request, Response } from 'express';
import { StudentServices } from './student.service';

const createStudent = async (req: Request, res: Response) => {
  try {
    const { student } = req.body;
    const result = await StudentServices.createStudentIntoiDb(student);
    res.status(200).json({
      sucess: true,
      message: 'Student is created sucessfully',
      data: result,
    });
  } catch (err) {
    console.log(err);
  }
};

const getAllStudent = async (req: Request, res: Response) => {
  try {
    const result = await StudentServices.getAllStudentFromDb();
    res.status(200).json({
      sucess: true,
      message: 'Students are retrived sucessfully',
      data: result,
    });
  } catch (err) {
    console.log(err);
  }
};

const getStudent = async (req: Request, res: Response) => {
  try {
    const studentId = req.params.studentId;
    const result = await StudentServices.getSingleStudentFromDb(studentId);
    res.status(200).json({
      sucess: true,
      message: 'Student is retrived sucessfully',
      data: result,
    });
  } catch (err) {
    console.log(err);
  }
};

export const studentControler = {
  createStudent,
  getAllStudent,
  getStudent,
};
