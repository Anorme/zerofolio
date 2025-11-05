import { DotLottieReact } from '@lottiefiles/dotlottie-react';
import { useForm, ValidationError } from '@formspree/react';
import { motion } from 'motion/react';
import { useState } from 'react';
import { FaCheckCircle, FaPaperPlane, FaSpinner } from 'react-icons/fa';

const ContactForm = () => {
  const [state, handleSubmit] = useForm("mkgndbln");
  const [focusedField, setFocusedField] = useState(null);

  // Success state with better UI
  if (state.succeeded) {
    return (
      <div className="border-b border-border pb-8 sm:pb-12 lg:pb-20">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, type: "spring" }}
          className="flex flex-col items-center justify-center min-h-[250px] sm:min-h-[300px] lg:min-h-[400px] py-6 sm:py-8 lg:py-12 px-4"
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
            className="mb-3 sm:mb-4 lg:mb-6"
          >
            <FaCheckCircle className="text-4xl sm:text-5xl lg:text-6xl text-primary" />
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-xl sm:text-2xl lg:text-3xl font-bold text-text mb-2 sm:mb-3 lg:mb-4 text-center"
          >
            Message Sent!
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-sm sm:text-base text-text-secondary text-center max-w-md px-2"
          >
            Thank you for reaching out! I&apos;ll get back to you as soon as possible.
          </motion.p>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="border-b border-border pb-8 sm:pb-12 lg:pb-20">
      <section className="relative bg-bg text-text-secondary">
        <div className="container mx-auto px-3 sm:px-4 lg:px-8 py-6 sm:py-8 lg:py-12">
          {/* Header Section */}
          <motion.div
            initial={{ opacity: 0, y: -30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="mb-6 sm:mb-8 lg:mb-12 text-center"
          >
            <motion.h1
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold text-text mb-2 sm:mb-3 lg:mb-4"
            >
              Contact Me
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mx-auto text-sm sm:text-base lg:text-lg leading-relaxed text-text-muted max-w-2xl px-2"
            >
              Feel free to reach out to me! Whether you have a question,
              feedback, or a collaboration proposal, I would love to hear from you.
            </motion.p>
          </motion.div>

          {/* Main Content Grid */}
          <div className="grid lg:grid-cols-2 gap-4 sm:gap-6 lg:gap-12 items-start max-w-6xl mx-auto">
            {/* Lottie Animation */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="hidden lg:flex items-center justify-center order-2 lg:order-1"
            >
              <div className="w-full max-w-md">
                <DotLottieReact
                  className="w-full h-auto"
                  src="https://lottie.host/dee1399b-c7e2-4f3a-be89-a5244a55e80a/pBGVY4mt5i.lottie"
                  loop
                  autoplay
                />
              </div>
            </motion.div>

            {/* Form Section */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="order-1 lg:order-2"
            >
              <form
                onSubmit={handleSubmit}
                id="contact-form"
                method="POST"
                className="space-y-3 sm:space-y-4 lg:space-y-6"
              >
                {/* Name and Email Row */}
                <div className="grid sm:grid-cols-2 gap-2 sm:gap-3 lg:gap-4">
                  {/* Name Input */}
                  <div className="relative">
                    <input
                      type="text"
                      id="name"
                      name="name"
                      onFocus={() => setFocusedField('name')}
                      onBlur={() => setFocusedField(null)}
                      className="peer w-full rounded-lg border-2 border-border bg-card/50 backdrop-blur-sm py-2 sm:py-2.5 lg:py-3 px-3 sm:px-3.5 lg:px-4 text-sm sm:text-base text-text placeholder-transparent outline-none transition-all duration-300 ease-in-out focus:border-primary focus:bg-card focus:shadow-lg focus:shadow-primary/20"
                      placeholder="Name"
                    />
                    <label
                      htmlFor="name"
                      className={`absolute left-3 sm:left-3.5 lg:left-4 transition-all duration-300 pointer-events-none ${
                        focusedField === 'name'
                          ? 'top-1.5 sm:top-1.5 lg:top-2 text-xs text-primary'
                          : 'top-2.5 sm:top-3 lg:top-3.5 text-xs sm:text-sm text-text-muted peer-placeholder-shown:text-sm sm:peer-placeholder-shown:text-base'
                      }`}
                    >
                      Name
                    </label>
                  </div>

                  {/* Email Input */}
                  <div className="relative">
                    <input
                      type="email"
                      id="email"
                      name="email"
                      onFocus={() => setFocusedField('email')}
                      onBlur={() => setFocusedField(null)}
                      required
                      className="peer w-full rounded-lg border-2 border-border bg-card/50 backdrop-blur-sm py-2 sm:py-2.5 lg:py-3 px-3 sm:px-3.5 lg:px-4 text-sm sm:text-base text-text placeholder-transparent outline-none transition-all duration-300 ease-in-out focus:border-primary focus:bg-card focus:shadow-lg focus:shadow-primary/20"
                      placeholder="Email"
                    />
                    <label
                      htmlFor="email"
                      className={`absolute left-3 sm:left-3.5 lg:left-4 transition-all duration-300 pointer-events-none ${
                        focusedField === 'email'
                          ? 'top-1.5 sm:top-1.5 lg:top-2 text-xs text-primary'
                          : 'top-2.5 sm:top-3 lg:top-3.5 text-xs sm:text-sm text-text-muted peer-placeholder-shown:text-sm sm:peer-placeholder-shown:text-base'
                      }`}
                    >
                      Email
                    </label>
                    <ValidationError
                      prefix="Email"
                      field="email"
                      errors={state.errors}
                      className="text-error text-xs sm:text-sm mt-0.5 sm:mt-1 block"
                    />
                  </div>
                </div>

                {/* Message Textarea */}
                <div className="relative">
                  <textarea
                    id="message"
                    name="message"
                    onFocus={() => setFocusedField('message')}
                    onBlur={() => setFocusedField(null)}
                    required
                    rows={4}
                    className="peer w-full rounded-lg border-2 border-border bg-card/50 backdrop-blur-sm py-2 sm:py-2.5 lg:py-3 px-3 sm:px-3.5 lg:px-4 text-sm sm:text-base text-text placeholder-transparent outline-none resize-none transition-all duration-300 ease-in-out focus:border-primary focus:bg-card focus:shadow-lg focus:shadow-primary/20 sm:rows-5 lg:rows-6"
                    placeholder="Message"
                  />
                  <label
                    htmlFor="message"
                    className={`absolute left-3 sm:left-3.5 lg:left-4 transition-all duration-300 pointer-events-none ${
                      focusedField === 'message'
                        ? 'top-1.5 sm:top-1.5 lg:top-2 text-xs text-primary'
                        : 'top-2.5 sm:top-3 lg:top-3.5 text-xs sm:text-sm text-text-muted peer-placeholder-shown:text-sm sm:peer-placeholder-shown:text-base'
                    }`}
                  >
                    Message
                  </label>
                  <ValidationError
                    prefix="Message"
                    field="message"
                    errors={state.errors}
                    className="text-error text-xs sm:text-sm mt-0.5 sm:mt-1 block"
                  />
                </div>

                {/* Submit Button */}
                <motion.button
                  type="submit"
                  disabled={state.submitting}
                  whileHover={{ scale: state.submitting ? 1 : 1.02 }}
                  whileTap={{ scale: state.submitting ? 1 : 0.98 }}
                  className="w-full sm:w-auto mx-auto sm:mx-0 flex items-center justify-center gap-2 sm:gap-3 rounded-lg bg-primary py-2 sm:py-2.5 lg:py-3 px-6 sm:px-7 lg:px-8 text-sm sm:text-base lg:text-lg font-medium text-bg hover:bg-primary-hover focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-bg transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed shadow-lg shadow-primary/30 hover:shadow-xl hover:shadow-primary/40"
                >
                  {state.submitting ? (
                    <FaSpinner className="animate-spin text-sm sm:text-base" />
                  ) : (
                    <FaPaperPlane className="text-sm sm:text-base" />
                  )}
                  <span>{state.submitting ? 'Sending...' : 'Send Message'}</span>
                </motion.button>

                {/* General Form Errors */}
                {state.errors && state.errors.length > 0 && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="rounded-lg bg-error/10 border border-error/20 p-2 sm:p-3 lg:p-4"
                  >
                    <p className="text-error text-xs sm:text-sm">
                      Please check the form and try again.
                    </p>
                  </motion.div>
                )}
              </form>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactForm;
