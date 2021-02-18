import * as Yup from 'yup';

export const initialValues = () => {
  return {
    title: '',
    name: '',
    city: '',
    address: '',
    postalCode: '',
    phone: '',
    state: '',
  }
}

export const validationSchema = Yup.object({
  title: Yup.string().required(true),
  name: Yup.string().required(true),
  city: Yup.string().required(true),
  address: Yup.string().required(true),
  postalCode: Yup.string().required(true),
  phone: Yup.string().required(true),
  state: Yup.string().required(true),
})
