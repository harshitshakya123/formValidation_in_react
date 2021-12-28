import React from "react";
import useForm from "../hooks/useForm";

function RegisterFormUsingCustomHook(props) {
  //Final submit function
  const formLogin = () => {
    alert(JSON.stringify(values));
    console.log("Callback function when form is submitted!");
    console.log("Form Values ", values);
  };

  //Custom hook call
  const { handleChange, values, errors, handleSubmit } = useForm(formLogin);
  return (
    <div>
      <h3>Using Custom Hooks</h3>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input className="form-control" type="email" name="email" placeholder="E-mail" onChange={handleChange} />

          {errors.email && <span className="text-danger">{errors.email}</span>}
        </div>
        <div className="form-group">
          <label htmlFor="email">Password</label>
          <input
            className="form-control"
            minLength="8"
            type="password"
            name="password"
            placeholder="password"
            onChange={handleChange}
          />
          {errors.password && <span className="text-danger">{errors.password}</span>}
        </div>
        <div className="form-group">
          <label htmlFor="username">Username</label>
          <input
            className="form-control"
            type="text"
            minLength="5"
            name="username"
            placeholder="username"
            onChange={handleChange}
          />
          {errors.username && <span className="text-danger">{errors.username}</span>}
        </div>

        <button className="btn btn-warning float-right" type="submit">
          Sign In
        </button>
      </form>
    </div>
  );
}

export default RegisterFormUsingCustomHook;
