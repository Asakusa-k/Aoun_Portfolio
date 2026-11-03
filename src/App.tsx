import React, { useState } from 'react';
import { Menu, X, Download, ExternalLink, Mail, Phone, MapPin, ChevronDown } from 'lucide-react';

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
    shopify: [
      {
        name: "True Rest",
        description: "Shopify store for a UK memory foam mattress brand: product pages, brand story, reviews, blog and Klarna checkout",
        link: "https://truerest.co.uk"
      }
    ],
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
        name: "ExtreemTek",
        description: "Company website for a software development company in Eindhoven (in progress)",
        link: "https://extreemtek.com"
      },
      {
        name: "Solar Dream",
        description: "Website for a UK solar energy business",
        link: "https://solardream.co.uk"
      },
      {
        name: "Ray Executive Cars",
        description: "Website and social media designs for a UK executive car service",
        link: "https://www.rayexecutivecars.co.uk"
      },
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
      <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-sm shadow-lg z-50 transition-all duration-300">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4 animate-fade-in">
            <div className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent hover:scale-105 transition-transform duration-300 cursor-pointer">
              Aoun Danish
            </div>
            
            {/* Desktop Menu */}
            <div className="hidden md:flex space-x-8">
              <button onClick={() => scrollToSection('home')} className="text-gray-700 hover:text-blue-600 transition-all duration-300 hover:scale-110 font-medium relative group">
                Home
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-600 to-purple-600 group-hover:w-full transition-all duration-300"></span>
              </button>
              <button onClick={() => scrollToSection('about')} className="text-gray-700 hover:text-blue-600 transition-all duration-300 hover:scale-110 font-medium relative group">
                About
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-600 to-purple-600 group-hover:w-full transition-all duration-300"></span>
              </button>
              <button onClick={() => scrollToSection('projects')} className="text-gray-700 hover:text-blue-600 transition-all duration-300 hover:scale-110 font-medium relative group">
                Projects
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-600 to-purple-600 group-hover:w-full transition-all duration-300"></span>
              </button>
              <button onClick={() => scrollToSection('skills')} className="text-gray-700 hover:text-blue-600 transition-all duration-300 hover:scale-110 font-medium relative group">
                Skills
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-600 to-purple-600 group-hover:w-full transition-all duration-300"></span>
              </button>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-gray-700 hover:text-blue-600 transition-all duration-300 hover:scale-110">
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="md:hidden py-4 border-t animate-slide-down">
              <div className="flex flex-col space-y-4">
                <button onClick={() => scrollToSection('home')} className="text-gray-700 hover:text-blue-600 transition-all duration-300 text-left hover:translate-x-2 font-medium">Home</button>
                <button onClick={() => scrollToSection('about')} className="text-gray-700 hover:text-blue-600 transition-all duration-300 text-left hover:translate-x-2 font-medium">About</button>
                <button onClick={() => scrollToSection('projects')} className="text-gray-700 hover:text-blue-600 transition-all duration-300 text-left hover:translate-x-2 font-medium">Projects</button>
                <button onClick={() => scrollToSection('skills')} className="text-gray-700 hover:text-blue-600 transition-all duration-300 text-left hover:translate-x-2 font-medium">Skills</button>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Home Section */}
      <section id="home" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 via-white to-purple-50 pt-16 relative overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-blue-400/20 to-purple-400/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-br from-purple-400/20 to-pink-400/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>
        
        <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
          <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-6 animate-fade-in-up">
            Aoun <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent animate-gradient">Danish</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 mb-8 animate-fade-in-up delay-200">
            Web Developer &amp; Digital Marketer
          </p>
          <p className="text-lg text-gray-500 mb-8 max-w-2xl mx-auto leading-relaxed animate-fade-in-up delay-300">
            I build WordPress and Shopify websites and run the marketing that brings customers to them: Meta ads, lead generation and SEO.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in-up delay-500">
            <div className="flex items-center gap-2 text-gray-600 hover:text-blue-600 transition-colors duration-300 group">
              <MapPin size={16} />
              <span className="text-sm group-hover:scale-105 transition-transform duration-300">Jhelum, Pakistan</span>
            </div>
            <div className="flex items-center gap-2 text-gray-600 hover:text-blue-600 transition-colors duration-300 group">
              <Phone size={16} />
              <span className="text-sm group-hover:scale-105 transition-transform duration-300">03350204955</span>
            </div>
            <div className="flex items-center gap-2 text-gray-600 hover:text-blue-600 transition-colors duration-300 group">
              <Mail size={16} />
              <span className="text-sm group-hover:scale-105 transition-transform duration-300">aoundanish6@gmail.com</span>
            </div>
            <a href="https://www.linkedin.com/in/aoun-danish-87a12a449/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-gray-600 hover:text-blue-600 transition-colors duration-300 group">
              <ExternalLink size={16} />
              <span className="text-sm group-hover:scale-105 transition-transform duration-300">LinkedIn</span>
            </a>
          </div>
          
          {/* Scroll Down Indicator */}
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
            <ChevronDown className="w-6 h-6 text-gray-400" />
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-white relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 bg-gradient-to-br from-gray-50/50 to-blue-50/30"></div>
        
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-16 animate-fade-in-up relative">
            About Me
            <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full"></div>
          </h2>
          
          <div className="grid md:grid-cols-2 gap-12 relative z-10">
            <div className="animate-fade-in-left">
              <h3 className="text-2xl font-bold text-gray-900 mb-6 relative">
                Career Objective
                <div className="absolute -bottom-2 left-0 w-16 h-0.5 bg-gradient-to-r from-blue-600 to-purple-600"></div>
              </h3>
              <p className="text-gray-600 leading-relaxed mb-8 hover:text-gray-700 transition-colors duration-300">
                I help businesses get more leads and sales online, from the ad to the website it lands on. I'm a Digital Marketer at ExtreemTek, where I run Meta lead-generation campaigns, handle website content and SEO, and am building the company website. Since 2023 I've also built WordPress and Shopify sites for clients including True Rest, Solar Dream, Fall Family Furniture and Ray Executive Cars. Because I do both, the campaign and the landing page come from the same person.
              </p>
              
              <div className="mb-8 group">
                <a 
                  href="https://www.dropbox.com/scl/fi/ibjn9uyyp5cm72abonlsd/Aoun-1.pdf?rlkey=nj2ww6p0qly1kzxw1v67wgxl0&st=t22mkl4p&dl=1"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-xl font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl relative overflow-hidden group"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <Download size={20} />
                  <span className="relative z-10">Download Resume</span>
                </a>
              </div>
            </div>

            <div className="animate-fade-in-right">
              <h3 className="text-2xl font-bold text-gray-900 mb-6 relative">
                Education
                <div className="absolute -bottom-2 left-0 w-16 h-0.5 bg-gradient-to-r from-blue-600 to-purple-600"></div>
              </h3>
              <div className="space-y-6">
                <div className="border-l-4 border-blue-500 pl-4 hover:border-blue-600 transition-colors duration-300 hover:translate-x-2 transform transition-transform">
                  <h4 className="font-semibold text-gray-900">PostAdp Business Management & Accountancy</h4>
                  <p className="text-gray-600">University of Management and Technology</p>
                  <p className="text-sm text-gray-500">2023 - 2025 • GPA: 3.2/4</p>
                </div>
                <div className="border-l-4 border-purple-500 pl-4 hover:border-purple-600 transition-colors duration-300 hover:translate-x-2 transform transition-transform">
                  <h4 className="font-semibold text-gray-900">ADP Computer Science</h4>
                  <p className="text-gray-600">University of Management and Technology</p>
                  <p className="text-sm text-gray-500">2020 - 2022 • GPA: 3.14/4</p>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-16">
            <h3 className="text-2xl font-bold text-gray-900 mb-8 animate-fade-in-up relative">
              Work Experience
              <div className="absolute -bottom-2 left-0 w-16 h-0.5 bg-gradient-to-r from-blue-600 to-purple-600"></div>
            </h3>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-gray-50 p-6 rounded-xl hover:bg-white hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border-l-4 border-indigo-500 animate-fade-in-up">
                <h4 className="font-semibold text-gray-900 mb-2">Digital Marketer</h4>
                <p className="text-blue-600 font-medium mb-2">ExtreemTek</p>
                <p className="text-sm text-gray-500">June 2026 - Present</p>
              </div>
              <div className="bg-gray-50 p-6 rounded-xl hover:bg-white hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border-l-4 border-pink-500 animate-fade-in-up">
                <h4 className="font-semibold text-gray-900 mb-2">Digital Marketer</h4>
                <p className="text-blue-600 font-medium mb-2">Chimp Studio</p>
                <p className="text-sm text-gray-500">Sep 2025 - June 2026</p>
              </div>
              <div className="bg-gray-50 p-6 rounded-xl hover:bg-white hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border-l-4 border-blue-500 animate-fade-in-up delay-100">
                <h4 className="font-semibold text-gray-900 mb-2">Web Developer</h4>
                <p className="text-blue-600 font-medium mb-2">Freelancer</p>
                <p className="text-sm text-gray-500">2023 - onwards</p>
              </div>
              <div className="bg-gray-50 p-6 rounded-xl hover:bg-white hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border-l-4 border-green-500 animate-fade-in-up delay-200">
                <h4 className="font-semibold text-gray-900 mb-2">WordPress Internship</h4>
                <p className="text-blue-600 font-medium mb-2">Tech Hub Pakistan</p>
                <p className="text-sm text-gray-500">May 2022 - June 2022</p>
              </div>
              <div className="bg-gray-50 p-6 rounded-xl hover:bg-white hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border-l-4 border-purple-500 animate-fade-in-up delay-300">
                <h4 className="font-semibold text-gray-900 mb-2">Graphic Designer Intern</h4>
                <p className="text-blue-600 font-medium mb-2">Multidex Technologies</p>
                <p className="text-sm text-gray-500">March 2022 - April 2022</p>
              </div>
            </div>
          </div>

          <div className="mt-16">
            <h3 className="text-2xl font-bold text-gray-900 mb-8 animate-fade-in-up relative">
              Certifications
              <div className="absolute -bottom-2 left-0 w-16 h-0.5 bg-gradient-to-r from-blue-600 to-purple-600"></div>
            </h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="flex items-center gap-3 p-4 border rounded-xl hover:border-blue-300 hover:shadow-lg transition-all duration-300 transform hover:scale-105 animate-fade-in-up delay-100">
                <div className="w-3 h-3 bg-blue-500 rounded-full animate-pulse"></div>
                <div>
                  <h4 className="font-medium text-gray-900">Figma to WordPress Website</h4>
                  <p className="text-sm text-gray-500">Udemy • 2025</p>
                </div>
              </div>
              <a href="https://ude.my/UC-7b636a14-b0ad-47c6-9e1c-b6f2609a32da" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 p-4 border rounded-xl hover:border-purple-300 hover:shadow-lg transition-all duration-300 transform hover:scale-105 animate-fade-in-up delay-200">
                <div className="w-3 h-3 bg-purple-500 rounded-full animate-pulse"></div>
                <div>
                  <h4 className="font-medium text-gray-900">Web Design for Beginners: HTML & CSS</h4>
                  <p className="text-sm text-gray-500">Udemy • May 2025 • Verify ↗</p>
                </div>
              </a>
              <a href="https://ude.my/UC-96d73063-d0a0-4919-af72-8b3e706e09c3" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 p-4 border rounded-xl hover:border-green-300 hover:shadow-lg transition-all duration-300 transform hover:scale-105 animate-fade-in-up delay-300">
                <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                <div>
                  <h4 className="font-medium text-gray-900">WordPress Web Design & Freelancing Masterclass</h4>
                  <p className="text-sm text-gray-500">Udemy • May 2025 • Verify ↗</p>
                </div>
              </a>
              <a href="https://ude.my/UC-3603e572-5aed-4b99-b4b8-a7411181812f" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 p-4 border rounded-xl hover:border-orange-300 hover:shadow-lg transition-all duration-300 transform hover:scale-105 animate-fade-in-up delay-300">
                <div className="w-3 h-3 bg-orange-500 rounded-full animate-pulse"></div>
                <div>
                  <h4 className="font-medium text-gray-900">WordPress (No Coding): Build a Site in 3.5 Hours</h4>
                  <p className="text-sm text-gray-500">Udemy • May 2025 • Verify ↗</p>
                </div>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-16">Skills</h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="group bg-white p-6 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border-l-4 border-pink-500 hover:border-pink-600">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-gradient-to-br from-pink-500 to-orange-500 rounded-lg flex items-center justify-center mr-3 group-hover:scale-110 transition-transform duration-300">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                  </svg>
                </div>
                <h3 className="text-lg font-bold text-gray-900 group-hover:text-pink-600 transition-colors duration-300">Digital Marketing</h3>
              </div>
              <div className="space-y-3">
                {["Meta (Facebook & Instagram) Ads", "Lead Generation", "SEO", "Social Media Marketing"].map((s) => (
                  <div key={s} className="flex items-center p-2 rounded-lg hover:bg-pink-50 transition-colors duration-200">
                    <div className="w-2 h-2 bg-pink-500 rounded-full mr-3 animate-pulse"></div>
                    <span className="text-gray-700 font-medium">{s}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="group bg-white p-6 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border-l-4 border-blue-500 hover:border-blue-600">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center mr-3 group-hover:scale-110 transition-transform duration-300">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zM21 5a2 2 0 00-2-2h-4a2 2 0 00-2 2v12a4 4 0 004 4h4a4 4 0 004-4V5z" />
                  </svg>
                </div>
                <h3 className="text-lg font-bold text-gray-900 group-hover:text-blue-600 transition-colors duration-300">Design & UI/UX</h3>
              </div>
              <div className="space-y-3">
                <div className="flex items-center p-2 rounded-lg hover:bg-blue-50 transition-colors duration-200">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mr-3 animate-pulse"></div>
                  <span className="text-gray-700 font-medium">Figma</span>
                </div>
                <div className="flex items-center p-2 rounded-lg hover:bg-purple-50 transition-colors duration-200">
                  <div className="w-2 h-2 bg-purple-500 rounded-full mr-3 animate-pulse"></div>
                  <span className="text-gray-700 font-medium">Canva</span>
                </div>
              </div>
            </div>
            
            <div className="group bg-white p-6 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border-l-4 border-green-500 hover:border-green-600">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-teal-600 rounded-lg flex items-center justify-center mr-3 group-hover:scale-110 transition-transform duration-300">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9v-9m0-9v9" />
                  </svg>
                </div>
                <h3 className="text-lg font-bold text-gray-900 group-hover:text-green-600 transition-colors duration-300">Web & Digital Tools</h3>
              </div>
              <div className="space-y-3">
                <div className="flex items-center p-2 rounded-lg hover:bg-green-50 transition-colors duration-200">
                  <div className="w-2 h-2 bg-green-500 rounded-full mr-3 animate-pulse"></div>
                  <span className="text-gray-700 font-medium">WordPress</span>
                </div>
                <div className="flex items-center p-2 rounded-lg hover:bg-teal-50 transition-colors duration-200">
                  <div className="w-2 h-2 bg-teal-500 rounded-full mr-3 animate-pulse"></div>
                  <span className="text-gray-700 font-medium">Shopify</span>
                </div>
              </div>
            </div>
            
            <div className="group bg-white p-6 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border-l-4 border-orange-500 hover:border-orange-600">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-red-600 rounded-lg flex items-center justify-center mr-3 group-hover:scale-110 transition-transform duration-300">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                  </svg>
                </div>
                <h3 className="text-lg font-bold text-gray-900 group-hover:text-orange-600 transition-colors duration-300">Front-End Basics</h3>
              </div>
              <div className="space-y-3">
                <div className="flex items-center p-2 rounded-lg hover:bg-orange-50 transition-colors duration-200">
                  <div className="w-2 h-2 bg-orange-500 rounded-full mr-3 animate-pulse"></div>
                  <span className="text-gray-700 font-medium">HTML5</span>
                </div>
                <div className="flex items-center p-2 rounded-lg hover:bg-red-50 transition-colors duration-200">
                  <div className="w-2 h-2 bg-red-500 rounded-full mr-3 animate-pulse"></div>
                  <span className="text-gray-700 font-medium">CSS3</span>
                </div>
                <div className="flex items-center p-2 rounded-lg hover:bg-yellow-50 transition-colors duration-200">
                  <div className="w-2 h-2 bg-yellow-500 rounded-full mr-3 animate-pulse"></div>
                  <span className="text-gray-700 font-medium">JavaScript</span>
                </div>
              </div>
            </div>
            
            <div className="group bg-white p-6 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border-l-4 border-indigo-500 hover:border-indigo-600">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-lg flex items-center justify-center mr-3 group-hover:scale-110 transition-transform duration-300">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                  </svg>
                </div>
                <h3 className="text-lg font-bold text-gray-900 group-hover:text-indigo-600 transition-colors duration-300">Other Skills</h3>
              </div>
              <div className="space-y-3">
                <div className="flex items-center p-2 rounded-lg hover:bg-indigo-50 transition-colors duration-200">
                  <div className="w-2 h-2 bg-indigo-500 rounded-full mr-3 animate-pulse"></div>
                  <span className="text-gray-700 font-medium">Documentation</span>
                </div>
                <div className="flex items-center p-2 rounded-lg hover:bg-indigo-50 transition-colors duration-200">
                  <div className="w-2 h-2 bg-indigo-500 rounded-full mr-3 animate-pulse"></div>
                  <span className="text-gray-700 font-medium">Power BI</span>
                </div>
                <div className="flex items-center p-2 rounded-lg hover:bg-purple-50 transition-colors duration-200">
                  <div className="w-2 h-2 bg-purple-500 rounded-full mr-3 animate-pulse"></div>
                  <span className="text-gray-700 font-medium">Good Communication</span>
                </div>
                <div className="flex items-center p-2 rounded-lg hover:bg-pink-50 transition-colors duration-200">
                  <div className="w-2 h-2 bg-pink-500 rounded-full mr-3 animate-pulse"></div>
                  <span className="text-gray-700 font-medium">Attention to Detail</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 bg-gradient-to-br from-gray-50 to-white relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute top-20 right-20 w-64 h-64 bg-gradient-to-br from-blue-100/50 to-purple-100/50 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-20 w-64 h-64 bg-gradient-to-br from-purple-100/50 to-pink-100/50 rounded-full blur-3xl"></div>
        
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-16 animate-fade-in-up relative">
            Projects
            <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full"></div>
          </h2>
          
          {/* Shopify Projects */}
          <div className="mb-16">
            <h3 className="text-2xl font-bold text-gray-900 mb-8 animate-fade-in-up relative">
              Shopify Projects
              <div className="absolute -bottom-2 left-0 w-16 h-0.5 bg-gradient-to-r from-emerald-600 to-lime-600"></div>
            </h3>
            <div className="grid md:grid-cols-3 gap-8">
              {projects.shopify.map((project, index) => (
                <div key={index} className="bg-white rounded-xl p-6 hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 border-l-4 border-emerald-500 hover:border-emerald-600 animate-fade-in-up group relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-emerald-50/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-2">{project.name}</h4>
                  <p className="text-gray-600 mb-4">{project.description}</p>
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-emerald-600 hover:text-emerald-700 font-medium hover:scale-105 transition-all duration-300 relative z-10"
                  >
                    Visit Store <ExternalLink size={16} />
                  </a>
                </div>
              ))}
            </div>
          </div>

          {/* Social Media Design Projects */}
          <div className="mb-16">
            <h3 className="text-2xl font-bold text-gray-900 mb-8 animate-fade-in-up relative">
              Social Media Design Projects
              <div className="absolute -bottom-2 left-0 w-16 h-0.5 bg-gradient-to-r from-blue-600 to-purple-600"></div>
            </h3>
            <div className="grid md:grid-cols-3 gap-8">
              {projects.socialMedia.map((project, index) => (
                <div key={index} className={`bg-white rounded-xl p-6 hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 border-l-4 border-blue-500 hover:border-blue-600 animate-fade-in-up group relative overflow-hidden`} style={{animationDelay: `${index * 100}ms`}}>
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-2">{project.name}</h4>
                  <p className="text-gray-600 mb-4">{project.description}</p>
                  <a 
                    href={project.link} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 font-medium hover:scale-105 transition-all duration-300 relative z-10"
                  >
                    View Project <ExternalLink size={16} />
                  </a>
                </div>
              ))}
            </div>
          </div>

          {/* WordPress Projects */}
          <div className="mb-16">
            <h3 className="text-2xl font-bold text-gray-900 mb-8 animate-fade-in-up relative">
              WordPress Projects
              <div className="absolute -bottom-2 left-0 w-16 h-0.5 bg-gradient-to-r from-green-600 to-teal-600"></div>
            </h3>
            <div className="grid md:grid-cols-3 gap-8">
              {projects.wordpress.map((project, index) => (
                <div key={index} className={`bg-white rounded-xl p-6 hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 border-l-4 border-green-500 hover:border-green-600 animate-fade-in-up group relative overflow-hidden`} style={{animationDelay: `${index * 100}ms`}}>
                  <div className="absolute inset-0 bg-gradient-to-br from-green-50/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-2">{project.name}</h4>
                  <p className="text-gray-600 mb-4">{project.description}</p>
                  {project.link !== "#" ? (
                    <a 
                      href={project.link} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-green-600 hover:text-green-700 font-medium hover:scale-105 transition-all duration-300 relative z-10"
                    >
                      View Project <ExternalLink size={16} />
                    </a>
                  ) : (
                    <span className="text-gray-400">Client project</span>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* HTML & CSS Projects */}
          <div className="mb-16">
            <h3 className="text-2xl font-bold text-gray-900 mb-8 animate-fade-in-up relative">
              HTML & CSS Projects
              <div className="absolute -bottom-2 left-0 w-16 h-0.5 bg-gradient-to-r from-orange-600 to-red-600"></div>
            </h3>
            <div className="grid md:grid-cols-3 gap-8">
              {projects.htmlCss.map((project, index) => (
                <div key={index} className={`bg-white rounded-xl p-6 hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 border-l-4 border-orange-500 hover:border-orange-600 animate-fade-in-up group relative overflow-hidden`} style={{animationDelay: `${index * 100}ms`}}>
                  <div className="absolute inset-0 bg-gradient-to-br from-orange-50/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-2">{project.name}</h4>
                  <p className="text-gray-600 mb-4">{project.description}</p>
                  {project.link !== "#" ? (
                    <a 
                      href={project.link} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-orange-600 hover:text-orange-700 font-medium hover:scale-105 transition-all duration-300 relative z-10"
                    >
                      View Project <ExternalLink size={16} />
                    </a>
                  ) : (
                    <span className="text-gray-400">Client project</span>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Research Projects */}
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-8 animate-fade-in-up relative">
              Research & Academic Projects
              <div className="absolute -bottom-2 left-0 w-16 h-0.5 bg-gradient-to-r from-indigo-600 to-purple-600"></div>
            </h3>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white rounded-xl p-6 hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 border-l-4 border-indigo-500 hover:border-indigo-600 animate-fade-in-up group relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-indigo-50/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <h4 className="text-lg font-semibold text-gray-900 mb-2">Impact of Technology Adoption on Operational Efficiency</h4>
                <p className="text-gray-600 mb-2">Research project on business growth through technology</p>
                <span className="text-sm text-indigo-600 font-medium bg-indigo-100 px-3 py-1 rounded-full">Research Project</span>
              </div>
              <div className="bg-white rounded-xl p-6 hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 border-l-4 border-purple-500 hover:border-purple-600 animate-fade-in-up delay-100 group relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-purple-50/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <h4 className="text-lg font-semibold text-gray-900 mb-2">Financial Statement Analysis</h4>
                <p className="text-gray-600 mb-2">Ratio calculation of Ferozsons Pharma and Mectar Pharma</p>
                <span className="text-sm text-purple-600 font-medium bg-purple-100 px-3 py-1 rounded-full">Class Project</span>
              </div>
              <div className="bg-white rounded-xl p-6 hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 border-l-4 border-pink-500 hover:border-pink-600 animate-fade-in-up delay-200 group relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-pink-50/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <h4 className="text-lg font-semibold text-gray-900 mb-2">Finchartsphare Business Plan</h4>
                <p className="text-gray-600 mb-2">AI powered financial tracker all-in-one solution</p>
                <span className="text-sm text-pink-600 font-medium bg-pink-100 px-3 py-1 rounded-full">Class Project</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 text-white py-12 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/20 to-purple-900/20"></div>
        <div className="max-w-6xl mx-auto px-4 text-center relative z-10">
          <div className="mb-6">
            <h3 className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent mb-2">Aoun Danish</h3>
            <p className="text-gray-300">Web Developer & Digital Marketer</p>
          </div>
          <div className="border-t border-gray-700 pt-6">
            <p className="text-gray-400 hover:text-white transition-colors duration-300">© 2026 Aoun Danish. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
