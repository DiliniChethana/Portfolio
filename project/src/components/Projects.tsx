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
      id: 1,
      title: "SecuVision - Advanced Security Monitoring System (Group Project)",
      description: "A collaborative team project developing a comprehensive security monitoring application with real-time surveillance, intelligent threat detection, and centralized security management. Built with cutting-edge technology through coordinated team development.",
      technologies: ['AI/ML', 'Python', 'Computer Vision', 'TensorFlow', 'OpenCV'],
      icon: Shield,
      color: 'from-red-500 to-pink-500',
      features: [
        'Real-time threat detection using AI',
        'Advanced computer vision analytics', 
        'Automated security monitoring',
        'Alert notification system',
        'User-friendly dashboard interface'
      ],
      image: '/projects/secuvision-logo.jpeg',
      githubUrl: 'https://github.com/Amhar-code/SecuVision',
      liveUrl: '#',
      detailedDescription: `SecuVision is an innovative AI-powered security application developed as a collaborative team project. This comprehensive security monitoring solution leverages advanced computer vision technology to provide real-time threat detection and monitoring capabilities. Through coordinated team development, we built an application that utilizes machine learning algorithms to identify potential security threats in real-time, making it an essential tool for modern security systems.

Key Features:
• Real-time video analysis and threat detection
• AI-powered object recognition and classification
• Automated alert system for suspicious activities
• Comprehensive security dashboard with analytics
• Multi-camera support and monitoring
• Customizable security parameters and settings

Technical Implementation:
The application is built using Python with TensorFlow and OpenCV for computer vision capabilities. Our team incorporated deep learning models trained on security-related datasets to ensure accurate threat detection while minimizing false positives. This project demonstrates strong collaborative development skills, version control management, and coordinated team programming.

Team Collaboration:
• Agile development methodology with sprint planning
• Git workflow with feature branches and code reviews
• Distributed development with role specialization
• Coordinated testing and quality assurance processes`
    },
    {
      title: 'Farm Management System SUSL (Group Project)',
      description: 'A collaborative university project developing a comprehensive farm management system for Sabaragamuwa University of Sri Lanka. Built with Laravel framework featuring advanced agricultural management tools, reporting dashboards, and data analytics.',
      technologies: ['Laravel', 'PHP', 'Blade', 'JavaScript', 'MySQL', 'Bootstrap', 'CSS'],
      icon: CheckSquare,
      color: 'from-green-500 to-emerald-500',
      features: [
        'Medicine management and reporting',
        'Dashboard with analytics',
        'PDF/Word export functionality',
        'Inventory management system',
        'User role management',
        'Comprehensive reporting system'
      ],
      image: 'https://images.unsplash.com/photo-1625246333195-78d9c38ad449?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      githubUrl: 'https://github.com/sajithcode/farm-management-system-susl',
      liveUrl: '#',
      detailedDescription: `The Farm Management System SUSL is a comprehensive web-based application developed as a collaborative university project for Sabaragamuwa University of Sri Lanka. Built using the Laravel PHP framework, this system modernizes agricultural management through digital solutions, providing farmers and agricultural administrators with powerful tools to optimize their operations.

Key Features:
• Advanced medicine management with detailed usage tracking
• Interactive dashboard with comprehensive analytics
• PDF and Word document export capabilities for reports
• Real-time inventory tracking and management
• Multi-user role management system
• Detailed reporting and data visualization
• Medicine report generation with usage summaries

Technical Implementation:
Built using Laravel PHP framework with Blade templating engine for the frontend, MySQL for robust data storage, and Bootstrap for responsive design. The system incorporates modern web development practices and follows MVC architecture patterns for maintainable code structure.

Team Collaboration:
• 4-member collaborative development team
• Active GitHub repository with 36+ commits
• Feature branch development workflow
• Code review processes and merge requests
• Distributed development with role specialization
• University-level project management and coordination

Recent Enhancements:
• Enhanced medicine report functionality with detailed usage summaries
• Improved dashboard card rendering and data visualization
• PDF/Word export features for comprehensive reporting
• Code refactoring for improved readability and maintainability

This project demonstrates practical application of full-stack web development skills using enterprise-level frameworks, showcasing the ability to work on domain-specific solutions that benefit the agricultural community and university research initiatives.`
    },
    {
      title: 'Library Management System',
      description: 'Full-featured library management system built with Java, handling book inventory and user management.',
      technologies: ['Java', 'MySQL', 'Swing', 'JDBC'],
      icon: BookOpen,
      color: 'from-blue-500 to-cyan-500',
      features: ['Book inventory', 'User management', 'Borrowing system'],
      image: 'https://images.unsplash.com/photo-1481627834876-b7833e8f5570?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
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
      title: 'Car Rental System',
      description: 'Comprehensive car rental management system with React frontend and Java backend, featuring vehicle management, booking system, and customer administration.',
      technologies: ['React', 'JavaScript', 'Java', 'Backend API', 'Database Management'],
      icon: Calculator,
      color: 'from-orange-500 to-red-500',
      features: [
        'Vehicle inventory management',
        'Customer booking system',
        'Rental tracking and billing',
        'User authentication',
        'Admin dashboard',
        'Full-stack architecture'
      ],
      image: 'https://images.unsplash.com/photo-1449824913935-59a10b8d2000?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      githubUrl: 'https://github.com/DiliniChethana/car-rental-frontend',
      liveUrl: '#',
      detailedDescription: `The Car Rental System is a full-stack web application designed to streamline vehicle rental operations. This comprehensive solution features a modern React frontend for user interactions and a robust Java backend for business logic and data management.

Key Features:
• Complete vehicle inventory management with detailed car information
• Customer registration and authentication system
• Comprehensive booking and reservation management
• Real-time availability tracking and scheduling
• Automated billing and payment processing
• Admin dashboard for fleet and customer management
• Responsive design for desktop and mobile access

Technical Architecture:
The system follows a client-server architecture with a React-based frontend providing an intuitive user interface and a Java backend handling business logic, data processing, and database operations. The separation of concerns ensures scalability and maintainability.

Frontend Features:
• Modern React application with component-based architecture
• Responsive design for optimal user experience
• Interactive booking interface with real-time availability
• Customer profile management and booking history
• Admin interface for system management

Backend Features:
• Java-based server application with RESTful API design
• Comprehensive data models for vehicles, customers, and bookings
• Secure authentication and authorization mechanisms
• Database integration for persistent data storage
• Business logic implementation for rental operations

This project demonstrates proficiency in full-stack development, showcasing skills in both frontend and backend technologies, database design, and system architecture planning.`
    },
    {
      title: 'Fridge AI (Ongoing Project)',
      description: 'Currently developing an intelligent refrigerator management system using AI and computer vision technology to track food inventory automatically and provide personalized recipe recommendations based on available ingredients.',
      technologies: ['AI/ML', 'React', 'Python', 'Computer Vision', 'TensorFlow', 'Node.js'],
      icon: Snowflake,
      color: 'from-cyan-500 to-blue-500',
      features: [
        'AI-powered inventory tracking',
        'Smart recipe recommendations',
        'Expiration date monitoring',
        'Computer vision food recognition',
        'Mobile app integration',
        'Smart shopping list generation'
      ],
      image: 'https://images.unsplash.com/photo-1506368249639-73a05d6f6488?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      githubUrl: '#', // Repository will be available upon completion
      liveUrl: '#',
      detailedDescription: `Fridge AI is an innovative ongoing project that aims to transform traditional refrigerator management through artificial intelligence and computer vision. This smart system will automatically track food inventory, monitor expiration dates, and provide intelligent recipe suggestions based on available ingredients.

Key Features in Development:
• Computer vision-based food recognition and categorization
• Real-time inventory tracking with automatic updates
• AI-powered recipe recommendations using available ingredients
• Smart expiration date monitoring with timely notifications
• Integration with mobile applications for remote monitoring
• Automated shopping list generation based on consumption patterns
• Nutritional analysis and meal planning suggestions

Technical Implementation:
The system combines computer vision using TensorFlow for food recognition, React-based user interface for seamless interaction, and Python backend for AI processing and data management. Node.js handles API development and real-time data processing.

Project Status:
Currently in active development phase, focusing on computer vision algorithms for accurate food recognition and building the core AI recommendation engine. This project represents cutting-edge application of AI in everyday life, demonstrating innovation in smart food management technology.

Innovation Goals:
• Reduce food waste through intelligent monitoring
• Simplify meal planning with AI-driven suggestions
• Create seamless integration between AI and user experience
• Develop scalable AI solutions for smart home applications`
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