import { yupResolver } from "@hookform/resolvers/yup";
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useParams } from "react-router-dom";
import useAxios from "../../hooks/useAxios";
import { AddProductsSchema } from "../../constants/Schema";
import ValidationError from "../../constants/ValidationError";
import Heading from "../../components/layout/Heading";
import { HOTELS_URL, BASE_URL } from "../../constants/api";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import DeleteHotel from "./DeleteHotel";
import HotelPage from "../hotels/HotelPage";
import Breadcrumb from "react-bootstrap/Breadcrumb";

export default function EditHotel() {
  const [post, setPost] = useState(null);
  const [updated, setUpdated] = useState(false);
  const [fetchingPost, setFetchingPost] = useState(true);
  const [updatingPost, setUpdatingPost] = useState(false);
  const [fetchError, setFetchError] = useState(null);
  const [updateError, setUpdateError] = useState(null);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(AddProductsSchema),
  });

  const http = useAxios();
  let { id } = useParams();
  const url = `${BASE_URL}${HOTELS_URL}/${id}`;

  useEffect(function () {
    async function getPost() {
      try {
        const res = await http.get(url);
        console.log(res.data);
        setPost(res.data);
      } catch (error) {
        console.log(error);
        setFetchError(error.toString());
      } finally {
        setFetchingPost(false);
      }
    }
    getPost();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  async function onSubmit(data) {
    setUpdatingPost(true);
    setUpdateError(null);
    setUpdated(false);
    console.log(data);
    try {
      const res = await http.put(url, data);
      console.log("response", res.data);
      setUpdated(true);
    } catch (error) {
      console.log("error", error);
      setUpdateError(error.toString());
    } finally {
      setUpdatingPost(false);
    }
  }
  if (fetchingPost) return <div>Loading...</div>;

  if (fetchError) return <div>Error loading post</div>;

  return (
    <>
      <HotelPage />
      <Container>
        <Heading title="edit hotels" />
        <Breadcrumb>
          <Breadcrumb.Item href="/">Home</Breadcrumb.Item>
          <Breadcrumb.Item href="/admin/add">Add Hotel</Breadcrumb.Item>
        </Breadcrumb>
        <Form className="form" onSubmit={handleSubmit(onSubmit)}>
          {updated && <p>Post updated</p>}
          {updateError && <ValidationError>{updateError}</ValidationError>}
          <fieldset disabled={updatingPost}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Title</Form.Label>
              <Form.Control
                type="text"
                defaultValue={post.title}
                {...register("title")}
              />
              {errors.title && (
                <ValidationError>{errors.title.message}</ValidationError>
              )}
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Price</Form.Label>
              <Form.Control
                type="text"
                defaultValue={post.price}
                {...register("price")}
              />
              {errors.price && (
                <ValidationError>{errors.price.message}</ValidationError>
              )}
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Popularity</Form.Label>
              <Form.Control
                type="text"
                defaultValue={post.popularity}
                {...register("popularity")}
              />
              {errors.popularity && (
                <ValidationError>{errors.popularity.message}</ValidationError>
              )}
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Price</Form.Label>
              <Form.Control
                type="text"
                defaultValue={post.price}
                {...register("price")}
              />
              {errors.price && (
                <ValidationError>{errors.price.message}</ValidationError>
              )}
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Image</Form.Label>
              <Form.Control type="file" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Description</Form.Label>
              <Form.Control
                as="textarea"
                type="Description"
                defaultValue={post.description}
                {...register("description")}
              />
              {errors.description && (
                <ValidationError>{errors.description.message}</ValidationError>
              )}
            </Form.Group>

            <button className="btn m-3" type="submit">
              Update
            </button>
            <DeleteHotel id={post.id} />
          </fieldset>
        </Form>
      </Container>
    </>
  );
}
