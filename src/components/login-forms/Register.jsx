import { useState } from "react";
import { useNavigate } from "react-router-dom";
import LoginFields from "components/login-forms/LoginFields";
import { createUser } from "api/auth";

function Register() {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const initialValues = {
    email: "",
    password: "",
  };

  const onSubmit = (values) => {
    setLoading(true);
    createUser(values).then(() => {
      setLoading(false);
      navigate("/", { replace: true });
    });
  };

  return (
    <LoginFields
      loading={loading}
      initialValues={initialValues}
      onSubmit={onSubmit}
    />
  );
}

export default Register;
