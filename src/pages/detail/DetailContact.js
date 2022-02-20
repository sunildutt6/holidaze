import { useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { schema } from "../../constants/Schema";
import ValidationError from "../../constants/ValidationError";
import Form from "react-bootstrap/Form";
import Alert from "react-bootstrap/Alert";
import styled from "styled-components";
import DatePicker from "./DatePicker";

const StyleDiv = styled.div`
   {
    width: 100%;
    padding: 2rem;
    float: right;
    box-shadow: inset 0px 0px 5px 5px var(--grey);
    border-radius: 0 0 1rem 1rem;
    margin-bottom: 1rem;
  }
`;

function DetailContact() {
  const [submitted, setSubmitted] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  function onSubmit(data, event) {
    console.log(data);
    setSubmitted(true);
    event.target.reset();
  }
  return (
    <StyleDiv>
      <h3>quotation from</h3>

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
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Control
            type="number"
            placeholder="Person"
            {...register("person")}
            className="form-control"
          />
          {errors.person && (
            <ValidationError>{errors.person.message}</ValidationError>
          )}
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Arrival Date</Form.Label>
          <DatePicker />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Departure Date</Form.Label>
          <DatePicker />
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
          Get Quote
        </button>
      </Form>
    </StyleDiv>
  );
}

export default DetailContact;
