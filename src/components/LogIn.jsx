import React, { useState } from "react";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import Form from "react-bootstrap/Form";
import { loginUser } from "api/auth";
import { useNavigate } from "react-router-dom";

function LogIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleClick = async (e) => {
    e.preventDefault();
    const credentials = { email, password };
    try {
      const match = await loginUser(credentials);
      if(match) navigate("/shop");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <h1>Log in with your credentials:</h1>
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
      <button className="btn btn-primary" type="submit" onClick={handleClick}>
        LOG IN
      </button>
    </div>
  );
}

export default LogIn;
