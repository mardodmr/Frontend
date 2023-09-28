import React, { useState } from "react";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import Form from "react-bootstrap/Form";
import { loginUser } from "api/auth";
import { createUser } from "api/users";
import { useNavigate } from "react-router-dom";
import Button from "react-bootstrap/Button";
import { useAuth } from "context/auth-context";

function LogIn(props) {
  const { login } = useAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleClick = async (e) => {
    e.preventDefault();
    const credentials = { email, password };
    let match;

    if (props.submitButton === "login") {
      try {
        match = await login(credentials);
        navigate("/", { replace: true });
      } catch (err) {
        window.alert("Invalid Credentials");
      }
    } else {
      await createUser(credentials);
      navigate("/complete-profile", { replace: true });
    }
  };

  return (
    <div>
      {props.submitButton === "login" ? (
        <h1>Log in with your credentials:</h1>
      ) : (
        <h1>Create an account:</h1>
      )}
      <FloatingLabel
        controlId="floatingInput"
        label="Email address"
        className="mb-3"
      >
        <Form.Control
          required
          type="email"
          placeholder="name@example.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </FloatingLabel>
      <FloatingLabel controlId="floatingPassword" label="Password">
        <Form.Control
          required
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </FloatingLabel>
      <Button
        variant="primary"
        size="lg"
        className="btn btn-primary"
        type="submit"
        onClick={handleClick}
      >
        {props.submitButton}
      </Button>
    </div>
  );
}

export default LogIn;
