import { Student } from '../student.model';
import { TStudent } from './student.interface';

const createStudentIntoiDb = async (studentData: TStudent) => {
  // built in static method
  if (await Student.isUserExist(studentData.id)) {
    throw new Error('User already exist');
  }
  const result = await Student.create(studentData);

  // const student = new Student(studentData);
  // if (await student.isUserExist(studentData.id)) {
  //   throw new Error('User already exist');
  // }
  // // built in instance method
  // const result = await student.save();
  return result;
};

const getAllStudentFromDb = async () => {
  const result = await Student.find();
  return result;
};

const getSingleStudentFromDb = async (id: string) => {
  // const result = await Student.findOne({ id: id });
  const result = await Student.aggregate([{ $match: { id: { $eq: id } } }]);
  return result;
};

const deleteStudentFromDb = async (id: string) => {
  const result = await Student.updateOne({ id }, { isDeleted: true });
  return result;
};

export const StudentServices = {
  createStudentIntoiDb,
  getAllStudentFromDb,
  getSingleStudentFromDb,
  deleteStudentFromDb,
};
