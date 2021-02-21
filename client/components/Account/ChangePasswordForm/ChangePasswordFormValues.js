import * as Yup from "yup";

export const initalValues = {
  password: "",
  repeatPassword: "",
};

export const validationSchema = Yup.object({
  password: Yup.string()
    .required(true)
    .oneOf([Yup.ref("repeatPassword")], true),
  repeatPassword: Yup.string()
    .required(true)
    .oneOf([Yup.ref("password")], true),
});
