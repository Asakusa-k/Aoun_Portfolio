import React, { useState } from 'react';
import { Menu, X, Download, ExternalLink, Mail, Phone, MapPin } from 'lucide-react';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  const projects = {
    socialMedia: [
      {
        name: "Game Hero",
        description: "Gaming accessories brand social media designs",
        link: "https://drive.google.com/drive/folders/1I_-F9VpkMCZZBmaIqcQUWSB0prTLuwNa?usp=drive_link&pli=1"
      },
      {
        name: "Project Starter",
        description: "Crypto business social media content",
        link: "https://drive.google.com/drive/folders/1vtU5VQ-L8rI062FB5BlE07LeYJK4EzrW"
      },
      {
        name: "Smile Studio Boston",
        description: "Dental clinic social media designs",
        link: "https://drive.google.com/drive/folders/17rL5YeyrD9g97upwsqVQLR7rqylyx31J"
      }
    ],
    wordpress: [
      {
        name: "Fall Family Furniture",
        description: "E-commerce furniture website",
        link: "https://fallfamilyfurniture.ca/"
      },
      {
        name: "British Clinic",
        description: "Medical clinic website",
        link: "#"
      },
      {
        name: "Lofty Estimation",
        description: "Business estimation service website",
        link: "#"
      }
    ],
    htmlCss: [
      {
        name: "Fluffy Kids",
        description: "Kids clothing store website",
        link: "https://drive.google.com/file/d/1XJsG4tU8BzEjr61ke9S3WnxbuSI-dXuO/view?usp=drive_link"
      },
      {
        name: "Mina Bay Sea Food",
        description: "Restaurant website design",
        link: "#"
      },
      {
        name: "All Star Meat Shop",
        description: "Butcher shop website",
        link: "https://drive.google.com/file/d/19efdx4ys9przEJ2FHLPHxcLxUldov89P/view?usp=drive_link"
      }
    ]
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-sm shadow-sm z-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Danish Aoun
            </div>
            
            {/* Desktop Menu */}
            <div className="hidden md:flex space-x-8">
              <button onClick={() => scrollToSection('home')} className="text-gray-700 hover:text-blue-600 transition-colors">Home</button>
              <button onClick={() => scrollToSection('about')} className="text-gray-700 hover:text-blue-600 transition-colors">About</button>
              <button onClick={() => scrollToSection('projects')} className="text-gray-700 hover:text-blue-600 transition-colors">Projects</button>
              <button onClick={() => scrollToSection('skills')} className="text-gray-700 hover:text-blue-600 transition-colors">Skills</button>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-gray-700">
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="md:hidden py-4 border-t">
              <div className="flex flex-col space-y-4">
                <button onClick={() => scrollToSection('home')} className="text-gray-700 hover:text-blue-600 transition-colors text-left">Home</button>
                <button onClick={() => scrollToSection('about')} className="text-gray-700 hover:text-blue-600 transition-colors text-left">About</button>
                <button onClick={() => scrollToSection('projects')} className="text-gray-700 hover:text-blue-600 transition-colors text-left">Projects</button>
                <button onClick={() => scrollToSection('skills')} className="text-gray-700 hover:text-blue-600 transition-colors text-left">Skills</button>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Home Section */}
      <section id="home" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 via-white to-purple-50 pt-16">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-6">
            Danish <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Aoun</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 mb-8">
            Graphic Designer
          </p>
          <p className="text-lg text-gray-500 mb-8 max-w-2xl mx-auto leading-relaxed">
            Certified in Figma to WordPress website development. Creating visually engaging content and user-friendly designs with a passion for innovation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <div className="flex items-center gap-2 text-gray-600">
              <MapPin size={16} />
              <span className="text-sm">House#1 Street #5 Block C Bilal town Jhelum</span>
            </div>
            <div className="flex items-center gap-2 text-gray-600">
              <Phone size={16} />
              <span className="text-sm">03350204955</span>
            </div>
            <div className="flex items-center gap-2 text-gray-600">
              <Mail size={16} />
              <span className="text-sm">aoundanish6@gmail.com</span>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-16">About Me</h2>
          
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Career Objective</h3>
              <p className="text-gray-600 leading-relaxed mb-8">
                A creative and passionate Graphic Designer with hands-on experience in UI/UX design, visual storytelling, and digital media. Skilled in Figma, Canva, and WordPress design, I aim to create visually engaging content and user-friendly designs while gaining practical experience and contributing to innovative projects.
              </p>
              
              <div className="mb-8">
                <a 
                  href="https://www.dropbox.com/scl/fi/ibjn9uyyp5cm72abonlsd/Aoun-1.pdf?rlkey=nj2ww6p0qly1kzxw1v67wgxl0&st=t22mkl4p&dl=1"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all transform hover:scale-105"
                >
                  <Download size={20} />
                  Download Resume
                </a>
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Education</h3>
              <div className="space-y-6">
                <div className="border-l-4 border-blue-500 pl-4">
                  <h4 className="font-semibold text-gray-900">PostAdp Business Management & Accountancy</h4>
                  <p className="text-gray-600">University of Management and Technology</p>
                  <p className="text-sm text-gray-500">2023 - 2025 • GPA: 3.2/4</p>
                </div>
                <div className="border-l-4 border-purple-500 pl-4">
                  <h4 className="font-semibold text-gray-900">ADP Computer Science</h4>
                  <p className="text-gray-600">University of Management and Technology</p>
                  <p className="text-sm text-gray-500">2020 - 2022 • GPA: 3.14/4</p>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-16">
            <h3 className="text-2xl font-bold text-gray-900 mb-8">Work Experience</h3>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-gray-50 p-6 rounded-lg">
                <h4 className="font-semibold text-gray-900 mb-2">Web Developer</h4>
                <p className="text-blue-600 font-medium mb-2">Freelancer</p>
                <p className="text-sm text-gray-500">2023 - onwards</p>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg">
                <h4 className="font-semibold text-gray-900 mb-2">WordPress Internship</h4>
                <p className="text-blue-600 font-medium mb-2">Tech Hub Pakistan</p>
                <p className="text-sm text-gray-500">May 2022 - June 2022</p>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg">
                <h4 className="font-semibold text-gray-900 mb-2">Graphic Designer Intern</h4>
                <p className="text-blue-600 font-medium mb-2">Multidex Technologies</p>
                <p className="text-sm text-gray-500">March 2022 - April 2022</p>
              </div>
            </div>
          </div>

          <div className="mt-16">
            <h3 className="text-2xl font-bold text-gray-900 mb-8">Certifications</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="flex items-center gap-3 p-4 border rounded-lg">
                <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                <div>
                  <h4 className="font-medium text-gray-900">Figma to WordPress Website</h4>
                  <p className="text-sm text-gray-500">2025</p>
                </div>
              </div>
              <div className="flex items-center gap-3 p-4 border rounded-lg">
                <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                <div>
                  <h4 className="font-medium text-gray-900">Web Design for Beginners: HTML & CSS</h4>
                  <p className="text-sm text-gray-500">2025</p>
                </div>
              </div>
              <div className="flex items-center gap-3 p-4 border rounded-lg">
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                <div>
                  <h4 className="font-medium text-gray-900">WordPress Web Design & Freelancing Masterclass</h4>
                  <p className="text-sm text-gray-500">2025</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-16">Skills</h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Design & UI/UX</h3>
              <ul className="space-y-2 text-gray-600">
                <li>• Figma</li>
                <li>• Canva</li>
                <li>• Adobe Creative Suite</li>
              </ul>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Web & Digital Tools</h3>
              <ul className="space-y-2 text-gray-600">
                <li>• WordPress</li>
                <li>• Shopify</li>
              </ul>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Front-End Basics</h3>
              <ul className="space-y-2 text-gray-600">
                <li>• HTML5</li>
                <li>• CSS3</li>
                <li>• JavaScript</li>
              </ul>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Other Skills</h3>
              <ul className="space-y-2 text-gray-600">
                <li>• Documentation</li>
                <li>• Good Communication</li>
                <li>• Attention to Detail</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-16">Projects</h2>
          
          {/* Social Media Design Projects */}
          <div className="mb-16">
            <h3 className="text-2xl font-bold text-gray-900 mb-8">Social Media Design Projects</h3>
            <div className="grid md:grid-cols-3 gap-8">
              {projects.socialMedia.map((project, index) => (
                <div key={index} className="bg-gray-50 rounded-lg p-6 hover:shadow-lg transition-shadow">
                  <h4 className="text-lg font-semibold text-gray-900 mb-2">{project.name}</h4>
                  <p className="text-gray-600 mb-4">{project.description}</p>
                  <a 
                    href={project.link} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 font-medium"
                  >
                    View Project <ExternalLink size={16} />
                  </a>
                </div>
              ))}
            </div>
          </div>

          {/* WordPress Projects */}
          <div className="mb-16">
            <h3 className="text-2xl font-bold text-gray-900 mb-8">WordPress Projects</h3>
            <div className="grid md:grid-cols-3 gap-8">
              {projects.wordpress.map((project, index) => (
                <div key={index} className="bg-gray-50 rounded-lg p-6 hover:shadow-lg transition-shadow">
                  <h4 className="text-lg font-semibold text-gray-900 mb-2">{project.name}</h4>
                  <p className="text-gray-600 mb-4">{project.description}</p>
                  {project.link !== "#" ? (
                    <a 
                      href={project.link} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 font-medium"
                    >
                      View Project <ExternalLink size={16} />
                    </a>
                  ) : (
                    <span className="text-gray-400">Coming Soon</span>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* HTML & CSS Projects */}
          <div className="mb-16">
            <h3 className="text-2xl font-bold text-gray-900 mb-8">HTML & CSS Projects</h3>
            <div className="grid md:grid-cols-3 gap-8">
              {projects.htmlCss.map((project, index) => (
                <div key={index} className="bg-gray-50 rounded-lg p-6 hover:shadow-lg transition-shadow">
                  <h4 className="text-lg font-semibold text-gray-900 mb-2">{project.name}</h4>
                  <p className="text-gray-600 mb-4">{project.description}</p>
                  {project.link !== "#" ? (
                    <a 
                      href={project.link} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 font-medium"
                    >
                      View Project <ExternalLink size={16} />
                    </a>
                  ) : (
                    <span className="text-gray-400">Coming Soon</span>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Research Projects */}
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-8">Research & Academic Projects</h3>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-gray-50 rounded-lg p-6">
                <h4 className="text-lg font-semibold text-gray-900 mb-2">Impact of Technology Adoption on Operational Efficiency</h4>
                <p className="text-gray-600 mb-2">Research project on business growth through technology</p>
                <span className="text-sm text-blue-600 font-medium">Research Project</span>
              </div>
              <div className="bg-gray-50 rounded-lg p-6">
                <h4 className="text-lg font-semibold text-gray-900 mb-2">Financial Statement Analysis</h4>
                <p className="text-gray-600 mb-2">Ratio calculation of Ferozsons Pharma and Mectar Pharma</p>
                <span className="text-sm text-blue-600 font-medium">Class Project</span>
              </div>
              <div className="bg-gray-50 rounded-lg p-6">
                <h4 className="text-lg font-semibold text-gray-900 mb-2">Finchartsphare Business Plan</h4>
                <p className="text-gray-600 mb-2">AI powered financial tracker all-in-one solution</p>
                <span className="text-sm text-blue-600 font-medium">Class Project</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <p className="text-gray-400">© 2025 Danish Aoun. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;