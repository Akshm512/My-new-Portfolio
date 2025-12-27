import React from "react";
import AMS from "../assets/AMS.jpg";
import IMS from "../assets/IMS.jpg";
import Ecom from "../assets/Ecom.jpg";

const Projects = () => {
  return (
    <section id="projects" className="bg-slate-900 py-24 px-6 md:px-16 text-white">
      {/* Section Header */}
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold mb-4">
          My <span className="text-blue-500">Projects</span>
        </h2>
        <p className="text-slate-400 max-w-2xl mx-auto">
          Real-world full stack applications built with modern technologies
        </p>
      </div>

      {/* Projects Grid */}
      <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-3">

        {/* Project Card 1 */}
        <div className="group bg-white/10 backdrop-blur-xl rounded-2xl overflow-hidden border border-white/10 
                        transition-all duration-500 hover:-translate-y-3 hover:shadow-2xl">

          <img
            src={AMS}
            alt="AttendSys"
            className="h-48 w-full object-cover"
          />

          <div className="p-6">
            <h3 className="text-xl font-semibold mb-3 group-hover:text-blue-400 transition">
              AttendSys – Attendance Management System
            </h3>

            <p className="text-slate-300 text-sm mb-5">
              A role-based attendance management system for Admin, Faculty,
              and Students with secure authentication.
            </p>

            {/* Tech Stack */}
            <div className="flex flex-wrap gap-2 mb-6">
              {["Spring Boot", "React", "MySQL"].map((tech) => (
                <span
                  key={tech}
                  className="bg-slate-800 text-xs px-3 py-1 rounded-full border border-slate-700"
                >
                  {tech}
                </span>
              ))}
            </div>

            {/* Links */}
            <div className="flex gap-4">
              <a
                href="https://github.com/Kapilchandane/AttendSys.git"
                target="_blank"
                rel="noreferrer"
                className="flex-1 text-center bg-blue-600 hover:bg-blue-700 transition rounded-lg py-2 text-sm font-medium"
              >
                GitHub
              </a>

            </div>
          </div>
        </div>

        {/* Project Card 2 */}
        <div className="group bg-white/10 backdrop-blur-xl rounded-2xl overflow-hidden border border-white/10 
                        transition-all duration-500 hover:-translate-y-3 hover:shadow-2xl">

          <img
            src={IMS}
            alt="Inventory Management"
            className="h-48 w-full object-cover"
          />

          <div className="p-6">
            <h3 className="text-xl font-semibold mb-3 group-hover:text-blue-400 transition">
              Inventory Management System
            </h3>

            <p className="text-slate-300 text-sm mb-5">
              Backend-driven inventory system with CRUD operations, category
              management, and RESTful APIs.
            </p>

            <div className="flex flex-wrap gap-2 mb-6">
              {["Spring Boot", "Hibernate", "MySQL", "Postman"].map((tech) => (
                <span
                  key={tech}
                  className="bg-slate-800 text-xs px-3 py-1 rounded-full border border-slate-700"
                >
                  {tech}
                </span>
              ))}
            </div>

            <div className="flex gap-4">
              <a
                href="https://github.com/Kapilchandane/inventory_management_system.git"
                target="_blank"
                rel="noreferrer"
                className="flex-1 text-center bg-blue-600 hover:bg-blue-700 transition rounded-lg py-2 text-sm font-medium"
              >
                GitHub
              </a>
            </div>
          </div>
        </div>

        {/* Project Card 3 */}
        <div className="group bg-white/10 backdrop-blur-xl rounded-2xl overflow-hidden border border-white/10 
                        transition-all duration-500 hover:-translate-y-3 hover:shadow-2xl">

          <img
            src={Ecom}
            alt="E-Commerce App"
            className="h-48 w-full object-cover"
          />

          <div className="p-6">
            <h3 className="text-xl font-semibold mb-3 group-hover:text-blue-400 transition">
              Mini E-Commerce Application
            </h3>

            <p className="text-slate-300 text-sm mb-5">
              Full-stack e-commerce app with product listings, cart, and order
              management.
            </p>

            <div className="flex flex-wrap gap-2 mb-6">
              {["React", "Spring Boot", "MySQL", "REST API"].map((tech) => (
                <span
                  key={tech}
                  className="bg-slate-800 text-xs px-3 py-1 rounded-full border border-slate-700"
                >
                  {tech}
                </span>
              ))}
            </div>

            <div className="flex gap-4">
              <a
                href="https://github.com/Kapilchandane/Mini-Ecommerce-App.git"
                target="_blank"
                rel="noreferrer"
                className="flex-1 text-center bg-blue-600 hover:bg-blue-700 transition rounded-lg py-2 text-sm font-medium"
              >
                GitHub
              </a>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Projects;
