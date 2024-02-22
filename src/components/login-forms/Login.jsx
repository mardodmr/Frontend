import { useState } from "react";
import { useNavigate } from "react-router-dom";
import LoginFields from "components/login-forms/LoginFields";
import { loginUser } from "api/auth";

function Login() {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const initialValues = {
    email: "",
    password: "",
  };

  const onSubmit = (values) => {
    setLoading(true);
    loginUser(values)
      .then(() => {
        setLoading(false);
        navigate("/", { replace: true });
      })
      .catch(() => window.alert("Invalid Credentials"));
  };

  return (
    <LoginFields
      loading={loading}
      initialValues={initialValues}
      onSubmit={onSubmit}
    />
  );
}

export default Login;
