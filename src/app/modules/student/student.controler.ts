import { Request, Response } from 'express';
import { StudentServices } from './student.service';
import Joi from 'joi';
import studentSchema from './student.validation';

const createStudent = async (req: Request, res: Response) => {
  try {
    const { student } = req.body;

    const { error } = studentSchema.validate(student);

    if (error) {
      res.status(500).json({
        sucess: false,
        message: 'something went wrong',
        err: error,
      });
    }

    const result = await StudentServices.createStudentIntoiDb(student);
    res.status(200).json({
      sucess: true,
      message: 'Student is created sucessfully',
      data: result,
    });
  } catch (err: any) {
    res.status(500).json({
      sucess: false,
      message: err.message || 'something went wrong',
      err: err,
    });
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
  } catch (err: any) {
    res.status(500).json({
      sucess: false,
      message: err.message || 'something went wrong',
      err: err,
    });
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
  } catch (err: any) {
    res.status(500).json({
      sucess: false,
      message: err.message || 'something went wrong',
      err: err,
    });
  }
};

const deleteStudent = async (req: Request, res: Response) => {
  try {
    const studentId = req.params.studentId;
    const result = await StudentServices.deleteStudentFromDb(studentId);
    res.status(200).json({
      sucess: true,
      message: 'Student delete sucessfully',
      data: result,
    });
  } catch (err: any) {
    res.status(500).json({
      sucess: false,
      message: err.message || 'something went wrong',
      err: err,
    });
  }
};

export const studentControler = {
  createStudent,
  getAllStudent,
  getStudent,
  deleteStudent,
};
