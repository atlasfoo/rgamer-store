import * as Yup from "yup";

export const initalValues = {
  email: "",
  repeatEmail: "",
};

export const validationSchema = Yup.object({
  email: Yup.string()
    .email(true)
    .required(true)
    .oneOf([Yup.ref("repeatEmail")], true),
  repeatEmail: Yup.string()
    .email(true)
    .required(true)
    .oneOf([Yup.ref("email")], true),
});
