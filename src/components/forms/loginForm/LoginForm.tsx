import React from "react";
// import Input, {InputProps} from "../../customInput/CustomInput";
import Input from "../../customInput/CustomInput";

import { Link, useNavigate } from "react-router-dom";
import Button, { ButtonProps } from "../../customButton/CustomButton";
import { useLoginMutation } from "../../../redux/api/loginApi";
import { useFormik } from "formik";

const LoginForm: React.FC = () => {
  const navigate = useNavigate();
  const [login] = useLoginMutation();
  // const [email, setEmail] = useState("");
  // const [password, setPassword] = useState("");

  // const handleGetEmail = (value: string) => {
  //   setEmail(value);
  // };
  // const handleGetPassword = (value: string) => {
  //   setPassword(value);
  // };

  //   const loginInputProps : InputProps={
  //     type: 'email',
  //     label:'Email',

  //   }

  const loginButtonProps: ButtonProps = {
    type: "submit",
    variant: "primary",
    color: "blue",
    width: "300px",
  };

  // const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
  //   event.preventDefault();
  //   const result = await login({ email, password });
  //   if ("data" in result) {
  //     const { token } = result.data;
  //     localStorage.setItem("token", token);
  //     localStorage.setItem("isAuth", "true");
  //     setEmail("");
  //     setPassword("");
  //     navigate("/");

  //   }
  // };

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    onSubmit: async (values) => {
        const result = await login({email: values.email, password:values.password});
        if ("data" in result) {
          const { token } = result.data;
          localStorage.setItem("token", token);
          localStorage.setItem("isAuth", "true");
          navigate("/");
    
        }
      }
    
  });

  return (
    <form onSubmit={formik.handleSubmit}>
      <h3>Вход</h3>
      <Input
        type="email"
        label="Email"
        value={formik.values.email}
        onChange={formik.handleChange}
        placeholder="Введите собшения"
        width="300px"
      />
      <Input
        type="password"
        label="Password"
        value={formik.values.password}
        onChange={formik.handleChange}
        placeholder="Введите пароль"
        width="300px"
      />
      <Link to="/registration">Нет аккаунт, зарегистрируйтесь </Link>
      <div>
        <Button {...loginButtonProps}>Войти</Button>
      </div>
    </form>
  );
};
export default LoginForm;
