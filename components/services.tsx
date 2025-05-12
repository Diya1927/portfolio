"use client"

import { motion } from "framer-motion"

const services = [
  {
    title: "AI/ML Development",
    description:
      "As a Computer Science graduate with AI/ML coursework, I specialize in applying machine learning concepts using Python, Pandas, NumPy, and Scikit-learn to solve complex problems.",
    icon: "layers",
  },
  {
    title: "Web Development",
    description:
      "I develop responsive and visually appealing user interfaces using React.js, Next.js, HTML, CSS, and JavaScript. Proficient in Tailwind CSS to create user-friendly web designs.",
    icon: "layout",
  },
  {
    title: "Graphic Design",
    description:
      "With hands-on experience in graphic design projects, I create visual assets for digital and print media including social media graphics, brochures, and presentations using Canva, Adobe Illustrator, and Figma.",
    icon: "server",
  },
]

export default function Services() {
  return (
    <section id="services" className="py-20 bg-gray-900">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-12 text-center"
        >
          <h2 className="mb-2 text-3xl font-bold md:text-4xl">Services</h2>
          <div className="mx-auto h-1 w-20 bg-blue-500"></div>
        </motion.div>

        <div className="grid gap-8 md:grid-cols-3">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
              className="group relative overflow-hidden rounded-xl bg-gray-800 p-8 shadow-xl transition-all duration-300"
            >
              <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-lg bg-blue-500/20 p-3 transition-all duration-300 group-hover:bg-blue-500/30">
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
                  className="h-8 w-8 text-blue-400"
                >
                  {service.icon === "layers" && (
                    <path d="m12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83Z M22 17.65V9.3M2 9.3v8.36a1 1 0 0 0 .6.91l8.57 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 .59-.92V9.29 M4.01 13 12 16.5 19.99 13" />
                  )}
                  {service.icon === "layout" && (
                    <path d="M19 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2Z M3 9h18 M9 21V9" />
                  )}
                  {service.icon === "server" && (
                    <path d="M5 12H2a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1h3 M5 4v16 M9 4h10a1 1 0 0 1 1 1v6a1 1 0 0 1-1 1H9 M9 12v8 M9 12h10a1 1 0 0 1 1 1v6a1 1 0 0 1-1 1H9" />
                  )}
                </svg>
              </div>
              <h3 className="mb-4 text-xl font-bold text-white">{service.title}</h3>
              <p className="text-gray-300">{service.description}</p>

              <div className="absolute -right-12 -top-12 h-40 w-40 rounded-full bg-blue-500/5 transition-all duration-500 group-hover:bg-blue-500/10"></div>
              <div className="absolute -bottom-16 -left-16 h-56 w-56 rounded-full bg-blue-500/5 transition-all duration-500 group-hover:bg-blue-500/10"></div>
              <div className="absolute bottom-0 left-0 h-1 w-0 bg-gradient-to-r from-blue-500 to-blue-400 transition-all duration-300 group-hover:w-full"></div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}