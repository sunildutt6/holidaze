import { useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { schema } from "../../constants/Schema";
import ValidationError from "../../constants/ValidationError";
import Form from "react-bootstrap/Form";
import Alert from "react-bootstrap/Alert";

function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  function onSubmit(data, event) {
    console.log(data);
    setSubmitted(true);
    reset();
  }
  return (
    <>
      <h3>contact from</h3>

      {submitted && (
        <Alert className="form-control">We will get in touch with you.</Alert>
      )}
      <Form className="form" onSubmit={handleSubmit(onSubmit)}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Control
            type="text"
            placeholder="First Name"
            {...register("FirstName")}
            className="form-control"
          />
          {errors.FirstName && (
            <ValidationError>{errors.FirstName.message}</ValidationError>
          )}
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Control
            type="text"
            placeholder="Last Name"
            {...register("LastName")}
            className="form-control"
          />
          {errors.LastName && (
            <ValidationError>{errors.LastName.message}</ValidationError>
          )}
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Control
            type="email"
            placeholder="Email"
            {...register("email")}
            className="form-control"
          />
          {errors.email && (
            <ValidationError>{errors.email.message}</ValidationError>
          )}
        </Form.Group>

        <Form.Group
          className="mb-3 message-area"
          controlId="exampleForm.ControlTextarea1"
        >
          <Form.Control
            as="textarea"
            placeholder="Message"
            {...register("message")}
          />
          {errors.message && (
            <ValidationError>{errors.message.message}</ValidationError>
          )}
        </Form.Group>

        <button type="submit" className="btn">
          Send
        </button>
      </Form>
    </>
  );
}

export default ContactForm;
