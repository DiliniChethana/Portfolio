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
  image: '/projects/se.png',
  imageFit: 'contain',
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
  image: '/projects/farm.png',
  imageFit: 'contain',
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
      title: 'Tax Assessment System Sri Lanka (Group Project)',
      description: 'Collaborative web-based system for online identification and payment of assessment tax payers in Sri Lanka, featuring user registration, secure payments, and administrative functionalities.',
      technologies: ['HTML', 'CSS', 'PHP', 'Web Development', 'Database Integration'],
      icon: Brain,
      color: 'from-purple-500 to-violet-500',
      features: [
        'User registration and authentication',
        'Online tax payment processing',
        'Assessment tax calculation',
        'Digital payment integration',
        'Administrative dashboard',
        'Location-based services'
      ],
  image: '/projects/tax.png',
  imageFit: 'contain',
      githubUrl: 'https://github.com/MSCPerera/Group-Project',
      liveUrl: '#',
      detailedDescription: `The Tax Assessment System for Sri Lanka is a comprehensive web-based application developed as a collaborative group project to modernize the tax payment process. This system provides an online platform for Sri Lankan citizens to identify and pay their assessment taxes digitally, replacing traditional manual processes.

Key Features:
• Comprehensive user registration and authentication system
• Secure online tax payment processing with digital receipts
• Automated assessment tax calculation based on property values
• Integrated location services with interactive maps
• Administrative dashboard for tax officials and system management
• Multi-page application with responsive design
• Document management for tax-related circulars and notifications

Technical Implementation:
Built using core web technologies including HTML for structure, CSS for styling, and PHP for server-side processing. The system incorporates database integration for user data management and payment processing, ensuring secure and reliable operations for government tax collection.

Team Collaboration:
• 3-member development team including @DiliniChethana
• Collaborative development using Git version control
• Systematic documentation with multiple SRS versions
• Feature-based development with modular components
• 17+ commits showing active development and iteration

Project Impact:
This system demonstrates practical application of web development skills in creating government-level digital solutions, showcasing the ability to work on projects that serve public administration and citizen services in Sri Lanka.

Development Components:
• Home page with national branding and information
• User registration and sign-in functionality
• Password recovery and account management
• Online payment processing interface
• Interactive maps for location-based services
• Contact and support system integration`
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
  image: '/projects/fridge.png',
  imageFit: 'contain',
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
    },
    {
      title: 'Ceylon Flavors (Group Project)',
      description: 'Large-scale collaborative e-commerce website showcasing Sri Lankan cuisine and food products. A comprehensive web platform featuring product catalog, shopping cart, user authentication, and cultural food representation.',
      technologies: ['HTML', 'CSS', 'JavaScript', 'Web Development', 'E-commerce'],
      icon: Snowflake,
      color: 'from-green-500 to-teal-500',
      features: [
        'Product catalog and browsing',
        'Shopping cart functionality',
        'User registration and login',
        'Sri Lankan cuisine showcase',
        'Responsive web design',
        'Cultural food presentation'
      ],
      image: 'https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      githubUrl: 'https://github.com/BlockAce01/Ceylon-Flavors',
      liveUrl: '#',
      detailedDescription: `Ceylon Flavors is an ambitious group project representing Sri Lankan culinary heritage through a comprehensive e-commerce web platform. This large-scale collaborative effort involved 10 team members working together to create a complete online shopping experience focused on Ceylon (Sri Lankan) food products and cuisine.

Key Features:
• Comprehensive product catalog showcasing Sri Lankan food items
• Interactive shopping cart with add/remove functionality
• Complete user authentication system with registration and login
• About page highlighting Sri Lankan culinary culture and heritage
• Responsive design ensuring optimal experience across all devices
• Cultural representation of traditional Ceylon flavors and recipes
• Modern web interface with intuitive navigation and user experience

Technical Implementation:
Built using core web technologies with HTML providing the structural foundation, CSS handling the visual design and responsive layout, and JavaScript adding interactive functionality. The project demonstrates proficiency in frontend web development and collaborative coding practices.

Team Collaboration:
• 10-member collaborative development team including @DiliniChethana
• Extensive version control with 69+ commits showing active development
• Distributed development workflow with multiple contributors
• Feature-based development with modular page components
• GPL-2.0 open source license promoting collaborative development

Cultural Impact:
This project goes beyond technical implementation to celebrate Sri Lankan heritage, showcasing traditional Ceylon flavors and cuisine to a digital audience. It demonstrates the ability to combine technical skills with cultural awareness and representation.

Project Architecture:
• Home page (index.html) with featured products and navigation
• Product catalog (product.html) with detailed item listings
• Shopping cart (cart.html) with purchase management
• User authentication (login.html, signup.html) for account management
• About page highlighting cultural significance and company story
• Organized asset structure with dedicated CSS, JavaScript, and image directories

This project showcases expertise in large-scale collaborative development, frontend web technologies, e-commerce functionality, and cultural representation through digital platforms.`
    },
    {
      title: 'Pet Shop Website',
      description: 'Modern frontend web application for a pet shop business featuring responsive design, interactive user interface, and comprehensive pet product showcase. Built with core web technologies and Bootstrap framework.',
      technologies: ['HTML', 'CSS', 'JavaScript', 'Bootstrap', 'Frontend Development'],
      icon: Brain,
      color: 'from-pink-500 to-rose-500',
      features: [
        'Responsive web design',
        'Pet product catalog',
        'Interactive user interface',
        'Bootstrap styling framework',
        'Modern web standards',
        'Cross-browser compatibility'
      ],
      image: 'https://images.unsplash.com/photo-1548199973-03cce0bbc87b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      githubUrl: '#', // Add your GitHub repository URL here
      liveUrl: '#',
      detailedDescription: `The Pet Shop Website is a comprehensive frontend web application designed to showcase modern web development skills using core technologies. This project demonstrates proficiency in creating responsive, interactive web interfaces for business applications in the pet care industry.

Key Features:
• Fully responsive design ensuring optimal viewing across all devices and screen sizes
• Comprehensive pet product catalog with detailed item presentations
• Interactive user interface with smooth navigation and user-friendly experience
• Modern web standards implementation following best practices
• Cross-browser compatibility ensuring consistent performance
• Professional business presentation suitable for commercial use

Technical Implementation:
Built using fundamental web technologies with HTML providing semantic structure, CSS handling visual design and layout, and JavaScript adding dynamic functionality and interactivity. Bootstrap framework integration ensures responsive design and modern UI components, accelerating development while maintaining professional aesthetics.

Frontend Development Skills:
• Semantic HTML markup with accessibility considerations
• Advanced CSS styling with Flexbox and Grid layouts
• JavaScript DOM manipulation and event handling
• Bootstrap component integration and customization
• Responsive design principles and mobile-first approach
• Modern web development workflow and best practices

Design and User Experience:
• Clean, modern interface design focusing on user experience
• Intuitive navigation structure for easy product browsing
• Professional color scheme and typography choices
• Optimized loading performance and smooth interactions
• Business-focused layout suitable for commercial pet shop operations

Project Scope:
This frontend-focused project demonstrates the ability to create complete web interfaces without backend dependencies, showcasing skills in client-side development, responsive design, and modern web technologies. The pet shop theme provides a practical business context for demonstrating e-commerce-style frontend development.

Technical Highlights:
• Pure frontend implementation without server-side dependencies
• Bootstrap framework utilization for rapid, responsive development
• JavaScript functionality for enhanced user interactions
• Professional business website structure and presentation
• Modern CSS techniques and responsive design patterns`
    },
    {
      title: 'AI Music Recommendation System',
      description: 'Intelligent lyrics-based music recommendation system using machine learning algorithms. Built with Python, TF-IDF vectorization, and cosine similarity to provide personalized song suggestions based on lyrical content analysis.',
      technologies: ['Python', 'Machine Learning', 'TF-IDF', 'Streamlit', 'Jupyter Notebook', 'Data Science'],
      icon: Brain,
      color: 'from-purple-500 to-indigo-500',
      features: [
        'Lyrics-based content analysis',
        'TF-IDF vectorization',
        'Cosine similarity algorithm',
        'Interactive Streamlit interface',
        'Personalized recommendations',
        'Machine learning implementation'
      ],
      image: 'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      githubUrl: 'https://github.com/DiliniChethana/music-recommndation-AI',
      liveUrl: '#',
      detailedDescription: `The AI Music Recommendation System is an intelligent application that leverages machine learning techniques to provide personalized music recommendations based on lyrical content analysis. This project demonstrates expertise in data science, natural language processing, and web application development using modern Python frameworks.

Key Features:
• Advanced lyrics-based content analysis using natural language processing techniques
• TF-IDF (Term Frequency-Inverse Document Frequency) vectorization for text feature extraction
• Cosine similarity algorithm for measuring lyrical similarity between songs
• Interactive web interface built with Streamlit for seamless user experience
• Personalized recommendation engine that learns from user preferences
• Comprehensive data processing pipeline for music analysis

Technical Implementation:
The system utilizes Python as the core programming language with specialized libraries for machine learning and data analysis. TF-IDF vectorization transforms song lyrics into numerical representations, enabling the cosine similarity algorithm to calculate relationships between different songs based on their lyrical content.

Machine Learning Approach:
• Content-based filtering using lyrical analysis
• Feature extraction through TF-IDF vectorization techniques
• Similarity computation using cosine similarity metrics
• Recommendation ranking based on similarity scores
• Data preprocessing and text normalization for improved accuracy

Development Environment:
• Jupyter Notebook for data exploration and algorithm development
• Python libraries for machine learning and data manipulation
• Streamlit framework for creating interactive web applications
• Requirements.txt for dependency management and reproducible environments
• Structured source code organization for maintainability

Project Impact:
This project showcases the practical application of machine learning in the entertainment industry, demonstrating how AI can enhance user experiences through intelligent content recommendation. The lyrics-based approach provides a unique perspective on music similarity that goes beyond traditional genre or artist-based recommendations.

Technical Skills Demonstrated:
• Machine learning algorithm implementation and optimization
• Natural language processing for text analysis
• Data science workflow from data preprocessing to model deployment
• Web application development using modern Python frameworks
• Algorithm selection and performance evaluation
• Interactive user interface design for AI applications

This project represents a comprehensive application of AI/ML technologies in creating intelligent recommendation systems, showcasing proficiency in both theoretical machine learning concepts and practical implementation skills.`
    },
    {
      title: 'Currency Converter Application',
      description: 'Full-stack currency conversion web application with real-time exchange rates. Features client-server architecture, API integration, and responsive design for seamless international currency calculations.',
      technologies: ['JavaScript', 'HTML', 'CSS', 'Node.js', 'API Integration', 'Full-Stack'],
      icon: Calculator,
      color: 'from-green-500 to-emerald-500',
      features: [
        'Real-time exchange rates',
        'Multiple currency support',
        'Client-server architecture',
        'API integration',
        'Responsive web design',
        'Interactive user interface'
      ],
      image: 'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      githubUrl: 'https://github.com/DiliniChethana/currency-converter',
      liveUrl: '#',
      detailedDescription: `The Currency Converter Application is a comprehensive full-stack web solution designed to provide real-time currency conversion services. This project demonstrates proficiency in both frontend and backend development, API integration, and creating practical financial tools for global users.

Key Features:
• Real-time exchange rate fetching from external currency APIs
• Support for multiple international currencies with live rate updates
• Client-server architecture ensuring scalable and maintainable code structure
• Responsive web design optimized for desktop and mobile devices
• Interactive user interface with intuitive currency selection and conversion
• Error handling and validation for robust user experience

Technical Architecture:
The application follows a client-server model with separate frontend and backend components. The client directory contains the user interface built with HTML, CSS, and JavaScript, while the server directory houses the backend logic for API communication and data processing.

Frontend Implementation:
• Modern JavaScript for dynamic user interactions and DOM manipulation
• Responsive CSS design ensuring cross-device compatibility
• Clean HTML structure with semantic markup for accessibility
• User-friendly interface with dropdown currency selectors
• Real-time calculation updates and input validation

Backend Development:
• Node.js server implementation for handling client requests
• API integration with external currency exchange rate services
• Server-side validation and error handling mechanisms
• RESTful API design for frontend-backend communication
• Efficient data processing and response management

API Integration:
• Integration with reliable currency exchange rate APIs
• Real-time data fetching for accurate conversion rates
• Error handling for API failures and network issues
• Rate limiting and caching strategies for optimal performance
• Support for major global currencies and emerging markets

Development Skills Demonstrated:
• Full-stack web development with modern JavaScript
• RESTful API design and implementation
• Third-party API integration and data handling
• Responsive web design and cross-browser compatibility
• Client-server communication and data flow management
• Error handling and user experience optimization

Practical Applications:
This currency converter serves as a valuable tool for international travelers, businesses, and anyone requiring quick and accurate currency conversions. The application demonstrates the practical implementation of financial technology solutions with real-world utility.

Project Impact:
The Currency Converter showcases the ability to create complete web applications that solve real-world problems, demonstrating both technical expertise and practical application development skills in the financial technology domain.`
    },
    {
      title: 'AI-Powered Virtual Mouse',
      description: 'Innovative computer vision application that enables hands-free mouse control using AI and gesture recognition. Built with Python, this project demonstrates advanced computer vision techniques for human-computer interaction.',
      technologies: ['Python', 'Computer Vision', 'AI/ML', 'OpenCV', 'Hand Tracking', 'Gesture Recognition'],
      icon: Brain,
      color: 'from-blue-500 to-purple-500',
      features: [
        'Hand gesture recognition',
        'Real-time mouse control',
        'Computer vision processing',
        'AI-powered tracking',
        'Hands-free interaction',
        'Camera-based input system'
      ],
      image: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      githubUrl: 'https://github.com/DiliniChethana/AI-Powered-Virtual-Mouse',
      liveUrl: '#',
      detailedDescription: `The AI-Powered Virtual Mouse is an innovative computer vision application that revolutionizes human-computer interaction by enabling hands-free mouse control through advanced AI and gesture recognition technologies. This cutting-edge project demonstrates expertise in computer vision, machine learning, and human-computer interface development.

Key Features:
• Advanced hand gesture recognition using computer vision algorithms
• Real-time mouse cursor control through hand movements and gestures
• AI-powered hand tracking with high accuracy and responsiveness
• Camera-based input system eliminating the need for physical mouse hardware
• Gesture-based clicking and scrolling functionality
• Calibration system for different users and environments

Technical Implementation:
Built entirely in Python, this project leverages powerful computer vision libraries and machine learning frameworks to process live camera feed, detect hand landmarks, track hand movements, and translate gestures into precise mouse actions. The system operates in real-time with minimal latency for seamless user experience.

Computer Vision Technologies:
• OpenCV for real-time image processing and camera interface
• Hand landmark detection and tracking algorithms
• Gesture pattern recognition and classification
• Coordinate mapping from camera space to screen coordinates
• Motion smoothing and noise reduction for precise control
• Multi-frame analysis for gesture stability and accuracy

AI and Machine Learning:
• Hand pose estimation using pre-trained neural networks
• Gesture classification algorithms for different mouse actions
• Real-time inference optimization for smooth performance
• Adaptive learning for user-specific gesture patterns
• Computer vision model integration and optimization

Human-Computer Interaction:
• Intuitive gesture mapping for natural user interaction
• Customizable sensitivity settings for different user preferences
• Visual feedback system for gesture recognition status
• Error handling and recovery mechanisms for robust operation
• Accessibility features for users with mobility limitations

Innovation and Applications:
This project showcases the practical application of AI in creating assistive technology solutions. The virtual mouse system has potential applications in accessibility technology, touchless interfaces for hygiene-sensitive environments, presentation tools, and gaming interfaces.

Technical Challenges Addressed:
• Real-time performance optimization for smooth interaction
• Lighting condition adaptation and robustness
• Hand detection accuracy across different skin tones and conditions
• Gesture disambiguation and false positive reduction
• Coordinate calibration and screen mapping precision

Project Impact:
The AI-Powered Virtual Mouse demonstrates the intersection of artificial intelligence and practical problem-solving, showcasing how computer vision can enhance accessibility and create innovative interaction methods. This project highlights expertise in advanced AI applications and human-centered technology design.

Skills Demonstrated:
• Advanced computer vision programming and algorithm implementation
• Real-time AI system development and optimization
• Human-computer interaction design and user experience consideration
• Python programming for AI and computer vision applications
• Camera integration and image processing pipeline development
• Gesture recognition system architecture and implementation`
    },
    {
      title: 'Twitter Sentiment Analysis',
      description: 'Machine learning application for analyzing sentiment in Twitter data using natural language processing techniques. Built with Python to classify tweet emotions and provide insights into public opinion trends.',
      technologies: ['Python', 'Machine Learning', 'NLP', 'Data Science', 'Pandas', 'Scikit-learn'],
      icon: Brain,
      color: 'from-blue-400 to-cyan-500',
      features: [
        'Tweet sentiment classification',
        'Natural language processing',
        'Machine learning models',
        'Data visualization',
        'Social media analytics',
        'Real-time sentiment tracking'
      ],
      image: 'https://images.unsplash.com/photo-1611605698335-8b1569810432?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      githubUrl: 'https://github.com/DiliniChethana/Twitter_sentiment',
      liveUrl: '#',
      detailedDescription: `The Twitter Sentiment Analysis project is a comprehensive machine learning application designed to analyze and classify emotions in Twitter data. This project demonstrates expertise in natural language processing, data science, and social media analytics, providing valuable insights into public opinion and sentiment trends.

Key Features:
• Advanced sentiment classification using machine learning algorithms
• Natural language processing for text preprocessing and feature extraction
• Real-time tweet analysis and sentiment scoring
• Data visualization dashboards for sentiment trend analysis
• Social media analytics with statistical insights
• Multi-class emotion detection (positive, negative, neutral)

Technical Implementation:
Built using Python with specialized libraries for machine learning and natural language processing. The system processes Twitter data, performs text preprocessing, extracts meaningful features, and applies trained models to classify sentiments with high accuracy.

Machine Learning Approach:
• Text preprocessing including tokenization, stemming, and stop word removal
• Feature extraction using TF-IDF vectorization and n-gram analysis
• Classification algorithms including Support Vector Machines and Naive Bayes
• Model training and validation with cross-validation techniques
• Performance evaluation using accuracy, precision, and recall metrics

Natural Language Processing:
• Text cleaning and normalization for social media content
• Handling of Twitter-specific elements (hashtags, mentions, URLs)
• Sentiment lexicon integration for enhanced accuracy
• Language detection and processing capabilities
• Emoji and emoticon analysis for sentiment indicators

Data Science Workflow:
• Data collection and preprocessing pipeline development
• Exploratory data analysis and visualization
• Feature engineering and selection for optimal model performance
• Statistical analysis of sentiment distributions and trends
• Data visualization using matplotlib and seaborn libraries

Social Media Analytics:
• Trend analysis for public opinion monitoring
• Temporal sentiment analysis showing opinion changes over time
• Topic-based sentiment classification for specific subjects
• Hashtag and keyword sentiment tracking
• Geographic sentiment analysis capabilities

Technical Skills Demonstrated:
• Advanced Python programming for data science applications
• Machine learning model development and optimization
• Natural language processing and text analytics
• Data visualization and statistical analysis
• Social media data handling and API integration
• Model evaluation and performance optimization

Project Applications:
This sentiment analysis tool has practical applications in brand monitoring, market research, political opinion tracking, customer feedback analysis, and social media marketing strategy development.

Innovation and Impact:
The project showcases the practical application of AI in understanding human emotions and opinions expressed through social media, demonstrating how machine learning can provide valuable insights into public sentiment and social trends.

Development Components:
• Data collection and preprocessing modules
• Feature extraction and text processing pipelines
• Machine learning model training and evaluation scripts
• Visualization and analytics dashboard components
• Real-time sentiment monitoring capabilities
• Statistical analysis and reporting functionality`
    },
    {
      title: 'BinGo - Garbage Management System (Ongoing Project)',
      description: 'Innovative waste management mobile application developed for Malimbada Regional Office to streamline garbage collection operations. Built with Flutter for cross-platform deployment, featuring route optimization and collection tracking.',
      technologies: ['Flutter', 'Dart', 'Mobile Development', 'Cross-Platform', 'Government Software'],
      icon: Snowflake,
      color: 'from-green-600 to-emerald-600',
      features: [
        'Garbage collection scheduling',
        'Route optimization for collectors',
        'Real-time tracking system',
        'Regional office integration',
        'Cross-platform mobile app',
        'Administrative dashboard'
      ],
      image: 'https://images.unsplash.com/photo-1532996122724-e3c354a0b15b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      githubUrl: 'https://github.com/InduwaraSH/BinGo',
      liveUrl: '#',
      detailedDescription: `BinGo is an innovative garbage management system currently in development for the Malimbada Regional Office. This comprehensive mobile application aims to revolutionize waste collection operations through digital transformation, improving efficiency and service delivery for the local community.

Project Overview:
• Government-commissioned software solution for regional waste management
• Cross-platform mobile application built with Flutter framework
• Real-world application serving Malimbada Regional Office operations
• Collaborative development project with practical community impact
• Ongoing development with iterative improvement and feature additions

Key Features in Development:
• Comprehensive garbage collection scheduling and route management
• Real-time tracking system for collection vehicles and personnel
• Route optimization algorithms to improve collection efficiency
• Administrative dashboard for regional office management and oversight
• Community reporting features for waste collection requests
• Data analytics for waste management insights and operational improvements

Technical Implementation:
Built using Flutter framework enabling deployment across multiple platforms including Android, iOS, and web interfaces. The application architecture supports scalable development with native performance across different operating systems and devices.

Cross-Platform Development:
• Flutter framework for unified codebase across platforms
• Native Android and iOS application deployment
• Web interface for administrative access and management
• Desktop support for Linux, macOS, and Windows environments
• Responsive design ensuring optimal user experience across devices

Government Software Development:
• Compliance with government software standards and requirements
• Security implementation for handling municipal data and operations
• Integration capabilities with existing regional office systems
• User role management for different levels of access and functionality
• Data privacy and security measures for citizen information protection

Project Status and Development:
Currently in active development phase with foundational architecture established. The project follows agile development methodology with regular iterations and feature additions based on regional office requirements and user feedback.

Community Impact:
• Improved waste collection efficiency for Malimbada region residents
• Digital transformation of municipal services and operations
• Enhanced service delivery through technology integration
• Environmental impact through optimized collection routes and scheduling
• Modernization of regional office administrative processes

Technology Stack:
• Dart programming language for application logic and user interface
• C++ and CMake for platform-specific native integrations
• Swift for iOS-specific features and optimizations
• HTML for web interface components and administrative panels
• Cross-platform deployment ensuring broad accessibility and usage

Collaboration and Development:
• Multi-developer project with collaborative development workflow
• Government stakeholder engagement and requirement gathering
• Community feedback integration for user-centered design
• Iterative development with regular testing and validation phases

This project demonstrates expertise in mobile application development, government software solutions, and practical technology implementation for community service improvement.`
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
              <div className={`relative overflow-hidden ${project.imageFit === 'contain' ? 'h-64 bg-slate-900 flex items-center justify-center' : 'h-48 group-hover:h-52'} transition-all duration-300`}>
                <img
                  src={project.image}
                  alt={project.title}
                  className={`w-full h-full ${project.imageFit === 'contain' ? 'object-contain max-h-full' : 'object-cover group-hover:scale-110'} transition-transform duration-500 filter group-hover:brightness-110`}
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