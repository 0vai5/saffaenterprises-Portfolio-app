import { useState } from "react";
import { Button } from ".";
import { useForm, SubmitHandler } from "react-hook-form";
import emailjs from "@emailjs/browser";
import { Alert } from ".";

type Inputs = {
  name: string;
  email: string;
  orgName: string;
  orgEmail: string;
  message: string;
};

const ContactForm = () => {
  const {
    register,
    handleSubmit,
    reset, // Form reset function
    formState: { errors },
  } = useForm<Inputs>();
  const [loading, setLoading] = useState(false);
  const [showSuccessAlert, setShowSuccessAlert] = useState(false);
  const [showErrorAlert, setShowErrorAlert] = useState(false);

  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    setLoading(true);
    try {
      await emailjs
        .send(
          import.meta.env.VITE_APP_EMAILJS_SERVICE_ID,
          import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID,
          {
            from_name: data.name,
            from_email: data.email,
            from_org: data.orgName,
            from_orgEmail: data.orgEmail,
            to_name: "Waseem",
            to_email: "saffaenterprises@gmail.com",
            message: data.message,
          },
          import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY
        )
        .then((response: any) => {
          setLoading(false);
          setShowSuccessAlert(true);
          setTimeout(() => setShowSuccessAlert(false), 2000);
          reset();
          console.log("Resposne", response);
        });
    } catch (error) {
      setLoading(false);
      setShowErrorAlert(true);
      setTimeout(() => setShowErrorAlert(false), 2000);
      console.log("Error in submitting", error);
    }
  };

  return (
    <section className="max-container">
      <h1 className="head-text">
        Get in <span className="text-[#1065dc]">Touch</span>
      </h1>
      {showSuccessAlert && (
        <Alert type="success" emoji="😊" message="Successfully!! Submitted" />
      )}
      {showErrorAlert && (
        <Alert type="error" emoji="😕" message="Oops! Something went wrong." />
      )}
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="flex justify-between gap-5 items-center md:flex-row flex-col ">
          <div className="flex flex-col">
            <label>Name</label>
            <input
              type="text"
              className="input"
              {...register("name", { required: true })}
            />
            {errors.name && <span>This field is required</span>}
          </div>
          <div className="flex flex-col">
            <label>Email</label>
            <input
              type="email"
              className="input"
              {...register("email", {
                required: true,
                pattern: /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/,
              })}
            />
            {errors.email && (
              <span>
                This field is required and must be a valid email address
              </span>
            )}
          </div>
        </div>
        <div className="flex justify-between gap-5 items-center flex-col md:flex-row">
          <div className="flex flex-col">
            <label>Organization Name</label>
            <input
              type="text"
              className="input"
              {...register("orgName", { required: true })}
            />
            {errors.orgName && <span>This field is required</span>}
          </div>
          <div className="flex flex-col">
            <label>Organization Email</label>
            <input
              type="email"
              className="input"
              {...register("orgEmail", {
                required: true,
                pattern: /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/,
              })}
            />
            {errors.orgEmail && (
              <span>
                This field is required and must be a valid email address
              </span>
            )}
          </div>
        </div>
        <div className="flex flex-col">
          <label>Message</label>
          <textarea
            className="textarea"
            {...register("message", {
              required: true,
              minLength: 18,
              maxLength: 99,
            })}
          />
          {errors.message && <span>This field is required</span>}
        </div>
        <br />
        <Button variant={"secondary"} type="submit">
          {loading ? "Sending.." : "Submit"}
        </Button>
      </form>
    </section>
  );
};

export default ContactForm;
