// import { useState } from "react";
// import Input, {InputProps} from "../../customInput/CustomInput";
// import Input from "../../customInput/CustomInput";
import { Link, useNavigate } from "react-router-dom";
import Button, { ButtonProps } from "../../customButton/CustomButton";
import { useCreateUsersMutation } from "../../../redux/api/usersApi";
import { Field, Form, Formik } from "formik";
import { registrationShema } from "../../../utils/validations/resigtrationValidation";

const RegistrationForm: React.FC = () => {
  const navigate = useNavigate();
  const [createUser] = useCreateUsersMutation();
  //  const [email, setEmail] = useState("");
  //   const [password, setPassword] = useState("");
  //   const [userName, setUserName] = useState("");

  // const handleGetEmail = (value: string) => {
  //   setEmail(value);
  // };
  // const handleGetPassword = (value: string) => {
  //   setPassword(value);
  // };

  // const handleGetUserName = (value: string) => {
  //   setUserName(value);
  // };

  // const loginInputProps : InputProps={
  //   type: 'email',
  //   label:'Email',

  // }

  const handleSubmit = async (velues: any) => {
    const { email, userName, password } = velues;
    const result = await createUser({ email, password, userName });
    if (result) {
      navigate("/login");
    }
  };

  const loginButtonProps: ButtonProps = {
    type: "submit",
    variant: "primary",
    color: "blue",
    width: "300px",
  };

  return (
    <Formik
      initialValues={{ email: "", userName: "", password: "" }}
      onSubmit={handleSubmit}
      validationSchema={registrationShema}
    >
      {({ errors, touched }) => {
        return (
          <Form style={{ display: "flex", flexDirection: "column" }}>
            <label htmlFor="email">Email</label>
            <Field id="email" name="email" type="email" placeholder="email" />
            {touched.email && errors.email ? (
              <div style={{ color: "red" }}>{errors.email}</div>
            ) : null}
            <label htmlFor="userName">userNAme</label>
            <Field
              id="userName"
              name="userName"
              type="userName"
              placeholder="IMA"
            />
            {touched.userName && errors.userName ? (
              <div style={{ color: "red" }}>{errors.userName}</div>
            ) : null}
            <label htmlFor="password">parol</label>
            <Field
              id="password"
              name="password"
              type="password"
              placeholder="parol"
            />
              {touched.password && errors.password ? (
              <div style={{ color: "red" }}>{errors.password}</div>
            ) : null}
            <Link to="/login">У меня ксть аккаунт, войти </Link>

            <Button {...loginButtonProps}>Зарегистрироваться</Button>
          </Form>
        );
      }}
    </Formik>
  );
};
export default RegistrationForm;
