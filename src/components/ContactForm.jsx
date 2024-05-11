import { useState } from "react";
import { useForm } from "react-hook-form";
import emailjs from "@emailjs/browser";

const ContactForm = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const [disabled, setDisabled] = useState(false);
  const [alertInfo, setAlertInfo] = useState({
    display: false,
    message: "",
    type: "",
  });

  // Shows alert message for form submission feedback
  const toggleAlert = (message, type) => {
    setAlertInfo({ display: true, message, type });

    // Hide alert after 5 seconds
    setTimeout(() => {
      setAlertInfo({ display: false, message: "", type: "" });
    }, 5000);
  };

  // Function called on submit that uses emailjs to send email of valid contact form
  const onSubmit = async (data) => {
    // Destrcture data object
    const { name, email, subject, message } = data;
    try {
      // Disable form while processing submission
      setDisabled(true);

      // Define template params
      const templateParams = {
        name,
        email,
        subject,
        message,
      };

      // Use emailjs to email contact form data
      await emailjs.send(
        import.meta.env.service_lvsriv9,
        import.meta.env.template_799ulk9,
        templateParams,
        import.meta.env.bPn6yK6Gwyu3tQz6Q
      );

      // Display success alert
      toggleAlert("Form submission was successful!", "success");
    } catch (e) {
      console.error(e);
      // Display error alert
      toggleAlert("Uh oh. Something went wrong.", "danger");
    } finally {
      // Re-enable form submission
      setDisabled(false);
      // Reset contact form fields after submission
      reset();
    }
  };

  return (
    <>
      <iframe
        src="https://docs.google.com/forms/d/e/1FAIpQLSeiBWRXxG0Ao_k7Oo0IzKxfhGBCzjNXEcmZ3FfPHiTSWjXsdg/viewform?embedded=true"
        width="640"
        height="821"
        frameborder="0"
        marginheight="0"
        marginwidth="0"
      >
        Loading…
      </iframe>
    </>
    // <div className="ContactForm ">
    //   <h1 className=" flex justify-center items-center text-3xl uppercase mt-2 mb-5 font-semibold font-FoundersGrotesk">
    //     Contact US !
    //   </h1>
    //   <div className="container rounded-md overflow-hidden">
    //     <div className="row">
    //       <div className="col-12 text-center">
    //         <div className="contactForm">
    //           <form
    //             id="contact-form"
    //             onSubmit={handleSubmit(onSubmit)}
    //             noValidate
    //             className="w-full bg-zinc-600 h-full flex grow flex-col justify-center items-center"
    //           >
    //             {/* Row 1 of form */}
    //             <div className="row formRow w-[100%]">
    //               <div className="col-6 grow  flex  justify-center items-center  flex-wrap flex-row">
    //                 <input
    //                   type="text"
    //                   name="name"
    //                   {...register("name", {
    //                     required: {
    //                       value: true,
    //                       message: "Please enter your name",
    //                     },
    //                     maxLength: {
    //                       value: 30,
    //                       message: "Please use 30 characters or less",
    //                     },
    //                   })}
    //                   className="form-control formInput bg-zinc-800 rounded-md h-10 py-2  px-5  m-5 w-full"
    //                   placeholder="Name"
    //                 ></input>
    //                 {errors.name && (
    //                   <span className="errorMessage">
    //                     {errors.name.message}
    //                   </span>
    //                 )}
    //               </div>
    //               <div className="col-6 grow  flex  justify-center items-center flex-wrap flex-row">
    //                 <input
    //                   type="email"
    //                   name="email"
    //                   {...register("email", {
    //                     required: true,
    //                     pattern:
    //                       /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
    //                   })}
    //                   className="form-control formInput  bg-zinc-800 rounded-md h-10 py-2  px-5  m-5 w-full"
    //                   placeholder="Email address"
    //                 ></input>
    //                 {errors.email && (
    //                   <span className="errorMessage">
    //                     Please enter a valid email address
    //                   </span>
    //                 )}
    //               </div>
    //             </div>
    //             {/* Row 2 of form */}
    //             <div className="row formRow w-[100%]">
    //               <div className="col grow  flex flex-wrap justify-center items-center flex-row">
    //                 <input
    //                   type="text"
    //                   name="subject"
    //                   {...register("subject", {
    //                     required: {
    //                       value: true,
    //                       message: "Please enter a subject",
    //                     },
    //                     maxLength: {
    //                       value: 75,
    //                       message: "Subject cannot exceed 75 characters ",
    //                     },
    //                   })}
    //                   className="form-control formInput  bg-zinc-800 rounded-md h-10 py-2  px-5  m-5 w-full"
    //                   placeholder="Subject"
    //                 ></input>
    //                 {errors.subject && (
    //                   <span className="errorMessage">
    //                     {errors.subject.message}
    //                   </span>
    //                 )}
    //               </div>
    //             </div>
    //             {/* Row 3 of form */}
    //             <div className="row formRow w-full">
    //               <div className="col grow  flex flex-wrap justify-center items-center flex-row">
    //                 <textarea
    //                   rows={3}
    //                   name="message"
    //                   {...register("message", {
    //                     required: true,
    //                   })}
    //                   className="form-control formInput  bg-zinc-800 rounded-md py-2  px-5  m-5 w-full"
    //                   placeholder="Message"
    //                 ></textarea>
    //                 {errors.message && (
    //                   <span className="errorMessage">
    //                     Please enter a message
    //                   </span>
    //                 )}
    //               </div>
    //             </div>

    //             <button
    //               class="align-middle select-none font-sans font-bold text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-3 px-6 rounded-lg bg-gray-900 text-white shadow-md shadow-gray-900/10 hover:shadow-lg hover:shadow-gray-900/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none mb-4 mt-4"
    //               data-ripple-light="true"
    //               disabled={disabled}
    //               type="submit"
    //             >
    //               Submit
    //             </button>
    //           </form>
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    //   {alertInfo.display && (
    //     <div
    //       className={`alert alert-${alertInfo.type} alert-dismissible mt-5`}
    //       role="alert"
    //     >
    //       {alertInfo.message}
    //       <button
    //         type="button"
    //         className="btn-close"
    //         data-bs-dismiss="alert"
    //         aria-label="Close"
    //         onClick={() =>
    //           setAlertInfo({ display: false, message: "", type: "" })
    //         } // Clear the alert when close button is clicked
    //       ></button>
    //     </div>
    //   )}
    // </div>
  );
};

export default ContactForm;
