import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";

export const RegisterForm2 = () => {
  const { handleSubmit, handleChange, values, touched, errors, handleBlur } = useFormik({
    initialValues: {
      login: "",
      password: "",
    },
    validationSchema: Yup.object({
      login: Yup.string().max(10, "Login must be shorter than 10 characters").required("Required"),
      password: Yup.string().min(6, "Password should be longer than 6 characters").required(),
    }),
    onSubmit: ({ login, password }) => {
      alert(`Login: ${login}, password: ${password}`);
    },
  });

  return (
    <form onSubmit={handleSubmit}>
      <header>
        <h3>Using Formik hook and Yup</h3>
      </header>
      <div className="form-group">
        <label>Login</label>
        <input
          className="form-control"
          value={values.login}
          onChange={handleChange}
          onBlur={handleBlur}
          id="login"
          name="login"
          type="text"
        />
        {touched.login && errors.login ? <div className="text-danger">{errors.login}</div> : null}
      </div>
      <div className="form-group">
        <label htmlFor="password">Password</label>
        <input
          className="form-control"
          value={values.password}
          onChange={handleChange}
          onBlur={handleBlur}
          id="password"
          name="password"
          type="password"
        />
        {touched.password && errors.password ? <div className="text-danger">{errors.password}</div> : null}
      </div>
      <div className="form-group">
        <button className="btn btn-warning float-right" type="submit">
          Log in
        </button>
      </div>
    </form>
  );
};
