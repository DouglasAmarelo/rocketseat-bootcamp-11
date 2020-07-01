import { ValidationError } from 'yup';

interface ErrorsProps {
  [key: string]: string;
}

const getValidationErrors = (error: ValidationError): ErrorsProps => {
  const validationErrors: ErrorsProps = {};

  error.inner.forEach(err => {
    validationErrors[err.path] = err.message;
  });

  return validationErrors;
};

export default getValidationErrors;
