import React from 'react'
import { Formik, Form, Field, ErrorMessage } from 'formik'
import emailjs from '@emailjs/browser'
import { useState } from 'react'
import { useRef } from 'react'

const Contact = () => {
  const form = useRef();

  const [isFormSubmitted, setIsSubmitting] = useState(false)

  const onSubmit = (data) => {
    console.log('submit data', data)

    const serviceID = 'default_service'
    const templateID = 'contact_form_gg'
    const pk = 'BaXCBP6muAt2Qk2cC'

    console.log('submitting')
    emailjs.sendForm(serviceID, templateID, form.current,  pk)
    .then(() => {
      form.current.reset();

      setTimeout(() => {
        setIsSubmitting(true)
      }, 4000)
      
      alert('Sent!');
    }, (err) => {
      console.log(err)
      setIsSubmitting(false)
      alert(JSON.stringify(err));
    });
  }
  
  const onValidate = (values) => {
    const errors = {};
    if (!values.email) {
      errors.email = 'Email address is required';
    } else if (
      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
    ) {
      errors.email = 'Invalid email address';
    }

    if (!values.name) {
      errors.name = 'Name is required'
    }

    if (!values.message) {
      errors.message = 'Message is required'
    }
    
    if (values.message && values.message.length <= 30) {
      errors.message = 'Message should at least be 30 characters long'
    }
    return errors;
  }

  return (
    <div className='contact' id='contact'>
      <div className='highlight'>Get In Touch</div>

      <div className='panels'>
        <Formik
          initialValues={{
            email: '',
            name: '',
            message: ''
          }}
          validate={onValidate}
          onSubmit={onSubmit}
        >
          {({ values }) => ( 
            <Form className='form' ref={form}>
              <div className='form--group'>
                <label htmlFor='' className='form--label'>Name</label>
                <Field type='text' name='name' className='form--input' placeholder='Name'/>
                <ErrorMessage name="name" component="div" className='form--error' />
              </div>

              <div className='form--group'>
                <label htmlFor='' className='form--label'>Email</label>
                <Field type='email' name='email' className='form--input' placeholder='Email Address'/>
                <ErrorMessage name="email" component="div" className='form--error' />
              </div>

              <div className='form--group'>
                <label htmlFor='emai' className='form--label'>Message</label>
                <Field name='message' as='textarea' rows={5}  className='form--input' placeholder='Message'/>
                <ErrorMessage name="message" component="div" className='form--error' />
              </div>

              <div className='form--actions'>
                <button type='submit' className='form--submit' disabled={isFormSubmitted}>Submit</button>
              </div>
            </Form>
          )}
        </Formik>

        <div className='info'>
          <div className='info--group'>
            <span className='info--icon'>
              <i className="fa-solid fa-location-dot"></i>
            </span>
            <span className='info--detail'>Baguio City, Philippines, 2600</span>
          </div>

          <div className='info--group'>
            <span className='info--icon'>
              <i className="fa-solid fa-at"></i>
            </span>
            <span className='info--detail'>girlygado.dev@gmail.com</span>
          </div>

          <div className='info--group'>
            <span className='info--icon'>
              <i className="fa-solid fa-mobile-screen-button"></i>
            </span>
            <span className='info--detail'>+63 995 4910 624</span>
          </div>
        </div>

        <p className='copy'>&copy; 2022 Girly Gado</p>
      </div>

    </div>
  )
}

export default Contact