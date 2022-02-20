import * as yup from "yup";
import { MINIMUM_CHAR } from "../pages/contact/contactRegistration";

export const schema = yup.object().shape({
  FirstName: yup
    .string()
    .required("Please enter your first name")
    .min(MINIMUM_CHAR, `Required minimum ${MINIMUM_CHAR} characters`),
  LastName: yup
    .string()
    .required("Please enter your Last name")
    .min(4, `Required minimum 4 characters`),
  email: yup
    .string()
    .required("Please enter your email address")
    .email("Please enter a valid email address"),
  message: yup
    .string()
    .required("Please write your message")
    .min(10, "Required minimum 10 characters."),
  person: yup.number().required("Please choose a number"),
});

export const schemaLogin = yup.object().shape({
  username: yup.string().required("Please enter your username"),
  password: yup.string().required("Please enter your password"),
});

export const HotelSchema = yup.object().shape({
  title: yup.string().required("please provide a title"),
  price: yup
    .number()
    .required("Price is required")
    .min(0, "Should be greater than zero."),
  description: yup.string().required("Please enter description"),
  image_url: yup.string().required("Please enter an image URL"),
});
