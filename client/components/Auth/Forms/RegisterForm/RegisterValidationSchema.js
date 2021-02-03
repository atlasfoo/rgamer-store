import * as Yup from 'yup';

export default Yup.object({
  name: Yup.string().required(true),
  lastname: Yup.string().required(true),
  username: Yup.string().required(true),
  email: Yup.string().email().required(true),
  password: Yup.string().required(true),
});