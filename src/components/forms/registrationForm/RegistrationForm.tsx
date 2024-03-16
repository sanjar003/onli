import { useState } from "react";
// import Input, {InputProps} from "../../customInput/CustomInput";
import Input from "../../customInput/CustomInput";
import { Link, useNavigate } from "react-router-dom";
import Button, { ButtonProps } from "../../customButton/CustomButton";
import { useCreateUsersMutation } from "../../../redux/api/usersApi";

const RegistrationForm: React.FC = () => {
  const navigate = useNavigate();
  const [createUser] = useCreateUsersMutation();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [userName, setUserName] = useState("");

  const handleGetEmail = (value: string) => {
    setEmail(value);
  };
  const handleGetPassword = (value: string) => {
    setPassword(value);
  };

  const handleGetUserName = (value: string) => {
    setUserName(value);
  };

  //   const loginInputProps : InputProps={
  //     type: 'email',
  //     label:'Email',

  //   }

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const result = await createUser({ email, password, userName });
    if (result) {
      setEmail("");
      setPassword("");
      setUserName("");
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
    <form onSubmit={handleSubmit}>
      <h3>Регистрация</h3>
      <Input
        type="email"
        label="Email"
        value={email}
        onChange={handleGetEmail}
        placeholder="Введите собшения"
        width="300px"
      />
      <Input
        type="password"
        label="Password"
        value={password}
        onChange={handleGetPassword}
        placeholder="Введите пароль"
        width="300px"
      />
      <Input
        type="text"
        label="Имя пользвателья"
        value={userName}
        onChange={handleGetUserName}
        placeholder="Имя пользвателья"
        width="300px"
      />
      <Link to="/login">У меня ксть аккаунт, войти </Link>
      <div>
        <Button {...loginButtonProps}>Зарегистрироваться</Button>
      </div>
    </form>
  );
};
export default RegistrationForm;
