import React, { useState, useEffect } from 'react';
import { Github, Linkedin, Mail, Download, Code, Palette, Brain, Laptop, TestTube, BookOpen, Database } from 'lucide-react';

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Trigger animations after component mounts
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
      <div className="container mx-auto px-6 py-20">
        <div className="flex flex-col lg:flex-row items-center justify-between">
          {/* Profile Image */}
          <div className={`lg:w-1/2 mb-10 lg:mb-0 transition-all duration-1000 ${isVisible ? 'animate-slide-in-left' : 'opacity-0 -translate-x-full'}`}>
            <div className="relative">
              <div className={`w-80 h-80 mx-auto rounded-full overflow-hidden border-4 border-blue-400/30 shadow-2xl transition-all duration-1200 ${isVisible ? 'animate-bounce-in' : 'scale-0 opacity-0'}`}>
                <img
                  src="/WhatsApp Image 2025-03-25 at 20.42.18_3f941472 copy.jpg"
                  alt="Dilini Chethana"
                  className="w-full h-full object-cover object-center filter brightness-110 contrast-110 saturate-110 hover:scale-110 transition-all duration-500"
                  loading="eager"
                  fetchPriority="high"
                  style={{ 
                    imageRendering: 'crisp-edges' as any,
                    WebkitImageRendering: 'crisp-edges' as any,
                    imageResolution: 'from-image' as any
                  } as React.CSSProperties}
                />
              </div>
              <div className={`absolute -top-4 -right-4 w-20 h-20 bg-blue-500/20 rounded-full blur-xl animate-float ${isVisible ? 'opacity-100' : 'opacity-0'}`}></div>
              <div className={`absolute -bottom-4 -left-4 w-16 h-16 bg-purple-500/20 rounded-full blur-xl animate-float ${isVisible ? 'opacity-100' : 'opacity-0'}`} style={{animationDelay: '1s'}}></div>
            </div>
          </div>

          {/* Content */}
          <div className={`lg:w-1/2 text-center lg:text-left transition-all duration-1000 ${isVisible ? 'animate-slide-in-right' : 'opacity-0 translate-x-full'}`}>
            <h1 className={`text-5xl lg:text-6xl font-bold text-white mb-4 transition-all duration-1000 ${isVisible ? 'animate-slide-up' : 'opacity-0 translate-y-8'}`} style={{animationDelay: '0.3s'}}>
              Hi, I'm <span className="text-blue-400 animate-pulse">Dilini</span>
            </h1>
            <div className="relative mb-6">
              <h2 className={`text-2xl lg:text-3xl text-gray-300 transition-all duration-1000 ${isVisible ? 'animate-slide-up' : 'opacity-0 translate-y-8'}`} style={{animationDelay: '0.6s'}}>
                <span className="inline-block">Software Developer</span>
                <span className="text-blue-400 mx-2">&</span>
                <span className="inline-block">UI/UX Designer</span>
              </h2>
              {/* Typing cursor effect */}
              <span className={`absolute text-blue-400 text-3xl animate-pulse ${isVisible ? 'opacity-100' : 'opacity-0'}`} style={{animationDelay: '1.2s'}}>|</span>
            </div>
            <p className={`text-lg text-gray-400 mb-8 max-w-2xl transition-all duration-1000 ${isVisible ? 'animate-fade-in' : 'opacity-0'}`} style={{animationDelay: '0.9s'}}>
              Passionate about creating innovative solutions and beautiful user experiences. 
              Currently pursuing BSc (Hons) in Information Systems at Sabaragamuwa University of Sri Lanka.
            </p>

            {/* Skills Tags */}
            <div className={`flex flex-wrap justify-center lg:justify-start gap-3 mb-8 transition-all duration-1000 ${isVisible ? 'animate-slide-up' : 'opacity-0 translate-y-8'}`} style={{animationDelay: '1.2s'}}>
              <span 
                className={`flex items-center space-x-2 bg-blue-600/20 text-blue-300 px-4 py-2 rounded-full hover:bg-blue-600/30 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-blue-500/25 cursor-pointer transform hover:-translate-y-1 ${isVisible ? 'animate-bounce-in' : 'opacity-0'}`}
                style={{animationDelay: '1.4s'}}
              >
                <Code size={16} className="animate-pulse-slow" />
                <span>Software Development</span>
              </span>
              <span 
                className={`flex items-center space-x-2 bg-purple-600/20 text-purple-300 px-4 py-2 rounded-full hover:bg-purple-600/30 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-purple-500/25 cursor-pointer transform hover:-translate-y-1 ${isVisible ? 'animate-bounce-in' : 'opacity-0'}`}
                style={{animationDelay: '1.6s'}}
              >
                <Palette size={16} className="hover:animate-wiggle" />
                <span>UI/UX Design</span>
              </span>
              <span 
                className={`flex items-center space-x-2 bg-green-600/20 text-green-300 px-4 py-2 rounded-full hover:bg-green-600/30 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-green-500/25 cursor-pointer hover:rotate-2 transform hover:-translate-y-1 ${isVisible ? 'animate-bounce-in' : 'opacity-0'}`}
                style={{animationDelay: '1.8s'}}
              >
                <Brain size={16} className="hover:animate-pulse" />
                <span>AI & ML Development</span>
              </span>
              <span 
                className={`flex items-center space-x-2 bg-orange-600/20 text-orange-300 px-4 py-2 rounded-full hover:bg-orange-600/30 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-orange-500/25 cursor-pointer transform hover:-translate-y-1 ${isVisible ? 'animate-bounce-in' : 'opacity-0'}`}
                style={{animationDelay: '2.0s'}}
              >
                <BookOpen size={16} className="hover:animate-bounce" />
                <span>Jupyter & Colab</span>
              </span>
              <span 
                className={`flex items-center space-x-2 bg-red-600/20 text-red-300 px-4 py-2 rounded-full hover:bg-red-600/30 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-red-500/25 cursor-pointer transform hover:-translate-y-1 ${isVisible ? 'animate-bounce-in' : 'opacity-0'}`}
                style={{animationDelay: '2.2s'}}
              >
                <TestTube size={16} className="hover:animate-spin" />
                <span>API Testing (Postman)</span>
              </span>
              <span 
                className={`flex items-center space-x-2 bg-teal-600/20 text-teal-300 px-4 py-2 rounded-full hover:bg-teal-600/30 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-teal-500/25 cursor-pointer transform hover:-translate-y-1 ${isVisible ? 'animate-bounce-in' : 'opacity-0'}`}
                style={{animationDelay: '2.4s'}}
              >
                <Database size={16} className="hover:animate-pulse" />
                <span>Data Analysis</span>
              </span>
            </div>

            {/* Action Buttons */}
            <div className={`flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-8 transition-all duration-1000 ${isVisible ? 'animate-slide-up' : 'opacity-0 translate-y-8'}`} style={{animationDelay: '1.5s'}}>
              <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg transition-all duration-300 flex items-center justify-center space-x-2 hover:scale-105 hover:shadow-lg hover:shadow-blue-500/25">
                <Download size={20} />
                <span>Download CV</span>
              </button>
              <a
                href="#contact"
                className="border border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-white px-8 py-3 rounded-lg transition-all duration-300 flex items-center justify-center space-x-2 hover:scale-105 hover:shadow-lg hover:shadow-blue-500/25"
              >
                <Mail size={20} />
                <span>Get In Touch</span>
              </a>
            </div>

            {/* Social Links */}
            <div className={`flex justify-center lg:justify-start space-x-6 transition-all duration-1000 ${isVisible ? 'animate-fade-in' : 'opacity-0'}`} style={{animationDelay: '1.8s'}}>
              <a
                href="#"
                className="text-gray-400 hover:text-blue-400 transition-all duration-300 hover:scale-125 hover:-translate-y-1"
              >
                <Github size={24} />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-blue-400 transition-all duration-300 hover:scale-125 hover:-translate-y-1"
              >
                <Linkedin size={24} />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-blue-400 transition-all duration-300 hover:scale-125 hover:-translate-y-1"
              >
                <Mail size={24} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;