import React, { useState, useEffect } from 'react';
import { Mail, Phone, MapPin, Send, Github, Linkedin, MessageSquare, CheckCircle, AlertTriangle, Copy } from 'lucide-react';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [submitStatus, setSubmitStatus] = useState({
    isSubmitting: false,
    isSuccess: false,
    isError: false,
    message: ''
  });

  // Initialize EmailJS
  useEffect(() => {
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY || 'O1q7734mCiMhNH2vu';
    emailjs.init(publicKey);
    console.log('EmailJS initialized with public key:', publicKey);
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validation
    if (!formData.name || !formData.email || !formData.subject || !formData.message) {
      setSubmitStatus({
        isSubmitting: false,
        isSuccess: false,
        isError: true,
        message: 'Please fill in all fields before sending.'
      });
      return;
    }
    
    // Reset status
    setSubmitStatus({ isSubmitting: true, isSuccess: false, isError: false, message: '' });
    
    try {
      // Initialize EmailJS
      emailjs.init(import.meta.env.VITE_EMAILJS_PUBLIC_KEY || 'O1q7734mCiMhNH2vu');
      
      // EmailJS configuration - using hardcoded values for testing
      const serviceID = 'service_hwv0j0m'; // Your confirmed service ID
      const templateID = 'template_hy0a6xt'; // The correct template ID
      
      console.log('Using serviceID:', serviceID);
      console.log('Using templateID:', templateID);
      console.log('Environment check:', {
        hasServiceEnv: !!import.meta.env.VITE_EMAILJS_SERVICE_ID,
        hasTemplateEnv: !!import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        hasKeyEnv: !!import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      });

      const templateParams = {
        name: formData.name,
        from_email: formData.email,
        title: formData.subject,
        message: formData.message,
        reply_to: formData.email
      };

      console.log('Sending email with params:', templateParams);
      const result = await emailjs.send(serviceID, templateID, templateParams);
      console.log('Email sent successfully! Result:', result);
      console.log('EmailJS response status:', result.status);
      console.log('EmailJS response text:', result.text);
      
      setSubmitStatus({
        isSubmitting: false,
        isSuccess: true,
        isError: false,
        message: 'Message sent successfully to your email!'
      });
      
      // Reset form
      setFormData({ name: '', email: '', subject: '', message: '' });
      
      // Reset success message after 8 seconds
      setTimeout(() => {
        setSubmitStatus({ isSubmitting: false, isSuccess: false, isError: false, message: '' });
      }, 8000);
      
    } catch (error: any) {
      console.error('EmailJS Error Details:', error);
      
      let errorMessage = 'Failed to send message. ';
      if (error?.text) {
        errorMessage += `Error: ${error.text}`;
      } else if (error?.status) {
        errorMessage += `Status: ${error.status}`;
      } else {
        errorMessage += 'Please check your internet connection and try again.';
      }
      
      setSubmitStatus({
        isSubmitting: false,
        isSuccess: false,
        isError: true,
        message: errorMessage
      });
      
      // Reset error message after 8 seconds
      setTimeout(() => {
        setSubmitStatus({ isSubmitting: false, isSuccess: false, isError: false, message: '' });
      }, 8000);
    }
  };

  const copyToClipboard = async () => {
    const emailContent = `Hello Dilini,

You received a new message from your portfolio website:

Name: ${formData.name}
Email: ${formData.email}
Subject: ${formData.subject}

Message:
${formData.message}

---
This message was sent from your portfolio contact form.
Please reply directly to: ${formData.email}`;

    try {
      await navigator.clipboard.writeText(emailContent);
      setSubmitStatus({
        isSubmitting: false,
        isSuccess: true,
        isError: false,
        message: 'Message copied to clipboard! You can now paste it in an email to dilinichethi@gmail.com'
      });
      
      setTimeout(() => {
        setSubmitStatus({ isSubmitting: false, isSuccess: false, isError: false, message: '' });
      }, 5000);
    } catch (err) {
      console.error('Failed to copy:', err);
      setSubmitStatus({
        isSubmitting: false,
        isSuccess: false,
        isError: true,
        message: 'Copy failed. Please manually send your message to: dilinichethi@gmail.com'
      });
    }
  };

  const contactInfo = [
    {
      icon: Mail,
      title: 'Email',
      value: 'dilinichethi@gmail.com',
      link: 'mailto:dilinichethi@gmail.com'
    },
    {
      icon: Phone,
      title: 'Phone',
      value: '+94 77 123 4567',
      link: 'tel:+94771234567'
    },
    {
      icon: MapPin,
      title: 'Location',
      value: 'Sabaragamuwa, Sri Lanka',
      link: '#'
    }
  ];

  const socialLinks = [
    {
      icon: Github,
      name: 'GitHub',
      url: '#',
      color: 'hover:text-gray-400'
    },
    {
      icon: Linkedin,
      name: 'LinkedIn',
      url: '#',
      color: 'hover:text-blue-400'
    },
    {
      icon: MessageSquare,
      name: 'WhatsApp',
      url: '#',
      color: 'hover:text-green-400'
    }
  ];

  return (
    <section id="contact" className="py-20 bg-slate-800">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">Get In Touch</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            I'm always open to discussing new opportunities, interesting projects, 
            or just having a chat about technology and design.
          </p>
        </div>

        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="bg-slate-700/20 rounded-xl p-8 border border-slate-600/30">
            <h3 className="text-2xl font-semibold text-white mb-8">Let's Connect</h3>
            
            {/* Contact Details */}
            <div className="space-y-6 mb-8">
              {contactInfo.map((info, index) => (
                <a
                  key={index}
                  href={info.link}
                  className="flex items-center space-x-4 p-4 bg-slate-700/50 rounded-lg hover:bg-slate-700/70 transition-all duration-300 group border border-slate-600/50 hover:border-blue-500/50"
                >
                  <div className="bg-blue-600/20 p-3 rounded-full group-hover:bg-blue-600/30 transition-colors duration-300">
                    <info.icon className="text-blue-400" size={24} />
                  </div>
                  <div>
                    <h4 className="text-white font-semibold">{info.title}</h4>
                    <p className="text-gray-400">{info.value}</p>
                  </div>
                </a>
              ))}
            </div>

            {/* Social Links */}
            <div>
              <h4 className="text-white font-semibold mb-4">Follow Me</h4>
              <div className="flex space-x-4">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.url}
                    className={`bg-slate-700/50 p-3 rounded-lg text-gray-400 ${social.color} transition-all duration-300 hover:transform hover:scale-110 border border-slate-600/50 hover:border-blue-500/50`}
                    title={social.name}
                  >
                    <social.icon size={24} />
                  </a>
                ))}
              </div>
            </div>

            {/* Availability */}
            <div className="mt-8 p-6 bg-green-600/20 border border-green-500/30 rounded-lg backdrop-blur-sm">
              <div className="flex items-center space-x-3">
                <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
                <span className="text-green-400 font-semibold">Available for opportunities</span>
              </div>
              <p className="text-gray-300 mt-2 text-sm">
                Currently seeking internship and entry-level positions in software development and UI/UX design.
              </p>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-slate-700/30 rounded-xl p-8 border border-slate-600/50">
            <h3 className="text-2xl font-semibold text-white mb-8">Send a Message</h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid sm:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-gray-300 mb-2">Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-slate-700/50 border border-slate-600/50 rounded-lg text-white focus:border-blue-400 focus:outline-none focus:bg-slate-700/70 transition-all duration-300"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-gray-300 mb-2">Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-slate-700/50 border border-slate-600/50 rounded-lg text-white focus:border-blue-400 focus:outline-none focus:bg-slate-700/70 transition-all duration-300"
                    placeholder="your.email@example.com"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="subject" className="block text-gray-300 mb-2">Subject</label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-slate-700/50 border border-slate-600/50 rounded-lg text-white focus:border-blue-400 focus:outline-none focus:bg-slate-700/70 transition-all duration-300"
                  placeholder="What's this about?"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-gray-300 mb-2">Message</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className="w-full px-4 py-3 bg-slate-700/50 border border-slate-600/50 rounded-lg text-white focus:border-blue-400 focus:outline-none focus:bg-slate-700/70 transition-all duration-300 resize-none"
                  placeholder="Tell me about your project or just say hello!"
                ></textarea>
              </div>

              <div className="space-y-4">
                <button
                  type="submit"
                  disabled={submitStatus.isSubmitting}
                  className={`w-full px-8 py-3 rounded-lg transition-all duration-300 flex items-center justify-center space-x-2 font-semibold hover:scale-105 hover:shadow-lg ${
                    submitStatus.isSubmitting 
                      ? 'bg-gray-600 cursor-not-allowed' 
                      : submitStatus.isSuccess 
                      ? 'bg-green-600 hover:bg-green-700 hover:shadow-green-500/25' 
                      : submitStatus.isError
                      ? 'bg-red-600 hover:bg-red-700 hover:shadow-red-500/25'
                      : 'bg-blue-600 hover:bg-blue-700 hover:shadow-blue-500/25'
                  } text-white`}
                >
                  {submitStatus.isSubmitting ? (
                    <>
                      <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                      <span>Sending...</span>
                    </>
                  ) : submitStatus.isSuccess ? (
                    <>
                      <CheckCircle size={20} />
                      <span>Sent Successfully!</span>
                    </>
                  ) : submitStatus.isError ? (
                    <>
                      <AlertTriangle size={20} />
                      <span>Failed - Try Again</span>
                    </>
                  ) : (
                    <>
                      <Send size={20} />
                      <span>Send Message</span>
                    </>
                  )}
                </button>

                <button
                  type="button"
                  onClick={copyToClipboard}
                  disabled={!formData.name || !formData.email || !formData.subject || !formData.message}
                  className="w-full px-8 py-3 rounded-lg transition-all duration-300 flex items-center justify-center space-x-2 font-semibold hover:scale-105 hover:shadow-lg border-2 border-blue-400 text-blue-400 hover:bg-blue-400/10 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  <Copy size={20} />
                  <span>Copy Message</span>
                </button>
              </div>

              {/* Status Message */}
              {submitStatus.message && (
                <div className={`p-4 rounded-lg border ${
                  submitStatus.isSuccess 
                    ? 'bg-green-600/20 border-green-500/50 text-green-300' 
                    : 'bg-red-600/20 border-red-500/50 text-red-300'
                }`}>
                  <p className="text-sm">{submitStatus.message}</p>
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;