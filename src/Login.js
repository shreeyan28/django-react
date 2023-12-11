import React, { useEffect } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';
import bankImage from './bank.jpeg';
import AOS from 'aos';
import { AiOutlineUser, AiOutlineLock } from 'react-icons/ai';
import 'aos/dist/aos.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Login.css'; // Your custom CSS file

const LoginSchema = Yup.object().shape({
  username: Yup.string().required('Username is required'),
  password: Yup.string().required('Password is required'),
});

const Login = (props) => {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);

  // Inside your Login.js, in the handleSubmit function
  const handleSubmit = async (values, { setSubmitting }) => {
    try {
      const response = await axios.post('http://localhost:8989/api/login/', values);
      console.log(response.data);
      props.onLoginSuccess(response.data.token); // Pass the token on successful login
       alert('Login Successful');
     } catch (error) {
     console.error('Login failed:', error);
     alert('Login failed');
   } finally {
    setSubmitting(false);
   }
  };


  return (
    <div className="login-page">
      <div className="welcome-section">
        <h2>Welcome to KS Bank</h2>
        <p>Secure and Reliable Banking</p>
        {/* Example for an image (replace with your image path) */}
         <img src={bankImage} alt="Bank" className="bank-image" />
      </div>
      <div data-aos="fade-up" className="login-container d-flex align-items-center justify-content-center">
        <Formik
          initialValues={{ username: '', password: '' }}
          validationSchema={LoginSchema}
          onSubmit={handleSubmit}
        >
          {({ isSubmitting }) => (
            <Form className="login-form text-center">
              <h1 className="mb-4">Login</h1>
              <div className="form-group">
                <AiOutlineUser />
                <Field name="username" type="text" placeholder="Username" />
                <ErrorMessage name="username" component="div" className="error-message" />
              </div>
              <div className="form-group">
                <AiOutlineLock />
                <Field name="password" type="password" placeholder="Password" />
                <ErrorMessage name="password" component="div" className="error-message" />
              </div>
              <button type="submit" className="btn btn-primary" disabled={isSubmitting}>
                {isSubmitting ? 'Logging in...' : 'Login'}
              </button>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
};

export default Login;
