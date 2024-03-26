import React from "react";
import Input from "../../customInput/CustomInput";

import { Link, useNavigate } from "react-router-dom";
import Button, { ButtonProps } from "../../customButton/CustomButton";
import { useLoginMutation } from "../../../redux/api/loginApi";
import {  useFormik } from "formik";
import { loginShema } from "../../../utils/validations/loginValidations";

const LoginForm: React.FC = () => {
  const navigate = useNavigate();
  const [login] = useLoginMutation();

  const loginButtonProps: ButtonProps = {
    type: "submit",
    variant: "primary",
    color: "blue",
    width: "300px",
  };

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    
    validationSchema:loginShema,
    onSubmit: async (values) => {
      console.log(values);
      
      const result = await login({
        email: values.email,
        password: values.password,
      });
      if ("data" in result) {
        const { token } = result.data;
        localStorage.setItem("token", token);
        localStorage.setItem("isAuth", "true");
        navigate("/");
      }
    },
  });

  return (
    <form onSubmit={formik.handleSubmit}>
      <h3>Вход</h3>
      <Input
        id="email"
        type="email"
        label="Email"
        value={formik.values.email}
        onChange={formik.handleChange}
        placeholder="Введите собшения"
        width="300px"
        onBlur={formik.handleBlur}
      />
      {formik.touched.email && formik.errors.email ? (<div style={{color:'red'}}>{formik.errors.email}</div>) :  null}
      <Input
        id="password"
        type="password"
        label="Password"
        value={formik.values.password}
        onChange={formik.handleChange}
        placeholder="Введите пароль"
        width="300px"
        onBlur={formik.handleBlur}
      />
            {formik.touched.password && formik.errors.password ? (<div style={{color:'red'}}>{formik.errors.password}</div>) :  null}

      <Link to="/registration">Нет аккаунт, зарегистрируйтесь </Link>
      <div>
        <Button {...loginButtonProps}>Войти</Button>
      </div>
    </form>
  );
};
export default LoginForm;
