import { URL } from "../../constants/api";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { useForm } from "react-hook-form";
import { useContext, useState } from "react";
import { schemaLogin } from "../../constants/Schema";
import { yupResolver } from "@hookform/resolvers/yup";
import ValidationError from "../../constants/ValidationError";
import Heading from "../../components/layout/Heading";
import AuthContext from "../../context/AuthContext";
import { useHistory } from "react-router-dom";

function LoginForm() {
  const [submitting, setSubmitting] = useState(false);
  const [loginError, setLoginError] = useState(null);
  const [, setAuth] = useContext(AuthContext);

  const history = useHistory();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schemaLogin) });

  function onSubmit(data) {
    setSubmitting(true);
    setLoginError(null);
    console.log(data);
    doLogin(data.username, data.password);
  }

  async function doLogin(username, password) {
    const data = JSON.stringify({ identifier: username, password: password });
    const options = {
      method: "POST",
      body: data,
      headers: {
        "Content-Type": "application/json",
      },
    };

    try {
      const response = await fetch(URL, options);
      const json = await response.json();
      console.log(json);

      if (json.user) {
        setAuth(json);
        history.push("/admin");
      }

      if (json.error) {
        setLoginError("Wrong username or password.");
      }
    } catch (error) {
      console.log(error);
    } finally {
      setSubmitting(false);
    }
  }
  return (
    <>
      <Heading title="Login Form" />
      <Form className="form" onSubmit={handleSubmit(onSubmit)}>
        {loginError && <ValidationError>{loginError}</ValidationError>}
        <fieldset disabled={submitting}>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Username</Form.Label>
            <Form.Control type="text" {...register("username")} />
            {errors.username && (
              <ValidationError>{errors.username.message}</ValidationError>
            )}
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="text" {...register("password")} />
            {errors.password && (
              <ValidationError>{errors.password.message}</ValidationError>
            )}
          </Form.Group>

          <Button variant="primary" type="submit">
            {submitting ? "Logging-in" : "Login"}
          </Button>
        </fieldset>
      </Form>
    </>
  );
}

export default LoginForm;
