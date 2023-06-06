import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import {
    Button,
    FormControl,
    FormErrorMessage,
    FormLabel,
    Heading,
    Input,
    Select,
    Textarea,
  } from "@chakra-ui/react";
  import * as Yup from 'yup';
  import { useFormik } from 'formik';

function SendEmail ()  {
  const form = useRef();

  const formik = useFormik({
    initialValues: {
      user_name: "",
      user_email: "",
      type: "",
      message: "",
    },

    validationSchema: Yup.object({
      user_name: Yup.string().required("Required"),
      user_email: Yup.string().email("Invalid email address").required("Required"),
      type: Yup.string().optional(),
      message: Yup.string().min(25, "Must be at least 25 characters").required("Required"),
    }),
  });


  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_c9egkwf', 'template_pp7v479', form.current, 'nbZARbEpxKYFxwIgc')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      formik.resetForm();
  };

  return (
    <main className='container-main-contact'>
        <Heading as="h1" id="contact">
          Contact me!
        </Heading>
        <form ref={form} onSubmit={sendEmail}>
            <FormControl className='form-name-contact' isInvalid={formik.errors.user_name && formik.touched.user_name}>
                <FormLabel htmlFor="user_name">Name:</FormLabel>
                <Input
                  id="user_name"
                  name="user_name"
                  {...formik.getFieldProps("user_name")}
                />
                {FormControl.isInvalid !== false && <FormErrorMessage>{formik.errors.user_name}</FormErrorMessage>}
            </FormControl>
            
            <FormControl className='form-email-contact' isInvalid={formik.errors.user_email && formik.touched.user_email}>
                <FormLabel  htmlFor="user_email">Email Address:</FormLabel>
                <Input 
                  id="user_email"
                  name="user_email"
                  type="email"
                  {...formik.getFieldProps("user_email")}
                />
                {FormControl.isInvalid !== false && <FormErrorMessage>{formik.errors.user_email}</FormErrorMessage>}
              </FormControl>
              
              <FormControl className='form-type-contact' isInvalid={formik.errors.type && formik.touched.type}>
                <FormLabel  htmlFor="type">Type of enquiry:</FormLabel>
                <Select id="type" name="type"  {...formik.getFieldProps("type")}>
                  <option value="hireMe">Freelance project proposal</option>
                  <option value="openSource">
                    Job Opportunity
                  </option>
                  <option value="other">Other</option>
                </Select>
                {FormControl.isInvalid !== false && <FormErrorMessage>{formik.errors.type}</FormErrorMessage>}
              </FormControl>
              <FormControl className='form-textarea-contact' isInvalid={formik.errors.message && formik.touched.message}>
                <FormLabel  htmlFor="message">Your message:</FormLabel>
                <Textarea
                  id="message"
                  name="message"
                  height={100}
                  {...formik.getFieldProps("message")}
                />
                {FormControl.isInvalid !== false && <FormErrorMessage>{formik.errors.message}</FormErrorMessage>}
              </FormControl>
              <Button className='form-button-contact' type="submit" colorScheme="purple">
                Submit
              </Button>
        </form>
    </main>
 );
};

export default SendEmail;