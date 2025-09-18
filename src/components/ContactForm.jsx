import { DotLottieReact } from '@lottiefiles/dotlottie-react';
import { useForm, ValidationError } from '@formspree/react';
import useInView from './useInView';

const ContactForm = () => {
  const [isInView, formRef] = useInView({threshold: 0.1});
  const [state, handleSubmit] = useForm("mkgndbln");
  if (state.succeeded) {
      return <p>Message sent!</p>;
  }

  return (
    <div className="border-b border-border pb-20 flex justify-center">
    <section className="body-font relative bg-bg text-text-secondary">
      <div className="flex justify-center" ref={formRef}>
        {isInView && (
          <DotLottieReact
          className="w-1/2"
          src="https://lottie.host/dee1399b-c7e2-4f3a-be89-a5244a55e80a/pBGVY4mt5i.lottie"
          loop
          autoplay
          />
        )}
      </div>

      <div className="container pt-0 mx-auto px-5 py-24">
        <div className="mb-12 flex w-full flex-col text-center">
          <h1 className="title-font mb-4 text-2xl font-medium text-text sm:text-3xl">Contact me</h1>
          <p className="mx-auto text-base leading-relaxed lg:w-2/3 text-text-muted">Feel free to reach out to me! Whether you have a question,
            feedback, or a collaboration proposal, I would love to hear from you.
          </p>
        </div>

        <div className="mx-auto md:w-2/3 lg:w-1/2">
        {/* <!-- form --> */}
          <form onSubmit={handleSubmit}
          id='contact-form'
          method='POST'
          className="-m-2 flex flex-wrap">
            <div className="w-1/2 p-2">
              <div className="relative">
                <input 
                  type="text" 
                  id="name" 
                  name="name" 
                  className="peer w-full rounded border border-border bg-card py-1 px-3 text-base leading-8 text-text placeholder-transparent outline-none transition-colors duration-200 ease-in-out focus:border-primary focus:bg-card-hover focus:ring-2 focus:ring-primary-light" 
                  placeholder="Name"                  
                />
                <label htmlFor="name" className="absolute left-3 -top-6 bg-bg text-sm leading-7 text-primary transition-all peer-placeholder-shown:left-3 peer-placeholder-shown:top-2 peer-placeholder-shown:bg-bg peer-placeholder-shown:text-base peer-placeholder-shown:text-text-muted peer-focus:left-3 peer-focus:-top-6 peer-focus:text-sm peer-focus:text-primary">Name</label>
              </div>
            </div>
            <div className="w-1/2 p-2">
              <div className="relative">
                <input 
                  type="email" 
                  id="email" 
                  name="email" 
                  className="peer w-full rounded border border-border bg-card py-1 px-3 text-base leading-8 text-text placeholder-transparent outline-none transition-colors duration-200 ease-in-out focus:border-primary focus:bg-card-hover focus:ring-2 focus:ring-primary-light" 
                  placeholder="Email"
                  required={true}                  
                />
                <ValidationError 
                  prefix="Email" 
                  field="email"
                  errors={state.errors}
                />
                <label htmlFor="email" className="absolute left-3 -top-6 bg-bg text-sm leading-7 text-primary transition-all peer-placeholder-shown:left-3 peer-placeholder-shown:top-2 peer-placeholder-shown:bg-bg peer-placeholder-shown:text-base peer-placeholder-shown:text-text-muted peer-focus:left-3 peer-focus:-top-6 peer-focus:text-sm peer-focus:text-primary">Email</label>
              </div>
            </div>
            <div className="w-full p-2">
            </div>
            <div className="mt-4 w-full p-2">
              <div className="relative">
                <textarea 
                  id="message" 
                  name="message" 
                  className="peer h-32 w-full resize-none rounded border border-border bg-card py-1 px-3 text-base leading-6 text-text placeholder-transparent outline-none transition-colors duration-200 ease-in-out focus:border-primary focus:bg-card-hover focus:ring-2 focus:ring-primary-light" 
                  placeholder="Message"
                  required={true}                  
                />
                <ValidationError 
                  prefix="Message" 
                  field="message"
                  errors={state.errors}
                />
                <label htmlFor="message" className="absolute left-3 -top-6 bg-bg text-sm leading-7 text-primary transition-all peer-placeholder-shown:left-3 peer-placeholder-shown:top-2 peer-placeholder-shown:bg-bg peer-placeholder-shown:text-base peer-placeholder-shown:text-text-muted peer-focus:left-3 peer-focus:-top-6 peer-focus:text-sm peer-focus:text-primary">Message</label>
              </div>
            </div>
            <div className="w-full p-2">
              <button
                type='submit' 
                disabled={state.submitting}
                className="mx-auto flex rounded border-0 bg-primary py-2 px-8 text-lg text-bg hover:bg-primary-hover focus:outline-none transition-colors duration-200"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
  </section>
  </div>
  )
}

export default ContactForm