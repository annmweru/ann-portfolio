import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';

const ContactForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [success, setSuccess] = useState('');

  const form = useRef();

  const handleName = (e) => setName(e.target.value);
  const handleEmail = (e) => setEmail(e.target.value);
  const handleMessage = (e) => setMessage(e.target.value);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        'service_paflwri', // Service ID
        'template_kefld7i', // Template ID
        form.current,
        'rICmKsJrW2LHahWqa' // Public Key (Not inside an object)
      )
      .then(
        () => {
          setSuccess('Message Sent Successfully! ✅');
          form.current.reset(); // Reset form
           setName('');
          setEmail('');
          setMessage('');
          setTimeout(() => setSuccess(''), 5000); // Remove success message after 5 seconds
        },
        (error) => {
          console.log('FAILED...', error.text);
          setSuccess('Failed to send message. Please try again.');
        }
      );
  };

  return (
    <div>
      {success && <p className='text-cyan'>{success}</p>}
      <form
        className='flex flex-col gap-4 text-white'
        ref={form}
        onSubmit={sendEmail}
      >
        <input
          name='from_name'
          type='text'
          placeholder='Your Name'
          required
  className='rounded-lg bg-[#877e6b] p-2 text-black placeholder:text-white border border-[#E6CBA8] focus:border-cyan focus:outline-none'
          value={name}
          onChange={handleName}
        />
        <input
          name='from_email'
          type='email'
          placeholder='Your Email'
          required
  className='rounded-lg bg-[#877e6b] p-2 text-black placeholder:text-white border border-[#E6CBA8] focus:border-cyan focus:outline-none'
          value={email}
          onChange={handleEmail}
        />
        <textarea
          name='message'
          placeholder='Message'
          rows='9'
          required
  className='rounded-lg bg-[#877e6b] p-2 text-black placeholder:text-white border border-[#E6CBA8] focus:border-cyan focus:outline-none'
          value={message}
          onChange={handleMessage}
        />
        <button
          type='submit'
          className='w-full rounded-lg border border-cyan text-white h-12 font-bold text-xl hover:bg-darkCyan bg-cyan transition-all duration-500'
        >
          Send
        </button>
      </form>


      
    </div>
  );
};

export default ContactForm;
