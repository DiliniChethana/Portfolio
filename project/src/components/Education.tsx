import { useState } from 'react';
import { GraduationCap, Calendar, MapPin, BookOpen, FileText, Eye, X } from 'lucide-react';

const Education = () => {
  const [selectedCertificate, setSelectedCertificate] = useState<null | {
    title: string;
    issuer: string;
    date: string;
    type: string;
    image: string;
    certificateFile: string;
  }>(null);
  const certificates = [
    {
      title: 'Introduction to Artificial Intelligence',
      issuer: 'Alison',
      date: '2024',
      type: 'AI/ML',
      image: '/certificates/alison.png',
      certificateFile: '/certificates/Alison_Certificate-7285-46891289.pdf'
    },
    {
      title: 'IT Essentials',
      issuer: 'Cisco Networking Academy',
      date: '2024',
      type: 'IT Fundamentals',
      image: '/certificates/IT essential.png',
      certificateFile: '/certificates/IT_Essentials_certificate_dilinichethi2-gmail-com_5da0ce99-c83d-48a8-a71d-47c2280fec72.pdf'
    }
  ];

  const coursework = [
    'Software Engineering',
    'Database Management Systems',
    'Web Development',
    'Artificial Intelligence',
    'Human-Computer Interaction',
    'System Analysis & Design',
    'Data Structures & Algorithms',
    'Mobile Application Development'
  ];

  return (
    <section id="education" className="py-20 bg-slate-800">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">Education</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            My academic journey and the knowledge foundation that drives my passion for technology.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {/* School Education Card */}
          <div className="bg-gradient-to-r from-green-600/20 to-teal-600/20 rounded-2xl p-8 mb-12 border border-green-500/30">
            <div className="flex flex-col lg:flex-row items-start lg:items-center gap-6">
              <div className="bg-green-600/30 p-4 rounded-full">
                <GraduationCap className="text-green-400" size={48} />
              </div>
              
              <div className="flex-1">
                <h3 className="text-2xl font-bold text-white mb-2">
                  General Certificate of Education (A/L & O/L)
                </h3>
                <h4 className="text-xl text-green-400 mb-4">
                  St. Anthony's Girls' College, Kandy
                </h4>
                
                <div className="flex flex-col sm:flex-row gap-4 mb-4">
                  <div className="flex items-center text-gray-300">
                    <Calendar className="mr-2" size={16} />
                    <span>2007 - 2021</span>
                  </div>
                  <div className="flex items-center text-gray-300">
                    <MapPin className="mr-2" size={16} />
                    <span>Kandy, Sri Lanka</span>
                  </div>
                </div>
                
                <p className="text-gray-400 leading-relaxed">
                  Completed primary and secondary education with a strong foundation in academics. 
                  Developed essential skills in critical thinking, communication, and problem-solving 
                  that have been instrumental in my higher education journey.
                </p>
              </div>
            </div>
          </div>

          {/* University Education Card */}
          <div className="bg-gradient-to-r from-blue-600/20 to-purple-600/20 rounded-2xl p-8 mb-12 border border-blue-500/30">
            <div className="flex flex-col lg:flex-row items-start lg:items-center gap-6">
              <div className="bg-blue-600/30 p-4 rounded-full">
                <GraduationCap className="text-blue-400" size={48} />
              </div>
              
              <div className="flex-1">
                <h3 className="text-2xl font-bold text-white mb-2">
                  BSc (Hons) in Computing and Information Systems
                </h3>
                <h4 className="text-xl text-blue-400 mb-4">
                  Sabaragamuwa University of Sri Lanka
                </h4>
                
                <div className="flex flex-col sm:flex-row gap-4 mb-4">
                  <div className="flex items-center text-gray-300">
                    <Calendar className="mr-2" size={16} />
                    <span>2021 - Present</span>
                  </div>
                  <div className="flex items-center text-gray-300">
                    <MapPin className="mr-2" size={16} />
                    <span>Belihuloya, Sri Lanka</span>
                  </div>
                </div>
                
                <p className="text-gray-400 leading-relaxed">
                  Currently pursuing my undergraduate degree with a focus on software development, 
                  system analysis, and information technology. Gaining comprehensive knowledge in 
                  modern computing technologies and their practical applications.
                </p>
              </div>
            </div>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {/* Relevant Coursework */}
            <div className="bg-slate-700/50 rounded-xl p-6">
              <div className="flex items-center mb-6">
                <BookOpen className="text-blue-400 mr-3" size={24} />
                <h3 className="text-xl font-semibold text-white">Relevant Coursework</h3>
              </div>
              
              <div className="grid grid-cols-1 gap-3">
                {coursework.map((course, index) => (
                  <div
                    key={index}
                    className="bg-slate-600/50 p-3 rounded-lg text-gray-300 hover:bg-slate-600/70 transition-colors duration-300"
                  >
                    <div className="flex items-center">
                      <div className="w-2 h-2 bg-blue-400 rounded-full mr-3"></div>
                      {course}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Certificates */}
            <div className="bg-slate-700/50 rounded-xl p-6">
              <div className="flex items-center mb-6">
                <FileText className="text-blue-400 mr-3" size={24} />
                <h3 className="text-xl font-semibold text-white">Certificates Obtained</h3>
              </div>
              
              <div className="space-y-4">
                {certificates.map((certificate, index) => (
                  <div
                    key={index}
                    className="flex items-start gap-4 p-4 bg-blue-500/10 rounded-lg border-l-4 border-blue-400 hover:bg-blue-500/15 transition-all duration-300 group"
                  >
                    {/* Certificate Image */}
                    <div className="flex-shrink-0">
                      <div className="w-20 h-16 rounded-lg overflow-hidden bg-slate-600 group-hover:scale-105 transition-transform duration-300">
                        <img
                          src={certificate.image}
                          alt={certificate.title}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <button 
                        className="mt-2 flex items-center justify-center w-20 px-2 py-1 bg-blue-600/20 text-blue-300 rounded text-xs hover:bg-blue-600/30 transition-colors duration-300"
                        onClick={() => setSelectedCertificate(certificate)}
                      >
                        <Eye size={12} className="mr-1" />
                        View
                      </button>
                    </div>
                    
                    {/* Certificate Info */}
                    <div className="flex-1">
                      <h4 className="text-white font-semibold mb-1">{certificate.title}</h4>
                      <p className="text-gray-400 text-sm mb-2">{certificate.issuer}</p>
                      <div className="flex items-center gap-2">
                        <span className="inline-block bg-blue-600/20 text-blue-300 px-2 py-1 rounded text-xs">
                          {certificate.type}
                        </span>
                        <span className="text-gray-300 text-xs">{certificate.date}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* GPA Section */}
              <div className="mt-6 p-4 bg-blue-600/20 rounded-lg border border-blue-500/30">
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-400 mb-1">3.56</div>
                  <div className="text-gray-300 text-sm">Current GPA</div>
                </div>
              </div>
            </div>
          </div>

          {/* Additional Info */}
          <div className="mt-8 bg-slate-700/30 rounded-xl p-6">
            <h3 className="text-lg font-semibold text-white mb-4">Academic Focus</h3>
            <p className="text-gray-400 leading-relaxed">
              My studies have provided me with a strong foundation in both theoretical concepts and 
              practical applications of information systems. I've particularly excelled in software 
              development, database design, and user interface development. Through various projects 
              and coursework, I've developed expertise in multiple programming languages and 
              frameworks, preparing me for a successful career in technology.
            </p>
          </div>
        </div>

        {/* Certificate Modal */}
        {selectedCertificate && (
          <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4">
            <div className="bg-slate-800 rounded-xl max-w-4xl w-full max-h-[90vh] overflow-auto">
              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-xl font-semibold text-white">{selectedCertificate.title}</h3>
                  <button
                    onClick={() => setSelectedCertificate(null)}
                    className="text-gray-400 hover:text-white transition-colors duration-300"
                  >
                    <X size={24} />
                  </button>
                </div>
                
                <div className="mb-4">
                  {/* PDF Viewer */}
                  <div className="w-full h-96 bg-white rounded-lg overflow-hidden">
                    <iframe
                      src={selectedCertificate.certificateFile}
                      className="w-full h-full"
                      title={selectedCertificate.title}
                    />
                  </div>
                </div>
                
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div>
                    <span className="text-gray-400">Issuer:</span>
                    <p className="text-white font-semibold">{selectedCertificate.issuer}</p>
                  </div>
                  <div>
                    <span className="text-gray-400">Date:</span>
                    <p className="text-white font-semibold">{selectedCertificate.date}</p>
                  </div>
                  <div>
                    <span className="text-gray-400">Type:</span>
                    <p className="text-white font-semibold">{selectedCertificate.type}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Education;
