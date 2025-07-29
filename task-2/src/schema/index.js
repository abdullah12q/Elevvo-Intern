import * as yup from "yup";

export const contactUsSchema = yup.object().shape({
  fullName: yup
    .string()
    .min(5, "Name must be at least 5 characters")
    .required("Name is required"),
  email: yup
    .string()
    .email("Invalid email format")
    .required("Email is required"),
  subject: yup.string().required("Subject is required"),
  message: yup.string().required("Message is required"),
});
