import * as Yup from 'yup';

export const initialValues = (address) => {
  return {
    title: address?.title || '',
    name: address?.name ||'',
    city: address?.city ||'',
    address: address?.address || '',
    postalCode: address?.postalCode || '',
    phone: address?.phone || '',
    state: address?.state || '',
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
