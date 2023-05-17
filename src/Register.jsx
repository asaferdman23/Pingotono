import React, { useState } from "react";
import { useForm } from "react-hook-form";


export const Register = (props) => {
  const { register, handleSubmit } = useForm();
  const [isRegistering, setisRegistering] = useState(false);
  const [nameRegister, setNameRegister] = useState("");
  const [passRegister, setPasswordRegister] = useState("");
  const [registrationError, setRegistrationError] = useState(false);

  const onSubmit = (data) => {
    fetch("http://localhost:3000/api/user", {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
  },
  credentials: 'include',
  body: JSON.stringify(data),
})

      .then((response) => {
        if (response.ok) {
          // Registration successful, do something here
          setisRegistering(true);
          console.log('Registration successful');
        } else {
          // Registration failed, do something here
          setRegistrationError(true);
          console.log('Registration failed');
        }
      })
      .catch((error) => {
        // Handle errors that occur during the request
        console.error("There was a problem with the fetch operation:", error);
      });
  };

  const handleFormSwitch = (form) => {
    if (form === "login") {
      props.onFormSwitch("login");
    } else {
      setisRegistering(false);
    }
  };

  return (
    <div className="auth-form-container">
      <form onSubmit={handleSubmit(onSubmit)}>
        <label htmlFor="name">User name</label>
        <input
          {...register("name", { required: true })}
          value={nameRegister}
          onChange={(e) => setNameRegister(e.target.value)}
          type="text"
          placeholder="Full name"
          id="name"
          name="name"
        />
        <label htmlFor="password">Password</label>
        <input
          {...register("password", { required: true })}
          value={passRegister}
          onChange={(e) => setPasswordRegister(e.target.value)}
          type="password"
          placeholder="*****"
          id="password"
          name="password"
        />
        <button>Register</button>
      </form>
      <button onClick={() => handleFormSwitch("login")}>
        Already Have an Account? Click Here
      </button>
    </div>
  );
};
