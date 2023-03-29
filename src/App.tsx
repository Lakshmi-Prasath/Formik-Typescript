import React from 'react';
import './App.css';
import { useFormik } from 'formik';
import * as Yup from 'yup';

interface FormValues {
  // Define the types of each form field
  firstName: string;
  lastName: string;
  email: string;
  confirmEmail: string;
  password: string;
  confirmPassword: string;
  mustConfirm: boolean;
  // ...
}

const validationSchema = Yup.object().shape({
  firstName: Yup.string()
    .max(15, 'Must be 15 characters or less')
    .matches(/^[a-zA-Z]*$/, 'Must be alphabets')
    .required('Required'),
  lastName: Yup.string()
    .max(20, 'Must be 20 characters or less')
    .matches(/^[a-zA-Z]*$/, 'Must be alphabets')
    .required('Required'),
  email: Yup.string()
    .email('Invalid email format')
    .required('Required'),
  confirmEmail: Yup.string()
    .oneOf([Yup.ref('email'), undefined], 'Emails must match')
    .required('Required'),
  password: Yup.string()
    .min(6, 'Must be at least 6 characters')
    .max(20, 'Must be 20 characters or less')
    .matches(/^[a-zA-Z0-9]*$/, 'Must be alphanumeric')
    .required('Required'),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref('password'), undefined], 'Passwords must match')
    .required('Required'),
  mustConfirm: Yup.boolean().oneOf([true], 'You must confirm the terms'),
})
const onSubmit = (values: FormValues) => {
  console.log('Form Data', values);
}
const initialValues = {
  firstName: '',
  lastName: '',
  email: '',
  confirmEmail: '',
  password: '',
  confirmPassword: '',
  mustConfirm: false,
}
function App() {
  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit,

  });
  return (
    <div className="App">
      <h1 className='title'>FORM VALIDATION</h1>
      <form onSubmit={formik.handleSubmit}>
        <div className="page">
          <div className="field field_v2">
            <label className="ha-screen-reader">First name</label>
            <input
              id="firstName"
              name="firstName"
              type="text"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.firstName}
              className="field__input"
              placeholder="e.g. Stanislav"
            />
            <span className="field__label-wrap" aria-hidden="true">
              <span className="field__label">First name</span>
            </span>

          </div>
          {formik.touched.firstName && formik.errors.firstName ? (
            <div className='formikStyle'>*{formik.errors.firstName}</div>
          ) : null}
          <div className="field field_v2">
            <label className="ha-screen-reader">Last name</label>
            <input
              id="lastName"
              name="lastName"
              type="text"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.lastName}
              className="field__input"
              placeholder="e.g. Melnikov"
            />

            <span className="field__label-wrap" aria-hidden="true">
              <span className="field__label">Last name</span>
            </span>

          </div>
          {formik.touched.lastName && formik.errors.lastName ? (
            <div className='formikStyle'>*{formik.errors.lastName}</div>
          ) : null}
          <div className="field field_v2">
            <label className="ha-screen-reader">E-mail</label>
            <input
              id="email"
              name="email"
              type="email"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.email}
              className="field__input"
              placeholder="e.g. melnik909@ya.ru"
            />
            <span className="field__label-wrap" aria-hidden="true">
              <span className="field__label">E-mail</span>
            </span>

          </div>
          {formik.touched.email && formik.errors.email ? (
            <div className='formikStyle'>*{formik.errors.email}</div>
          ) : null}
          <div className="field field_v2">
            <label className="ha-screen-reader">Confirm E-mail</label>
            <input
              id="confirmEmail"
              name="confirmEmail"
              type="email"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.confirmEmail}
              className="field__input"
              placeholder="e.g. melnik909@ya.ru"
            />
            <span className="field__label-wrap" aria-hidden="true">
              <span className="field__label">Confirm E-mail</span>
            </span>

          </div>
          {formik.touched.confirmEmail && formik.errors.confirmEmail ? (
            <div className='formikStyle'>*{formik.errors.confirmEmail}</div>
          ) : null}
          <div className="field field_v2">
            <label className="ha-screen-reader">password</label>
            <input
              id="password"
              name="password"
              type="password"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.password}
              className="field__input"
              placeholder="e.g. • • • • • • "
            />
            <span className="field__label-wrap" aria-hidden="true">
              <span className="field__label">password</span>
            </span>

          </div>
          {formik.touched.password && formik.errors.password ? (
            <div className='formikStyle'>*{formik.errors.password}</div>
          ) : null}
          <div className="field field_v2">
            <label className="ha-screen-reader">confirm password</label>
            <input
              id="confirmPassword"
              name="confirmPassword"
              type="password"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.confirmPassword}
              className="field__input"
              placeholder="e.g. • • • • • • "
            />
            <span className="field__label-wrap" aria-hidden="true">
              <span className="field__label">confirm password</span>
            </span>

          </div>
          {formik.touched.confirmPassword && formik.errors.confirmPassword ? (
            <div className='formikStyle'>*{formik.errors.confirmPassword}</div>
          ) : null}
          <div className='tickboxsection'>
            <label>
              I am a developer
            </label>
            <input
              id="mustConfirm"
              name="mustConfirm"
              type="checkbox"
              className='tickbox'
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}

              placeholder="e.g. • • • • • • "
            />
          </div>
          {formik.touched.mustConfirm && formik.errors.mustConfirm ? (
            <div className='formikStyle'>*{formik.errors.mustConfirm}</div>
          ) : null}
          <div className='submit'>
            <button className='submitbtn' type="submit">Submit</button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default App;
