import "./App.css";
import { Form, Formik } from "formik";
import CustomInput from "./components/CustomInput";
import { contactUsSchema } from "./schema";
import toast, { Toaster } from "react-hot-toast";
import { motion } from "motion/react";

function App() {
  async function promise(actions) {
    return await new Promise((resolve) =>
      setTimeout(() => {
        resolve();
        actions.setSubmitting(false);
        actions.resetForm();
      }, 2000)
    );
  }

  async function handleSubmit(values, actions) {
    await toast.promise(promise(actions), {
      loading: "Sending message...",
      success: "Message sent successfully",
      error: "Failed to send message",
    });
    console.log(values);
  }

  return (
    <>
      <Toaster
        position="top-center"
        toastOptions={{
          duration: 3000,
          style: {
            background: "#333",
            color: "#fff",
          },
        }}
      />
      <div className="flex justify-center items-center bg-linear-to-br from-purple-900 to-gray-900 h-screen">
        <motion.div
          initial={{ opacity: 0, y: "-100%" }}
          animate={{ opacity: 1, y: "0%" }}
          transition={{ type: "spring", duration: 1 }}
          className="w-80 max-w-[80%] md:w-96 p-6 bg-purple-800 rounded-lg shadow-2xl"
        >
          <Formik
            initialValues={{
              fullName: "",
              email: "",
              subject: "",
              message: "",
            }}
            validationSchema={contactUsSchema}
            onSubmit={handleSubmit}
            validateOnBlur={false}
            validateOnChange={false}
          >
            {({ isSubmitting }) => (
              <>
                <h1 className="mb-3 text-2xl text-center font-semibold text-white">
                  Contact Me
                </h1>
                <Form noValidate className="flex flex-col gap-2">
                  <CustomInput
                    label="Full Name"
                    name="fullName"
                    type="text"
                    placeholder="Enter your full name"
                    autoComplete="name"
                  />
                  <CustomInput
                    label="Email"
                    name="email"
                    type="email"
                    placeholder="Enter your email"
                    autoComplete="email"
                  />
                  <CustomInput
                    label="Subject"
                    name="subject"
                    type="text"
                    placeholder="Enter the subject"
                    autoComplete="off"
                  />
                  <CustomInput
                    label="Message"
                    textArea
                    name="message"
                    type="text"
                    placeholder="Enter your message"
                    autoComplete="off"
                  />
                  <div className="flex justify-between items-center gap-2">
                    <button type="reset" className="text-white cursor-pointer">
                      Reset
                    </button>
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className={`p-2 rounded-md text-white font-semibold bg-purple-500 ${
                        isSubmitting
                          ? "opacity-50 cursor-not-allowed"
                          : "hover:bg-purple-600 cursor-pointer"
                      } transition-colors duration-300`}
                    >
                      {isSubmitting ? "Submitting..." : "Submit"}
                    </button>
                  </div>
                </Form>
              </>
            )}
          </Formik>
        </motion.div>
      </div>
    </>
  );
}

export default App;
