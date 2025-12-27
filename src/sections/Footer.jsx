import { useEffect, useState } from "react";
import { ArrowUp, Github, Linkedin, Mail } from "lucide-react";

export default function Footer() {
  const [showTop, setShowTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowTop(window.scrollY > 300);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative bg-black text-gray-400 pt-16 pb-8 px-6 overflow-hidden">
      {/* Gradient blur */}
      <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-96 h-96 bg-indigo-500/10 blur-3xl rounded-full" />

      <div className="relative max-w-6xl mx-auto grid md:grid-cols-3 gap-10">
        {/* About */}
        <div>
          <h3 className="text-xl font-semibold text-white mb-4">
            Kapil Chandane
          </h3>
          <p className="text-sm leading-relaxed">
            Fresher Full Stack Developer passionate about building clean,
            scalable, and user-friendly web applications using modern
            technologies.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="text-lg font-semibold text-white mb-4">
            Quick Links
          </h4>
          <ul className="space-y-2 text-sm">
            {["Home", "Projects", "Skills", "Education", "Contact"].map(
              (item) => (
                <li key={item}>
                  <a
                    href={`#${item.toLowerCase()}`}
                    className="hover:text-white transition"
                  >
                    {item}
                  </a>
                </li>
              )
            )}
          </ul>
        </div>

        {/* Contact & Social */}
        <div>
          <h4 className="text-lg font-semibold text-white mb-4">
            Connect With Me
          </h4>

          <p className="text-sm mb-2 flex items-center gap-2">
            <Mail size={16} /> chandanekapil16@gmail.com
          </p>
          <p className="text-sm mb-4">📍 Pune, India</p>

          <div className="flex gap-4">
            <a
              href="https://github.com/Kapilchandane"
              target="_blank"
              className="hover:text-white transition"
            >
              <Github />
            </a>
            <a
              href="https://www.linkedin.com/in/kapil-chandane"
              target="_blank"
              className="hover:text-white transition"
            >
              <Linkedin />
            </a>
            <a
              href="mailto:chandanekapil16@gmail.com"
              className="hover:text-white transition"
            >
              <Mail />
            </a>
          </div>
        </div>
      </div>

      {/* Divider */}
      <div className="border-t border-white/10 mt-10 pt-6 text-center text-sm">
        © {new Date().getFullYear()} Kapil Chandane. All rights reserved.
      </div>

      {/* Scroll To Top */}
      {showTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 p-3 rounded-full bg-indigo-600 text-white shadow-lg hover:scale-110 transition"
        >
          <ArrowUp size={18} />
        </button>
      )}
    </footer>
  );
}
