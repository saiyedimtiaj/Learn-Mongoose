import Joi from 'joi';

const userNameSchema = Joi.object({
  firstName: Joi.string()
    .trim()
    .max(20)
    .required()
    .regex(/^[A-Z][a-zA-Z]*$/)
    .message(
      'First name must start with a capital letter and contain only alphabets.',
    ),
  middleName: Joi.string().optional().allow(''),
  lastName: Joi.string()
    .required()
    .regex(/^[a-zA-Z]+$/)
    .message('Last name must contain only alphabets.'),
});

const guardianSchema = Joi.object({
  fatherName: Joi.string().required(),
  fatherOccupation: Joi.string().required(),
  fatherContactNo: Joi.string().required(),
  motherName: Joi.string().required(),
  motherOccupation: Joi.string().required(),
  motherContactNo: Joi.string().required(),
});

const localGuardianSchema = Joi.object({
  name: Joi.string().required(),
  occupation: Joi.string().required(),
  contactNo: Joi.string().required(),
  address: Joi.string().required(),
});

const studentSchema = Joi.object({
  id: Joi.string().required(),
  password: Joi.string().required(),
  name: userNameSchema.required(),
  gender: Joi.string().valid('male', 'female', 'other').required().messages({
    'any.only': '{#label} must be one of [male, female, other]',
  }),
  dateOfBirth: Joi.string().optional(),
  email: Joi.string().email().required(),
  contactNo: Joi.string().required(),
  emergencyContactNo: Joi.string().required(),
  bloodGroup: Joi.string()
    .valid('A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-')
    .optional()
    .messages({
      'any.only': '{#label} must be one of [A+, A-, B+, B-, AB+, AB-, O+, O-]',
    }),
  presentAddress: Joi.string().required(),
  permanentAddress: Joi.string().optional(),
  guardian: guardianSchema.required(),
  localGuardian: localGuardianSchema.required(),
  profileImg: Joi.string().optional(),
  isDeleted: Joi.boolean(),
  isActive: Joi.string()
    .valid('active', 'blocked')
    .default('active')
    .messages({ 'any.only': '{#label} must be one of [active, blocked]' }),
});

export default studentSchema;
