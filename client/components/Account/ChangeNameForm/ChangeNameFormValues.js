import * as Yup from 'yup';

export const initalValues = (name, lastname) => {
  return{
    name: name || '',
    lastname: lastname || ''
  }
}

export const validationSchema = Yup.object({
  name: Yup.string().required(true),
  lastname: Yup.string().required(true)
});