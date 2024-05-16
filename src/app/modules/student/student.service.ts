import { StudentModal } from '../student.model';
import { Student } from './student.interface';

const createStudentIntoiDb = async (student: Student) => {
  const result = await StudentModal.create(student);
  return result;
};

const getAllStudentFromDb = async () => {
  const result = await StudentModal.find();
  return result;
};

const getSingleStudentFromDb = async (id: string) => {
  const result = await StudentModal.findOne({ id: id });
  return result;
};

export const StudentServices = {
  createStudentIntoiDb,
  getAllStudentFromDb,
  getSingleStudentFromDb,
};
