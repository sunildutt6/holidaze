import { useHistory } from "react-router-dom";
import { useState } from "react";
import useAxios from "../../../hooks/useAxios";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { hotelSchema } from "../../../constants/Schema";
import { Container } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import ValidationError from "../../../constants/ValidationError";
import styled from "styled-components";
import Button from "react-bootstrap/Button";

const StyleForm = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  margin: 1rem;
  .form {
    width: 30%;
    @media (max-width: 768px) {
      width: 100%;
    }
  }
  .btn.btn-primary {
    margin: 1rem;
  }
`;

function HotelAdminAdd() {
  const [submitting, setSubmitting] = useState(false);
  const [serverError, setServerError] = useState(null);

  const history = useHistory();
  const http = useAxios();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(hotelSchema),
  });

  async function onSubmit(data) {
    setSubmitting(true);
    setServerError(null);

    console.log(data);

    try {
      const response = await http.post("/hotels", data);
      console.log("response", response.data);
      history.push("/hotels");
    } catch (error) {
      console.log("error", error);
      setServerError(error.toString());
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <Container>
      <StyleForm>
        <Form className="form" onSubmit={handleSubmit(onSubmit)}>
          {serverError && <ValidationError>{serverError}</ValidationError>}
          <fieldset disabled={submitting}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Control
                type="text"
                placeholder="title"
                {...register("title")}
              />
              {errors.title && (
                <ValidationError>{errors.title.message}</ValidationError>
              )}
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Control
                type="text"
                placeholder="address"
                {...register("address")}
              />
              {errors.address && (
                <ValidationError>{errors.address.message}</ValidationError>
              )}
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Control
                type="text"
                placeholder="price"
                {...register("price")}
              />
              {errors.price && (
                <ValidationError>{errors.price.message}</ValidationError>
              )}
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Control
                type="text"
                placeholder="image_url"
                {...register("image_url")}
              />
              {errors.image_url && (
                <ValidationError>{errors.image_url.message}</ValidationError>
              )}
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Control
                as="textarea"
                placeholder="description"
                {...register("description")}
              />
              {errors.description && (
                <ValidationError>{errors.description.message}</ValidationError>
              )}
            </Form.Group>
          </fieldset>
          <Button type="submit" className="btn">
            {submitting ? "Logging-in" : "Login"}
          </Button>
        </Form>
      </StyleForm>
    </Container>
  );
}

export default HotelAdminAdd;
