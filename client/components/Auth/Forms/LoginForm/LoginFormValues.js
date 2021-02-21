import * as Yup from 'yup';

export const initalValues = {
  identifier: '',
  password: ''
}

export const validationSchema = Yup.object({
  identifier: Yup.string().email(true).required(true),
  password: Yup.string().required(true)
});