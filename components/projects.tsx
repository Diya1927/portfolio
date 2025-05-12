"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { link } from "fs";
const projects = [
  {
    id: 1,
    title: "Graphic Design Projects",
    description:
      "Successfully completed over 80 hours of hands-on experience in graphic design projects during my apprenticeship. Created visual assets for digital and print media including social media graphics, brochures, and presentations.",
    image:
      "/images/gd.jpg",
    tags: ["Adobe Illustrator", "Figma", "Canva"],
    link: "https://crafted.pk/",
    driveLink: "https://drive.google.com/drive/folders/1IMQSWWFOUB-dwWhM3qZ1TioxgKdBd4gz", // Google Drive Link
  },
  {
    id: 2,
    title: "Web Development Projects",
    description:
      "Developed responsive and visually appealing user interfaces using React.js, Next.js, HTML, CSS, and JavaScript. Proficiently used Tailwind CSS to create user-friendly web designs.",
    image:
      "/images/wd.jpg",
    tags: ["React.js", "Next.js", "Tailwind CSS", "JavaScript"],
    link:"https://www.codeexperts.co.uk/",
    
    driveLink: "https://drive.google.com/drive/folders/1Lkm1RUYMo84D71HW80HnXeGO4LxJlAcz",

  },
  {
    id: 3,
    title: "Professional Resume in Canva",
    description:
      "Created a professional resume design using Canva as part of a Coursera project, showcasing my graphic design skills.",
    image:
      "/images/cv.png",
    tags: ["Canva", "Graphic Design"],
    link: "https://www.coursera.org/",
    driveLink: "https://drive.google.com/drive/folders/1IMQSWWFOUB-dwWhM3qZ1TioxgKdBd4gz",
  },
  {
  id: 4,
  title: "Fast Food Nutrition Analysis",
  description: 
    "A comprehensive data analysis project exploring nutritional values in fast food items. Performed data cleaning, feature engineering, and machine learning modeling to predict calorie content based on nutritional features. Utilized Python, Pandas, Scikit-learn, and visualization libraries.",
  image: 
    "/images/m.png", 
  tags: ["Python", "Pandas", "Scikit-learn", "Data Analysis", "Machine Learning"],
  link: "#", 
  driveLink: "https://drive.google.com/drive/folders/1Gwc_hXmNlhmHqxfDt-zndiRX57M0tthl" 
}
];

export default function Projects() {
  const [visibleProjects, setVisibleProjects] = useState(3);

  const loadMore = () => {
    setVisibleProjects((prev) => Math.min(prev + 3, projects.length));
  };

  const showLess = () => {
    setVisibleProjects(3);
  };

  return (
    <section id="projects" className="py-20 bg-black">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-12 text-center"
        >
          <h2 className="mb-2 text-3xl font-bold md:text-4xl">Projects</h2>
          <div className="mx-auto h-1 w-20 bg-blue-500"></div>
        </motion.div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {projects.slice(0, visibleProjects).map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
              className="group relative overflow-hidden rounded-xl bg-gray-800 shadow-xl transition-all duration-300"
            >
              <div className="relative h-48 overflow-hidden group-hover:scale-105">
                <img
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  className="h-full w-full object-cover transition-transform duration-500 "
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-black/20 opacity-0 transition-opacity duration-300 group-hover:opacity-100 "></div>
              </div>

              <div className="p-6">
                <h3 className="mb-2 text-xl font-bold text-white">
                  {project.title}
                </h3>
                <p className="mb-4 text-gray-300">{project.description}</p>

                <div className="mb-4 flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full bg-blue-500/10 px-3 py-1 text-xs font-medium text-blue-400"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <Button
                  onClick={() => window.open(project.driveLink, "_blank")}
                  variant="outline"
                  className="mt-2 w-full  border-blue-500 text-blue-400 hover:bg-blue-500/10 hover:text-blue-300"
                >
                  View Projects

                </Button>

                <Button
                  onClick={() => window.open(project.link, "_blank")}
                  variant="outline"
                  className="mt-2 w-full  border-blue-500 text-blue-400 hover:bg-blue-500/10 hover:text-blue-300"
                >
                  link of the website
                </Button>
              </div>

              {/* Animated border */}
              <div className="pointer-events-none absolute inset-0 rounded-xl border-2 border-blue-500/0 transition-all duration-300 group-hover:border-blue-500/30"></div>

              {/* Glow effect */}
              <div className="pointer-events-none absolute -inset-px -z-10 rounded-xl bg-gradient-to-r from-blue-600/0 via-blue-600/40 to-blue-600/0 opacity-0 blur-xl transition-opacity duration-500 group-hover:opacity-100"></div>
            </motion.div>
          ))}
        </div>

        <div className="mt-12 flex justify-center">
          {visibleProjects < projects.length ? (
            <Button
              onClick={loadMore}
              className="bg-blue-500 hover:bg-blue-600"
            >
              Load More Projects
            </Button>
          ) : (
            <Button
              onClick={showLess}
              variant="outline"
              className="border-blue-500 text-blue-400 hover:bg-blue-500/10 hover:text-blue-300"
            >
              Show Less
            </Button>
          )}
        </div>
      </div>
    </section>
  );
}