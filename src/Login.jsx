import React, { useState } from "react";
import { useForm } from "react-hook-form";

export const Login = (props) => {
  const { register, handleSubmit } = useForm();
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const onSubmit = (data) => {
    console.log(data); // {userName: "foo", password: "bar"}

    // Make an AJAX request to authenticate user
    fetch('/api/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data)
    })
    .then(response => {
      if (response.ok) {
        // Authentication successful, do something here
        console.log('Authentication successful');
        setIsLoggedIn(true); // Update state to indicate successful login
      } else {
        // Authentication failed, do something here
        console.log('Authentication failed');
      }
    })
    .catch(error => {
      console.error('Error authenticating user:', error);
    });
  };
  
  return (
    <div className="auth-form-container">
      
        <form onSubmit={handleSubmit(onSubmit)}>
          <label htmlFor="text">User name</label>
          <input
            name="userName"
            id="userName"
            type="text"
            placeholder="Full name"
            {...register("userName")}
          />
          <label htmlFor="password">Password</label>
          <input
            name="password"
            id="password"
            type="password"
            placeholder="*****"
            {...register("password")}
          />
          <button>Log In</button>
        </form>
      <button onClick={() => props.onFormSwitch("register")}>
        Don't have an account? Click to register.
      </button>
    </div>
  );
};
