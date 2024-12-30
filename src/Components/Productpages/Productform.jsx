import React, { useState } from 'react';
import Swal from 'sweetalert2';


const Productform = () => {
  const [result, setResult] = useState('');

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "0fffa575-4878-4e63-9388-3359d8de91aa");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      Swal.fire("Success", "Your enquiry has been submitted!", "success");
    } else {
      setResult("Form Submission Failed");
      Swal.fire("Error", "There was an error submitting your enquiry.", "error");
    }
  };

  return (
    <>
    
    <section className="contact">
            <form onSubmit={onSubmit}>
                <h2> Have Product Enquiries? Don't Worry We Gotch You, Give Us an Enquiry Message Directly From Here Or Just Visit Our Contact Page and Contact Us.</h2>
                <div className="input-form">
                    <label>Full Name </label>
                    <input type="text" className='field' placeholder='Enter Your Name' name='name' required />
                </div>
                <div className="input-form">
                    <label>Email Address </label>
                    <input type="text" className='field' placeholder='Enter Your Email Address' name='email' required />
                </div>
                <div className="input-form">
                    <label>Your Enquiry </label>
                    <textarea name="message"  className='field mess' placeholder='Enter Your Message' required></textarea>
                </div>
                <button type='submit'>Send Message</button>
                <p>{result}</p>
            </form>
        </section>
    </>
  )
}

export default Productform
