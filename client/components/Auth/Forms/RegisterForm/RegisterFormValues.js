import * as Yup from 'yup';

export const initialValues = {
  name: "",
  lastname: "",
  username: "",
  email: "",
  password: "",
};


export const validationSchema = Yup.object({
  name: Yup.string().required(true),
  lastname: Yup.string().required(true),
  username: Yup.string().required(true),
  email: Yup.string().email().required(true),
  password: Yup.string().required(true),
});