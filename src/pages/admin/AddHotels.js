import React, { useState } from "react";
import Heading from "../../components/layout/Heading";
import Container from "react-bootstrap/Container";
import ValidationError from "../../constants/ValidationError";
import { AddProductsSchema } from "../../constants/Schema";
import Form from "react-bootstrap/Form";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import useAxios from "../../hooks/useAxios";
import { useHistory } from "react-router-dom";
import HotelPage from "../hotels/HotelPage";
import Breadcrumb from "react-bootstrap/Breadcrumb";

export default function AddHotels() {
  const [submitting, setSubmitting] = useState(false);
  const [serverError, setServerError] = useState(null);
  const [form, setForm] = useState(false);
  const [file, setFile] = useState([]);

  const http = useAxios();
  const history = useHistory();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(AddProductsSchema),
  });
  const handleChange = (event) => {
    setFile(event.target.files[0]);
  };

  async function onSubmit(data) {
    setSubmitting(true);
    setServerError(null);
    const sendData = new FormData();

    sendData.append("data", JSON.stringify(data));
    sendData.append("files.image", file);

    console.log(file);
    console.log(data);

    try {
      const response = await http.post("/hotels", sendData);
      console.log(response.data);
      if (response.data.updated_at) {
        history.push("/admin");
      }
    } catch (error) {
      setServerError(error.toString());
    } finally {
      setSubmitting(false);
      setForm(true);
    }
  }

  return (
    <>
      <HotelPage />
      <Container>
        <Heading title="add new hotel" />
        <Breadcrumb>
          <Breadcrumb.Item href="/">Home</Breadcrumb.Item>
          <Breadcrumb.Item href="/admin/edit">Edit Hotel</Breadcrumb.Item>
        </Breadcrumb>
        <Form className="form" onSubmit={handleSubmit(onSubmit)}>
          {form ? <p>added successfully.</p> : ""}
          {serverError && <ValidationError>{serverError}</ValidationError>}
          <fieldset disabled={submitting}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Title</Form.Label>
              <Form.Control type="text" {...register("title")} />
              {errors.title && (
                <ValidationError>{errors.title.message}</ValidationError>
              )}
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Price</Form.Label>
              <Form.Control type="text" {...register("price")} />
              {errors.price && (
                <ValidationError>{errors.price.message}</ValidationError>
              )}
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Address</Form.Label>
              <Form.Control type="text" {...register("address")} />
              {errors.address && (
                <ValidationError>{errors.address.message}</ValidationError>
              )}
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Popularity</Form.Label>
              <Form.Control type="text" {...register("popularity")} />
              {errors.popularity && (
                <ValidationError>{errors.popularity.message}</ValidationError>
              )}
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Image</Form.Label>
              <Form.Control type="file" onChange={handleChange} />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Description</Form.Label>
              <Form.Control
                as="textarea"
                type="text"
                rows={3}
                {...register("description")}
              />
              {errors.description && (
                <ValidationError>{errors.description.message}</ValidationError>
              )}
            </Form.Group>

            <button className="btn mb-3" type="submit">
              {submitting ? "Adding" : "Add"}
            </button>
          </fieldset>
        </Form>
      </Container>
    </>
  );
}
