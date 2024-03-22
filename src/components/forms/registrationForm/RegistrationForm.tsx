import { Link, useNavigate } from "react-router-dom";
import Button, { ButtonProps } from "../../customButton/CustomButton";
import { useCreateUsersMutation } from "../../../redux/api/usersApi";
import { Field, Form, Formik } from "formik";
import { registrationShema } from "../../../utils/validations/resigtrationValidation";
import "./Registration.css";

const RegistrationForm: React.FC = () => {
  const navigate = useNavigate();
  const [createUser] = useCreateUsersMutation();

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
            <Field
              className="input"
              id="email"
              name="email"
              type="email"
              placeholder="email"
            />
            {touched.email && errors.email ? (
              <div style={{ color: "red" }}>{errors.email}</div>
            ) : null}
            <label htmlFor="userName">userNAme</label>
            <Field
              className="input"
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
              className="input"
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
