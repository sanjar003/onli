import * as Yup from "yup";


export const loginShema = Yup.object({
    email: Yup.string()
      .email("Не корректный email")
      .required("Обезательное поле"),
    password: Yup.string().min(5, "Пароль должен содержать минимум 5 символов").required("Oбезательное поле"),
  })