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
      <div className="pb-8 sm:pb-12 lg:pb-20">
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
    <div className="pb-8 sm:pb-12 lg:pb-20">
      <section className="relative">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-10 lg:py-12">
          {/* Header Section */}
          <motion.div
            initial={{ opacity: 0, y: -30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="mb-8 sm:mb-10 lg:mb-12 text-center"
          >
            <motion.h1
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-2xl sm:text-3xl lg:text-4xl font-bold text-text mb-2 sm:mb-3"
            >
              Contact Me
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mx-auto text-sm sm:text-base leading-relaxed text-text-muted max-w-xl px-2"
            >
              Feel free to reach out! Whether you have a question, feedback, or a collaboration proposal, I would love to hear from you.
            </motion.p>
          </motion.div>

          {/* Form Container - Single Column */}
          <div className="max-w-2xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="bg-card rounded-xl border border-border shadow-lg p-6 sm:p-8 lg:p-10"
            >
              <form
                onSubmit={handleSubmit}
                id="contact-form"
                method="POST"
                className="space-y-4 sm:space-y-5"
              >
                {/* Name and Email Row */}
                <div className="grid sm:grid-cols-2 gap-3 sm:gap-4">
                  {/* Name Input */}
                  <div className="relative">
                    <input
                      type="text"
                      id="name"
                      name="name"
                      onFocus={() => setFocusedField('name')}
                      onBlur={() => setFocusedField(null)}
                      className="peer w-full rounded-lg border border-border bg-bg/50 py-2.5 px-4 text-sm text-text placeholder-transparent outline-none transition-all duration-200 ease-in-out focus:border-primary focus:bg-bg focus:ring-2 focus:ring-primary/20"
                      placeholder="Name"
                    />
                    <label
                      htmlFor="name"
                      className={`absolute left-4 transition-all duration-200 pointer-events-none ${
                        focusedField === 'name'
                          ? 'top-1.5 text-xs text-primary'
                          : 'top-2.5 text-sm text-text-muted peer-placeholder-shown:text-base'
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
                      className="peer w-full rounded-lg border border-border bg-bg/50 py-2.5 px-4 text-sm text-text placeholder-transparent outline-none transition-all duration-200 ease-in-out focus:border-primary focus:bg-bg focus:ring-2 focus:ring-primary/20"
                      placeholder="Email"
                    />
                    <label
                      htmlFor="email"
                      className={`absolute left-4 transition-all duration-200 pointer-events-none ${
                        focusedField === 'email'
                          ? 'top-1.5 text-xs text-primary'
                          : 'top-2.5 text-sm text-text-muted peer-placeholder-shown:text-base'
                      }`}
                    >
                      Email
                    </label>
                    <ValidationError
                      prefix="Email"
                      field="email"
                      errors={state.errors}
                      className="text-error text-xs mt-1 block"
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
                    rows={5}
                    className="peer w-full rounded-lg border border-border bg-bg/50 py-2.5 px-4 text-sm text-text placeholder-transparent outline-none resize-none transition-all duration-200 ease-in-out focus:border-primary focus:bg-bg focus:ring-2 focus:ring-primary/20"
                    placeholder="Message"
                  />
                  <label
                    htmlFor="message"
                    className={`absolute left-4 transition-all duration-200 pointer-events-none ${
                      focusedField === 'message'
                        ? 'top-1.5 text-xs text-primary'
                        : 'top-2.5 text-sm text-text-muted peer-placeholder-shown:text-base'
                    }`}
                  >
                    Message
                  </label>
                  <ValidationError
                    prefix="Message"
                    field="message"
                    errors={state.errors}
                    className="text-error text-xs mt-1 block"
                  />
                </div>

                {/* Submit Button */}
                <motion.button
                  type="submit"
                  disabled={state.submitting}
                  whileHover={{ scale: state.submitting ? 1 : 1.02 }}
                  whileTap={{ scale: state.submitting ? 1 : 0.98 }}
                  className="w-full flex items-center justify-center gap-2 rounded-lg bg-primary py-2.5 px-6 text-sm font-medium text-bg hover:bg-primary-hover focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-card transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed shadow-md hover:shadow-lg"
                >
                  {state.submitting ? (
                    <FaSpinner className="animate-spin" />
                  ) : (
                    <FaPaperPlane />
                  )}
                  <span>{state.submitting ? 'Sending...' : 'Send Message'}</span>
                </motion.button>

                {/* General Form Errors */}
                {state.errors && state.errors.length > 0 && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="rounded-lg bg-error/10 border border-error/20 p-3"
                  >
                    <p className="text-error text-xs">
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
