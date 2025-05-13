"use client";

import type React from "react";
import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import Swal from "sweetalert2";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: any) => {
    setLoading(true);
    e.preventDefault();
    e.persist();


  const formData = new FormData(e.target);
  const name = formData.get("name");
  const email = formData.get("email");
  const message = formData.get("message");

  try {
    const response = await fetch("https://api.emailjs.com/api/v1.0/email/send", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        service_id: "service_4f3rqr3",  // Replace with your service ID
        template_id: "template_tqjkua7",  // Replace with your template ID
        user_id: "E5Qlasqg4eVrNnqJV",  // Replace with your public API key
        template_params: {
          name,
          email,
          message,
        },
      }),
    });

    if (response.ok) {
      Swal.fire({
        title: "Mail Sent!",
        text: "I'll get back to you soon😉.",
        icon: "success",
        timer: 1500,
        showConfirmButton: false,
      });
      setLoading(false);
      e.target.reset();
    }
  } catch (error) {
    setLoading(false);
    e.target.reset();
    Swal.fire({
      title: "Failed to send message!",
      text: "Please try again later🥲",
      icon: "error",
      timer: 1500,
      showConfirmButton: false,
    });
  }
};

  

  return (
    <section id="contact" className="py-20 bg-gray-900">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-12 text-center"
        >
          <h2 className="mb-2 text-3xl font-bold md:text-4xl">Contact</h2>
          <div className="mx-auto h-1 w-20 bg-blue-500"></div>
          <p className="mt-4 text-lg text-white">Connect with me</p>
          <p className="text-gray-400">
            If you want to know more about me or my work, or if you would just
            like to say hello, send me a message. I'd love to hear from you.
          </p>
        </motion.div>

        <div className="flex flex-col gap-10 md:flex-row">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="w-full md:w-1/2"
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="group relative">
                <label
                  htmlFor="name"
                  className="mb-2 block text-sm font-medium text-gray-300"
                >
                  Name
                </label>
                <Input
                  id="name"
                  name="name"
                  placeholder="Enter your name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="border-gray-700 bg-gray-800 text-white placeholder:text-gray-500"
                />
                <div className="absolute -inset-0.5 -z-10 rounded-lg bg-gradient-to-r from-blue-600/0 via-blue-600/0 to-blue-600/0 opacity-0 blur transition-all duration-500 group-focus-within:from-blue-600/20 group-focus-within:via-blue-600/30 group-focus-within:to-blue-600/20 group-focus-within:opacity-100"></div>
              </div>

              <div className="group relative">
                <label
                  htmlFor="email"
                  className="mb-2 block text-sm font-medium text-gray-300"
                >
                  Email
                </label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="Enter your email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="border-gray-700 bg-gray-800 text-white placeholder:text-gray-500"
                />
                <div className="absolute -inset-0.5 -z-10 rounded-lg bg-gradient-to-r from-blue-600/0 via-blue-600/0 to-blue-600/0 opacity-0 blur transition-all duration-500 group-focus-within:from-blue-600/20 group-focus-within:via-blue-600/30 group-focus-within:to-blue-600/20 group-focus-within:opacity-100"></div>
              </div>

              <div className="group relative">
                <label
                  htmlFor="message"
                  className="mb-2 block text-sm font-medium text-gray-300"
                >
                  Message
                </label>
                <Textarea
                  id="message"
                  name="message"
                  placeholder="Enter your message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  className="min-h-[150px] border-gray-700 bg-gray-800 text-white placeholder:text-gray-500"
                />
                <div className="absolute -inset-0.5 -z-10 rounded-lg bg-gradient-to-r from-blue-600/0 via-blue-600/0 to-blue-600/0 opacity-0 blur transition-all duration-500 group-focus-within:from-blue-600/20 group-focus-within:via-blue-600/30 group-focus-within:to-blue-600/20 group-focus-within:opacity-100"></div>
              </div>

              <Button
                type="submit"
                disabled={loading}
                className="w-full bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-700 hover:to-blue-600"
              >
                {loading ? "Sending...." : "Send Message"}
              </Button>

              <p className="text-center text-sm text-gray-400">
                Or send me email directly at{" "}
                <a
                  href="mailto:madihaso1123@gmail.com"
                  className="text-blue-400 hover:text-blue-300"
                >
                  madihaso1123@gmail.com
                </a>
              </p>
            </form>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="w-full md:w-1/2"
          >
            <div className="relative overflow-hidden rounded-xl bg-gray-800 p-8 shadow-xl">
              <h3 className="mb-6 text-xl font-bold text-white">
                Contact Information
              </h3>

              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="mr-4 flex h-10 w-10 items-center justify-center rounded-full bg-blue-500/20">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="h-5 w-5 text-blue-400"
                    >
                      <path d="M22 17a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V9.5C2 7 4 5 6.5 5H18c2.2 0 4 1.8 4 4v8Z" />
                      <polyline points="15,9 18,9 18,11" />
                      <path d="M6.5 5C9 5 11 7 11 9.5V17a2 2 0 0 1-2 2v0" />
                      <line x1="6" x2="7" y1="10" y2="10" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-sm font-medium text-gray-400">Email</h4>
                    <a
                      href="mailto:madihaso1123@gmail.com"
                      className="text-blue-400 hover:text-blue-300"
                    >
                      madihaso1123@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="mr-4 flex h-10 w-10 items-center justify-center rounded-full bg-blue-500/20">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="h-5 w-5 text-blue-400"
                    >
                      <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
                      <circle cx="12" cy="10" r="3" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-sm font-medium text-gray-400">
                      Address
                    </h4>
                    <p className="text-white">
                      Islamabad, Pakistan
                    </p>
                  </div>
                </div>

                <div>
                  <h4 className="mb-3 text-sm font-medium text-gray-400">
                    Social
                  </h4>
                  <div className="flex space-x-4">
                    <a
                      href="https://www.linkedin.com/in/madiha-khan-854051224"
                      className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-500/20 text-blue-400 transition-colors hover:bg-blue-500/30 hover:text-blue-300"
                      aria-label="LinkedIn"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="h-5 w-5"
                      >
                        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                        <rect width="4" height="12" x="2" y="9" />
                        <circle cx="4" cy="4" r="2" />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>

              <div className="absolute -right-16 -top-16 h-32 w-32 rounded-full bg-blue-500/5"></div>
              <div className="absolute -bottom-16 -left-16 h-32 w-32 rounded-full bg-blue-500/5"></div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}