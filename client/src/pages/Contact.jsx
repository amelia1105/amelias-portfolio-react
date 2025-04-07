import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import axios from 'axios';

// Contact component with a form to submit a message
function Contact() {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [errors, setErrors] = useState({});
  const [submissionMessage, setSubmissionMessage] = useState('');

  const handleInputChange = (e) => {
    const { name, value } = e.target;

    if (name === 'fullName') {
      setFullName(value);
    } else if (name === 'email') {
      setEmail(value);
    } else if (name === 'message') {
      setMessage(value);
    }
  };

  const handleBlur = (e) => {
    const { name, value } = e.target;
    const newErrors = { ...errors };

    if (!value) {
      if (name === 'fullName') {
        newErrors[name] = 'Name is required';
      } else {
        newErrors[name] = `${name.charAt(0).toUpperCase() + name.slice(1)} is required`;
      }
    } else {
      if (name === 'email' && !/\S+@\S+\.\S+/.test(value)) {
        newErrors[name] = 'Email address is invalid';
      } else {
        delete newErrors[name];
      }
    }

    setErrors(newErrors);
  };

  const validateForm = () => {
    const newErrors = {};
    if (!fullName) newErrors.fullName = 'Name is required';
    if (!email) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      newErrors.email = 'Email address is invalid';
    }
    if (!message) newErrors.message = 'Message is required';
    return newErrors;
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    const formErrors = validateForm();
    if (Object.keys(formErrors).length === 0) {
      try {
        const response = await axios.post('https://amelias-portfolio-react.onrender.com/contacts/', {
          name: fullName,
          email: email,
          message: message,
        });
        if (response.status === 200) {
          setSubmissionMessage('Your contact information has been submitted!');
          setFullName('');
          setEmail('');
          setMessage('');
          setErrors({});
        } else {
          setSubmissionMessage('There was an error submitting your contact information.');
        }
      } catch (error) {
        console.error('There was an error submitting your contact information:', error);
        setSubmissionMessage('There was an error submitting your contact information.');
      }
    } else {
      setErrors(formErrors);
    }
  };  

  return (
    <div style={{ textAlign: 'left' }}>
      <h1 style={{ color: '#D58DF6', fontSize: '3rem', fontFamily: 'Courier New, sans-serif' }}>Contact</h1>
      <p style={{ marginTop: '20px' }}>Send me a message, or email me directly at ameliabalvarado@gmail.com.</p>
      <div className="form-container" style={{ maxWidth: '700px', margin: '0 auto', padding: '20px' }}>
        <Form onSubmit={handleFormSubmit}>
          <Form.Group className="mb-3">
            <Form.Label>Name</Form.Label>
            <Form.Control
              type="text"
              name="fullName"
              value={fullName}
              onChange={handleInputChange}
              onBlur={handleBlur}
              isInvalid={!!errors.fullName}
            />
            <Form.Control.Feedback type="invalid">
              {errors.fullName}
            </Form.Control.Feedback>
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              type="email"
              placeholder="email@domain.com"
              name="email"
              value={email}
              onChange={handleInputChange}
              onBlur={handleBlur}
              isInvalid={!!errors.email}
            />
            <Form.Control.Feedback type="invalid">
              {errors.email}
            </Form.Control.Feedback>
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
            <Form.Label>Message</Form.Label>
            <Form.Control
              as="textarea"
              rows={3}
              name="message"
              value={message}
              onChange={handleInputChange}
              onBlur={handleBlur}
              isInvalid={!!errors.message}
            />
            <Form.Control.Feedback type="invalid">
              {errors.message}
            </Form.Control.Feedback>
          </Form.Group>
          <Button variant="primary" type="submit">
            Submit
          </Button>
          {submissionMessage && (
            <p style={{ marginTop: '15px', color: submissionMessage.includes('error') ? 'red' : 'white' }}>
              {submissionMessage}
            </p>
          )}
        </Form>
      </div>
    </div>
  );
}

export default Contact;
