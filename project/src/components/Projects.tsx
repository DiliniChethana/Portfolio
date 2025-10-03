import { useState, useEffect } from 'react';
import { Github, Eye, Shield, CheckSquare, BookOpen, Brain, Calculator, Snowflake } from 'lucide-react';

const Projects = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 200);
    return () => clearTimeout(timer);
  }, []);
  const projects = [
    {
      title: 'SecuVision App',
      description: 'AI-powered security application with advanced computer vision capabilities for threat detection and monitoring.',
      technologies: ['AI/ML', 'Python', 'Computer Vision', 'TensorFlow'],
      icon: Shield,
      color: 'from-red-500 to-pink-500',
      features: ['Real-time threat detection', 'AI-powered analytics', 'Security monitoring'],
      image: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      githubUrl: 'https://github.com/your-username/secuvision-app',
      liveUrl: '#'
    },
    {
      title: 'Task Manager',
      description: 'Comprehensive task management application with intuitive UI and powerful organization features.',
      technologies: ['React', 'Node.js', 'MongoDB', 'Express.js'],
      icon: CheckSquare,
      color: 'from-green-500 to-emerald-500',
      features: ['Task organization', 'Progress tracking', 'Team collaboration'],
      image: 'https://images.unsplash.com/photo-1611224923853-80b023f02d71?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      githubUrl: 'https://github.com/your-username/task-manager',
      liveUrl: '#'
    },
    {
      title: 'Library Management System',
      description: 'Full-featured library management system built with Java, handling book inventory and user management.',
      technologies: ['Java', 'MySQL', 'Swing', 'JDBC'],
      icon: BookOpen,
      color: 'from-blue-500 to-cyan-500',
      features: ['Book inventory', 'User management', 'Borrowing system'],
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      githubUrl: 'https://github.com/your-username/library-management-system',
      liveUrl: '#'
    },
    {
      title: 'Online Quiz Website',
      description: 'Interactive quiz platform with real-time scoring and comprehensive analytics for educators.',
      technologies: ['HTML/CSS', 'JavaScript', 'PHP', 'MySQL'],
      icon: Brain,
      color: 'from-purple-500 to-violet-500',
      features: ['Real-time scoring', 'Question bank', 'Analytics dashboard'],
      image: 'https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      githubUrl: 'https://github.com/your-username/online-quiz-website',
      liveUrl: '#'
    },
    {
      title: 'Tax Payment Website',
      description: 'Secure online tax payment portal with user-friendly interface and payment processing integration.',
      technologies: ['React', 'Node.js', 'Payment Gateway', 'Security'],
      icon: Calculator,
      color: 'from-orange-500 to-red-500',
      features: ['Secure payments', 'Tax calculations', 'Receipt generation'],
      image: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      githubUrl: 'https://github.com/your-username/tax-payment-website',
      liveUrl: '#'
    },
    {
      title: 'Fridge AI',
      description: 'Smart refrigerator management system using AI to track inventory and suggest recipes.',
      technologies: ['AI/ML', 'IoT', 'React', 'Python'],
      icon: Snowflake,
      color: 'from-cyan-500 to-blue-500',
      features: ['Inventory tracking', 'Recipe suggestions', 'Smart notifications'],
      image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      githubUrl: 'https://github.com/your-username/fridge-ai',
      liveUrl: '#'
    }
  ];

  return (
    <section id="projects" className="py-20 bg-slate-900">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">My Projects</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Here are some of the projects I've worked on, showcasing my skills in 
            software development, AI integration, and user experience design.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className={`bg-slate-800 rounded-xl overflow-hidden hover:transform hover:scale-105 transition-all duration-500 group shadow-lg hover:shadow-xl hover:shadow-blue-500/20 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
              style={{
                animationDelay: `${index * 0.2}s`,
                transition: 'all 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94)'
              }}
            >
              {/* Project Image */}
              <div className="relative overflow-hidden h-48 group-hover:h-52 transition-all duration-300">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500 filter group-hover:brightness-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity duration-300"></div>
                
                {/* Overlay on hover */}
                <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                
                <div className="absolute top-4 right-4 transform group-hover:scale-110 transition-transform duration-300">
                  <project.icon className="text-white bg-black/30 p-2 rounded-lg backdrop-blur-sm group-hover:bg-black/50" size={40} />
                </div>
                <div className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${project.color} group-hover:h-2 transition-all duration-300`}></div>
                
                {/* Animated corner decoration */}
                <div className="absolute top-0 left-0 w-0 h-0 border-l-[30px] border-l-transparent border-t-[30px] border-t-blue-500/30 group-hover:border-t-blue-500/60 transition-all duration-300"></div>
              </div>

              {/* Project Content */}
              <div className="p-6 group-hover:bg-slate-750 transition-colors duration-300">
                <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-blue-300 transition-colors duration-300">
                  {project.title}
                </h3>
                <p className="text-gray-400 mb-4 text-sm leading-relaxed group-hover:text-gray-300 transition-colors duration-300">
                  {project.description}
                </p>

                {/* Features */}
                <div className="mb-4">
                  <h4 className="text-blue-400 text-sm font-semibold mb-2 group-hover:text-blue-300 transition-colors duration-300">
                    Key Features:
                  </h4>
                  <ul className="space-y-1">
                    {project.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="text-gray-400 text-xs flex items-center group-hover:text-gray-300 transition-colors duration-300">
                        <div className="w-1 h-1 bg-blue-400 rounded-full mr-2 group-hover:bg-blue-300 transition-colors duration-300"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="bg-blue-600/20 text-blue-300 px-2 py-1 rounded text-xs group-hover:bg-blue-600/30 group-hover:text-blue-200 transition-all duration-300 hover:scale-105"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Action Buttons */}
                <div className="flex space-x-3">
                  <a
                    href={project.liveUrl}
                    className="flex items-center space-x-2 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg text-sm transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-blue-500/50 transform hover:-translate-y-1"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Eye size={16} />
                    <span>View Live</span>
                  </a>
                  <a
                    href={project.githubUrl}
                    className="flex items-center space-x-2 border border-gray-600 text-gray-300 hover:border-blue-400 hover:text-blue-400 hover:bg-blue-400/10 px-4 py-2 rounded-lg text-sm transition-all duration-300 hover:scale-105 hover:shadow-lg transform hover:-translate-y-1"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Github size={16} />
                    <span>GitHub</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;