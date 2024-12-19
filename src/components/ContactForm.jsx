import { DotLottieReact } from '@lottiefiles/dotlottie-react';
import { useState } from 'react';
const ContactForm = () => {
  // Email Form state instantiation
  const [emailForm, setEmailForm] = useState({
    name: '',
    email: '',
    message: '',
  });

  //Result if message was sent or not
  const [result, setResult] = useState('');

  // Status of while message is being sent 
  const [status, setStatus] = useState('Submit');

  // Reset the form
  function resetEmailForm () {
    setEmailForm({ name: '', email: '', message: ''});
  }

  //Handle form changes
  function handleEmailFormChange(event) {
    setEmailForm((prevEmailData) => {
      return {
        ...prevEmailData,
        [event.target.name]: event.target.value,
      };
    });

    if(result.length > 0) {
      setResult('');
    }
  }

  // Form submission functionality
  const handleSubmit = async (e) => {
    setResult('');
    e.preventDefaullt();
    setStatus('Sending...');

    const { name, email, message } = e.target.elements;

    let details = {
      name: name.value,
      email: email.value,
      message: message.value,
    };

    try {
      let response = await fetch ('http://localhost:5000/send', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json;charset=utf-8',
        },
        body: JSON.stringify(details),
      });
      setStatus('Submit');
      let result = await response.json();

      if (result.status === 'success') {
        setResult('Message Sent!');
        resetEmailForm();
      } else if (result.status === 'fail') {
        alert('Uh oh! Message failed to send.');
      }
    } catch (error) {
      console.log(error);
      setStatus('Submit');
      setResult('Uh oh! Issues with submitting message.');
    }
  };

  return (
    <div className="border-b border-neutral-900 pb-20 flex justify-center">
    <section className="body-font relative bg-gray-900 text-gray-400 ">
      <div className="flex justify-center">
        <DotLottieReact
          className="w-1/2"
          src="https://lottie.host/dee1399b-c7e2-4f3a-be89-a5244a55e80a/pBGVY4mt5i.lottie"
          loop
          autoplay
        />
      </div>

      <div className="container pt-0 mx-auto px-5 py-24">
        <div className="mb-12 flex w-full flex-col text-center">
          <h1 className="title-font mb-4 text-2xl font-medium text-white sm:text-3xl">Contact me</h1>
          <p className="mx-auto text-base leading-relaxed lg:w-2/3">Feel free to reach out to me! Whether you have a question,
            feedback, or a collaboration proposal, I would love to hear from you.
          </p>
        </div>

        <div className="mx-auto md:w-2/3 lg:w-1/2">
        {/* <!-- form --> */}
          <form 
          id='contact-form'
          onSubmit={handleSubmit}
          method='POST'
          className="-m-2 flex flex-wrap">
            <div className="w-1/2 p-2">
              <div className="relative">
                <input 
                  type="text" 
                  id="name" 
                  name="name" 
                  className="peer w-full rounded border border-gray-700 bg-gray-800 bg-opacity-40 py-1 px-3 text-base leading-8 text-gray-100 placeholder-transparent outline-none transition-colors duration-200 ease-in-out focus:border-indigo-500 focus:bg-gray-900 focus:ring-2 focus:ring-indigo-900" 
                  placeholder="Name"
                  value={emailForm.name}
                  onChange={handleEmailFormChange} 
                />
                <label htmlFor="name" className="absolute left-3 -top-6 bg-transparent text-sm leading-7 text-indigo-500 transition-all peer-placeholder-shown:left-3 peer-placeholder-shown:top-2 peer-placeholder-shown:bg-gray-900 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-focus:left-3 peer-focus:-top-6 peer-focus:text-sm peer-focus:text-indigo-500">Name</label>
              </div>
            </div>
            <div className="w-1/2 p-2">
              <div className="relative">
                <input 
                  type="email" 
                  id="email" 
                  name="email" 
                  className="peer w-full rounded border border-gray-700 bg-gray-800 bg-opacity-40 py-1 px-3 text-base leading-8 text-gray-100 placeholder-transparent outline-none transition-colors duration-200 ease-in-out focus:border-indigo-500 focus:bg-gray-900 focus:ring-2 focus:ring-indigo-900" 
                  placeholder="Email"
                  required={true}
                  value={emailForm.email}
                  onChange={handleEmailFormChange} 
                />
                <label htmlFor="email" className="absolute left-3 -top-6 bg-transparent text-sm leading-7 text-indigo-500 transition-all peer-placeholder-shown:left-3 peer-placeholder-shown:top-2 peer-placeholder-shown:bg-gray-900 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-focus:left-3 peer-focus:-top-6 peer-focus:text-sm peer-focus:text-indigo-500">Email</label>
              </div>
            </div>
            <div className="w-full p-2">
            </div>
            <div className="mt-4 w-full p-2">
              <div className="relative">
                <textarea 
                  id="message" 
                  name="message" 
                  className="peer h-32 w-full resize-none rounded border border-gray-700 bg-gray-800 bg-opacity-40 py-1 px-3 text-base leading-6 text-gray-100 placeholder-transparent outline-none transition-colors duration-200 ease-in-out focus:border-indigo-500 focus:bg-gray-900 focus:ring-2 focus:ring-indigo-900" 
                  placeholder="Message"
                  required={true}
                  value={emailForm.message}
                  onChange={handleEmailFormChange}
                >
                </textarea>
                <label htmlFor="message" className="absolute left-3 -top-6 bg-transparent text-sm leading-7 text-indigo-500 transition-all peer-placeholder-shown:left-3 peer-placeholder-shown:top-2 peer-placeholder-shown:bg-gray-900 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-focus:left-3 peer-focus:-top-6 peer-focus:text-sm peer-focus:text-indigo-500">Message</label>
              </div>
            </div>
            <div className="w-full p-2">
              <button
                type='submit' 
                className="mx-auto flex rounded border-0 bg-indigo-500 py-2 px-8 text-lg text-white hover:bg-indigo-600 focus:outline-none"
              >{status}
              </button>
              <h3>{result}</h3>
            </div>
          </form>
        </div>
      </div>
  </section>
  </div>
  )
}

export default ContactForm